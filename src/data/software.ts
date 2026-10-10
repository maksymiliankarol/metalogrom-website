export interface Software {
  slug: string;
  title: string;
  description: string;
  appUrl: string;
}

export const software: Software[] = [
  {
    slug: "procurements",
    title: "Procurements",
    description:
      "Procurements matches companies that need something with companies that offer it. Describe what you want to buy or sell in your own words, and see who's a fit.",
    appUrl: "https://procurements.metalogrom.com"
  },
];