import type { AppColor } from "./colors";

export interface App {
  slug: string;
  title: string;
  description: string;
  appUrl: string;
  color: AppColor;
}

export const apps: App[] = [
  {
    slug: "deals",
    title: "Deals",
    description:
      "Deals matches companies that need something with companies that offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    appUrl: "https://deals.metalogrom.com",
    color: "blue",
  },
  {
    slug: "herds",
    title: "Herds",
    description: "Herds are people in your city.",
    appUrl: "https://herds.metalogrom.com",
    color: "green",
  },
];