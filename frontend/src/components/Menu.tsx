import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface MenuProps {
  className?: string;
  vertical?: boolean;
  sidebar?: boolean;
}

function Menu(props: MenuProps) {
  const { className, vertical, sidebar } = props;
  const { isAuthenticated } = useAuth();

  const classes = `
    ${
      sidebar
        ? 'flex flex-col  p-4 gap-6 h-full'
        : 'absolute top-8 right-4 flex gap-4 items-baseline'
    }
    ${vertical ? 'flex-col items-center' : ''}
    text-l font-bold ${className}
  `;

  const menuClases = `hover:text-blue-500 hover:bg-white p-2`;

  return (
    <nav className={classes}>
      <NavLink to="/" className={menuClases}>
        Inicio
      </NavLink>
      <NavLink to="/sobre-nosotros" className={menuClases}>
        Sobre Nosotros
      </NavLink>
      {/* {isAuthenticated && (
        <NavLink to="/board" className={menuClases}>
          Tablero
        </NavLink>
      )} */}
      <NavLink to="/board" className={menuClases}>
        Tablero
      </NavLink>
      {!isAuthenticated && (
        <NavLink to="/login" className={menuClases}>
          Inicia sesión
        </NavLink>
      )}
      {!isAuthenticated && (
        <NavLink
          to="/register"
          className="bg-blue-900 text-white hover:bg-blue-500 py-2 px-4 rounded"
        >
          Regístrate!
        </NavLink>
      )}
    </nav>
  );
}

export default Menu;
