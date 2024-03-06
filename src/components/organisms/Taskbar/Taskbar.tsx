import SystemTray from "@components/molecules/System-Tray/SystemTray";
import StartButton from "../../molecules/Start-button/StartButton";
import styles from "./Taskbar.module.css";

const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <StartButton />
      <SystemTray />
    </div>
  );
};
export default Taskbar;
