import type { TileColor } from "../utils/buttonColor";

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
    description: "Matches people and organizations that need something with those who offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    url: "https://deals.metalogrom.com",
    color: "yellow",
  },
  {
    slug: "herds",
    title: "Herds",
    description: "A shared chat for your city, split into rooms by topic. Talk with the people who live where you do. No account needed.",
    url: "https://herds.metalogrom.com",
    color: "red"
  },
];