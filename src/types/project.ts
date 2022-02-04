export default interface ProjectType {
  title: string;
  repoLink: string;
  thumbnailPath: string;
  link: string;
  tags: {
      js: boolean,
      ts: boolean,
      html: boolean,
      css: boolean,
      react: boolean,
      node: boolean,
    },
}

export interface ProjectTags {
  tags: {
    js: boolean,
    ts: boolean,
    html: boolean,
    css: boolean,
    react: boolean,
    node: boolean,
  },
}