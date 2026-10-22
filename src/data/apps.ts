import type { TileColor } from "../utils/tileColors";

export interface App {
  slug: string;
  title: string;
  description: string;
  url: string;
  color?: TileColor;
}

export const apps: App[] = [
  {
    slug: "deals",
    title: "Deals",
    description: "Deals matches companies that need something with companies that offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    url: "https://deals.metalogrom.com",
    color: "blue",
  },
  {
    slug: "herds",
    title: "Herds",
    description: "Herds are people in your city.",
    url: "https://herds.metalogrom.com",
    color: "green"
  },
];