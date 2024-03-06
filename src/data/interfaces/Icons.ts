import winxplogo from "@assets/icons/winxp.png";

export interface IIconProps {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export enum IconNames {
  WINXPICON = "winxpicon",
}

export const iconList = {
  [IconNames.WINXPICON]: winxplogo,
};
