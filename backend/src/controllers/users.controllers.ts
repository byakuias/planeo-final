import { Request, RequestHandler, Response } from 'express';
import { and, eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

import db from '../db/connection';
import { cards, projects, userProjects, users } from '../db/schema';
import { RegisterSchema, IdSchema, LoginSchema } from '../schemas/userSchemas';
import HttpError from '../errors/HttpError';
import ValidationError from '../errors/ValidationError';
import jwt from 'jsonwebtoken';

async function getAllUsers(req: Request, res: Response) {
  const allUsers = await db.select().from(users);

  res.send(allUsers);
}

async function getOneUser(req: Request, res: Response) {
  const userId = req.params.userId;

  // Verificaríamos y si no, error
  const { success, data: id, error } = IdSchema.safeParse(userId);

  if (!success) {
    throw new ValidationError(error);
  }
  const [user] = await db
    .select()
    .from(users)
    .where(and(eq(users.id, id)));

  if (!user) {
    throw new HttpError(404, `User with ID ${id} not found`);
  }

  res.send(user);
}

async function register(req: Request, res: Response) {
  const user = req.body;

  // Validamos usuario
  const { success, data: newUser, error } = RegisterSchema.safeParse(user);

  if (!success) {
    throw new ValidationError(error);
  }

  // Como sabemos que ha ido bien, ahora ya podemos encriptar la contraseña
  const saltNumber = 10;
  const encriptedPassword = await bcrypt.hash(newUser.password, saltNumber);

  // cambiar contraseña plana por encriptada
  newUser.password = encriptedPassword;

  const [userDB] = await db.insert(users).values(newUser).returning({
    id: users.id,
    name: users.name,
  });

  res.status(201).send(userDB);
}

async function login(req: Request, res: Response) {
  const { success, data: loginUser, error } = LoginSchema.safeParse(req.body);

  if (!success) {
    throw new ValidationError(error);
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, loginUser.email));

  if (!user) {
    throw new HttpError(404, 'Email or password incorrect');
  }

  const isPasswordCorrect = await bcrypt.compare(
    loginUser.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new HttpError(404, 'Email or password incorrect');
  }

  const userToSend = {
    id: user.id,
    name: user.name,
  };

  const token = jwt.sign(userToSend, process.env.TOKEN_SECRET!, {
    expiresIn: 3600,
  });

  res.cookie('access_token', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000,
    sameSite: 'none',
    secure: true,
  });

  res.send(userToSend);
}

async function checkSession(req: Request, res: Response) {
  const token = req.cookies.access_token;

  if (!token) {
    throw new HttpError(401, 'You must send an access token');
  }
  let payload;
  try {
    payload = jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch (error) {
    throw new HttpError(401, 'Token invalid or expired');
  }

  res.status(200).send({ message: 'Session is valid', user: payload });
}

async function logout(req: Request, res: Response) {
  res.clearCookie('access_token', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send({ message: 'Logged out successfully' });
}

async function createProjectForUser(userId: number, projectName: string) {
  // Paso 1: Verificar si el proyecto con el mismo nombre ya existe
  const existingProject = await db
    .select()
    .from(projects)
    .innerJoin(userProjects, eq(userProjects.projectId, projects.id))
    .where(and(eq(userProjects.userId, userId), eq(projects.name, projectName)))
    .limit(1);

  if (existingProject.length > 0) {
    // Paso 2: Si ya existe, devolver un mensaje de error
    return { message: 'No se puede crear un proyecto con el mismo nombre.' };
  }

  // Paso 3: Crear el nuevo proyecto
  const newProject = await db
    .insert(projects)
    .values({
      name: projectName,
    })
    .returning({ id: projects.id, name: projects.name });

  // Paso 4: Asociar el proyecto al usuario en la tabla intermedia
  await db.insert(userProjects).values({
    userId: userId,
    projectId: newProject[0].id,
  });

  return newProject[0];
}

async function getUserProjects(userId: number) {
  const data = await db
    .select()
    .from(projects)
    .innerJoin(userProjects, eq(userProjects.projectId, projects.id))
    .where(eq(userProjects.userId, userId));
  return data.map((item) => item.projects);
}

async function deleteProject(projectId: number) {
  await db.delete(cards).where(eq(cards.projectId, projectId));

  await db.delete(userProjects).where(eq(userProjects.projectId, projectId));

  await db.delete(projects).where(eq(projects.id, projectId));
}

export {
  getAllUsers,
  getOneUser,
  register,
  login,
  checkSession,
  logout,
  createProjectForUser,
  getUserProjects,
  deleteProject,
};
