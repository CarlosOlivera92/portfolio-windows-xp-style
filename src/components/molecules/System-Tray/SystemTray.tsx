import Clock from "@components/atoms/Clock/Clock";
import styles from "./SystemTray.module.css";

const SystemTray = () => {
  return (
    <div className={styles.systemTray}>
      <Clock />
    </div>
  );
};
export default SystemTray;
