interface MenuProps {
  className?: string;
  vertical?: boolean;
  sidebar?: boolean; 
}

function Menu(props: MenuProps) {
  const { className, vertical, sidebar } = props;

  const classes = `
    ${sidebar ? "flex flex-col  p-4 gap-6 h-full" : "absolute top-8 right-4 flex gap-4 items-baseline"}
    ${vertical ? "flex-col items-center" : ""}
    text-l font-bold ${className}
  `;

  const menuClases =`hover:text-blue-500 hover:bg-white p-2`

  return (
    <nav className={classes}>
      <a href="/" className={menuClases}>Inicio</a>
      <a href="/board" className={menuClases}>Dashboard</a>
      <a href="/login" className="bg-blue-900 text-white hover:bg-blue-500 py-2 px-4 rounded">Iniciar sesión </a>
    </nav>
  );
}

export default Menu;
