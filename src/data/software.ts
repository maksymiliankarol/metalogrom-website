export interface Software {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  appUrl: string;
  appBgColor: string;
  appTextColor: string;
}

export const software: Software[] = [
  {
    slug: "procurements",
    title: "Procurements",
    tagline: "Find who needs what you sell, and who sells what you need.",
    description:
      "Procurements matches companies that need something with companies that offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    appUrl: "https://procurements.metalogrom.com",
    appBgColor: "#023047",
    appTextColor: "#ffffff",
  },
];