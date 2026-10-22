export const tileColors = {
  blue: "bg-blue text-white",
  green: "bg-green text-white",
  red: "bg-red text-white",
  yellow: "bg-yellow text-black",
  offblack: "bg-offblack text-white",
  none: "",
} as const;

export type TileColor = keyof typeof tileColors;