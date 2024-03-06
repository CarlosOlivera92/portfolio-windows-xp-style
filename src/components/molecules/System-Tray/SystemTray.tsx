import Clock from "@components/atoms/Clock/Clock";
import styles from "./SystemTray.module.css";
import { systemTrayIcons } from "@data/static/SystemTray";
import { Icon } from "@components/atoms/Icon/Icon";

const SystemTray = () => {
  return (
    <div className={styles.systemTray}>
      <div className={styles.icons}>
        {systemTrayIcons
          ? systemTrayIcons.map((icon) => <Icon name={icon.name} />)
          : null}
      </div>
      <Clock />
    </div>
  );
};
export default SystemTray;
