import { useEffect, useState } from "react";
import Kanban from "../../components/BoardComponents/Kanban/Kanban";
import SecondaryNavbar from "../../components/BoardComponents/SecondaryNavbar/SecondaryNavbar";
import Sidebar from "../../components/BoardComponents/Sidebar/Sidebar";
import styles from "./Board.module.css";
import { Project } from "../../types/types";
import { Footer, Header } from "../../components";

const Board = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleDeleteProject = (projectId: number) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  };

  const handleAddProject = (newProject: Project) => {
    const newProjectList = [...projects, newProject];
    localStorage.setItem("activeProject", JSON.stringify(newProject));
    setActiveProject(newProject);
    setProjects(newProjectList);
  };

  const switchProject = (id: number) => {
    if (id === 0) {
      setActiveProject(null);
    }
    const activeProject = projects.find((project) => project.id === id);
    if (activeProject) setActiveProject(activeProject);
    localStorage.setItem("activeProject", JSON.stringify(activeProject));
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:3000/getProjects/${2}`);

        if (response.ok) {
          const data = await response.json();
          const storedActiveProject = localStorage.getItem("activeProject");

          if (data.projects.length > 0) {
            setProjects(data.projects);
            setActiveProject(data.projects[0]);
            if (storedActiveProject) {
              const parsedProject: Project = JSON.parse(storedActiveProject);
              setActiveProject(parsedProject);
            }
          }
        }
      } catch (error) {
        console.error("Error al verificar el proyecto:", error);
      }
    };

    fetchProject();
  }, []);

  return (
    <>
    <div className={styles.container}>
    <Header />
      <div className={styles.content}>
        <Sidebar
          projects={projects}
          setActiveProject={switchProject}
          deleteProject={handleDeleteProject}
          addProject={handleAddProject}
          />

        <div className={styles.main}>
          {projects.length > 0 && (
            <>
              <SecondaryNavbar projectName={activeProject?.name} />
              <Kanban projectId={activeProject?.id} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
          </>
  );
};

export default Board;