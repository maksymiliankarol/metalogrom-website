import type { CardColor } from "../components/Card.astro";
import type { IconName } from "./icons";

export interface Project {
  slug: string;
  title: string;
  description: string;
  appUrl: string;
  icon: IconName;
  color: CardColor;
}

export const projects: Project[] = [
  {
    slug: "procurements",
    title: "Procurements",
    description:
      "Procurements matches companies that need something with companies that offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    appUrl: "https://procurements.metalogrom.com",
    icon: "partnerExchange",
    color: "indigo",
  },
  {
    slug: "herds",
    title: "Herds",
    description:
      "Herds are people in your city.",
    appUrl: "https://herds.metalogrom.com",
    icon: "groups",
    color: "orange",
  }
];