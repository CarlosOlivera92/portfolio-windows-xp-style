import styles from "./Icon.module.css";
import { iconList, IIconProps } from "@data/interfaces/Icons";

export const Icon = ({ name, classList = "", selfRef }: IIconProps) => {
  const iconSrc = iconList[name as keyof typeof iconList];

  return (
    <span ref={selfRef} className={`${styles.icon} ${classList}`}>
      <img src={iconSrc} alt={name} className={styles.iconImg} />
    </span>
  );
};
