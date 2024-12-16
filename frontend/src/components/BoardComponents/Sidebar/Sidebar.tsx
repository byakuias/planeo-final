import styles from "./Sidebar.module.css";

interface Props {
  projectName: string;
  isProjectCreated: boolean;
}

const Sidebar = ({ projectName, isProjectCreated }: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h2>Project</h2>
        {isProjectCreated && (
          <ul>
            <li>Members</li>
            <li>Settings</li>
          </ul>
        )}
      </div>

      <div className={styles.section}>
        <h2>My Projects</h2>
        <div className={styles.tablero}>
          <p>
            <strong>{projectName}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
