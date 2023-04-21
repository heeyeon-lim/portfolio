export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type ProjectPost = {
  id: string;
  title: string;
  description: string;
  durationStart: string;
  durationEnd: string;
  team: string;
  role: Tag[];
  skills: Tag[];
  url: string;
  github: string;
  figma: string;
  cover: string;
  slug: string;
};

export type Page = {
  post: ProjectPost;
  markdown: string;
};
