import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Arthur Morais",
  EMAIL: "arthurfmorais@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Blog about Data Science, Machine Learning and personal projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles about Machine Learning, Explainable AI and Python.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have built.",
};

export const EDUCATION: Metadata = {
  TITLE: "Education",
  DESCRIPTION: "My academic background.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Personal projects with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/ArthurMor4is"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/arthurfmorais/",
  }
];
