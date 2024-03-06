import winxplogo from "@assets/icons/winxp.png";
import securityError from "@assets/icons/Security Error.png";
import volume from "@assets/icons/Volume.png";
import tourXp from "@assets/icons/Tour XP.png";
export interface IIconProps {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export enum IconNames {
  WINXPICON = "winxpicon",
  SECURITYERROR = "securityError",
  VOLUME = "volume",
  TOURXP = "tourxp",
}

export const iconList = {
  [IconNames.WINXPICON]: winxplogo,
  [IconNames.SECURITYERROR]: securityError,
  [IconNames.VOLUME]: volume,
  [IconNames.TOURXP]: tourXp,
};
