import Warning from "../assets/icons/warning.svg";
import Handshake from "../assets/icons/handshake.svg"
import Groups from "../assets/icons/groups.svg"

export const icons = {
  warning: Warning,
  partnerExchange: Handshake,
  groups: Groups,
} as const;

export type IconName = keyof typeof icons;