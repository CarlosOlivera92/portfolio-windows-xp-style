import Taskbar from "../../organisms/Taskbar/Taskbar";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <Taskbar />
    </div>
  );
};
export default Desktop;
