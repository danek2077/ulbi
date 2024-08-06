import path from "path";
export type pathsType = {
  entryPath: string;
  outputPath: string;
  publicHtmlPath: string;
};
export const paths: pathsType = {
  entryPath: path.resolve(__dirname, "..", "..", "src", "index.tsx"),
  outputPath: path.resolve(__dirname, "..", "..", "dist"),
  publicHtmlPath: path.resolve(__dirname, "..", "..", "public", "index.html"),
};