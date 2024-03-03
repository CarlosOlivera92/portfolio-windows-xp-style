import StartButton from "../../molecules/Start-button/StartButton";
import styles from "./Taskbar.module.css";

const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <StartButton />
    </div>
  );
};
export default Taskbar;
