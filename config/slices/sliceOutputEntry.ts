import { paths } from "./paths";
export const sliceOutputEntry = () => {
  return {
    entry: paths.entryPath,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.outputPath,
      clean: true,
      publicPath: "/",
    },
  };
};
