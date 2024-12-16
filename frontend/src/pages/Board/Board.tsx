import { useState } from "react";
import Kanban from "../../components/BoardComponents/Kanban/Kanban";
import Navbar from "../../components/BoardComponents/Navbar/Navbar";
import SecondaryNavbar from "../../components/BoardComponents/SecondaryNavbar/SecondaryNavbar";
import Sidebar from "../../components/BoardComponents/Sidebar/Sidebar";
import styles from "./Board.module.css";

const Board = () => {
  const [isProjectCreated, setIsProjectCreated] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const handleProjectCreation = (status: boolean) => {
    setIsProjectCreated(status);
  };

  const handleProjectName = (name: string) => {
    setProjectName(name);
  };

  return (
    <div className={styles.container}>
      <Navbar
        projectName={projectName}
        setIsProjectCreated={handleProjectCreation}
        setProjectName={handleProjectName}
      />
      <div className={styles.content}>
        <Sidebar projectName={projectName} isProjectCreated={isProjectCreated}/>
        {isProjectCreated && (
          <div className={styles.main}>
            <SecondaryNavbar projectName={projectName} />
            <Kanban />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
