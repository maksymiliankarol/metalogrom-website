export const neutrals = ["white", "offwhite", "pink", "grey", "sage", "offblack", "black"] as const;
export const accents = ["red", "gold", "yellow", "green", "blue", "navy"] as const;

export type AppColor = (typeof neutrals)[number] | (typeof accents)[number];

// Backgrounds that need dark text to stay readable
const light: AppColor[] = ["white", "offwhite", "pink", "grey", "gold", "yellow"];

export const textOn = (color: AppColor) =>
  light.includes(color) ? "text-black" : "text-white";