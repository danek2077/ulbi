import path from "path";
export type pathsType = {
  entryPath: string;
  outputPath: string;
  publicHtmlPath: string;
  aliasSrcPath: string;
};
export const paths: pathsType = {
  entryPath: path.resolve(__dirname, "..", "..", "src", "app", "entry-router","entry.tsx"),
  outputPath: path.resolve(__dirname, "..", "..", "dist"),
  publicHtmlPath: path.resolve(__dirname, "..", "..", "public", "index.html"),
  aliasSrcPath: path.resolve(__dirname, "..", "..", "src"),
};
