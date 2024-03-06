import { Icon } from "@components/atoms/Icon/Icon";
import styles from "./StartButton.module.css";
import { IconNames } from "@data/interfaces/Icons";
const StartButton = () => {
  return (
    <div className={styles.startButton}>
      <Icon name={IconNames.WINXPICON} />
      <p>Inicio</p>
    </div>
  );
};
export default StartButton;
