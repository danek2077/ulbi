import webpack from "webpack";
import { slicePlugins } from "./config/slices/slicePlugins";
import { paths } from "./config/slices/paths";
import { sliceOutputEntry } from "./config/slices/sliceOutputEntry";
import { sliceLoaders } from "./config/slices/sliceLoaders";
import "webpack-dev-server";
import { devToolMap } from "./config/slices/devToolMap";
import { sliceDevServer } from "./config/slices/sliceDevServer";

const mode = "development";
const config: webpack.Configuration = {
  mode,
  devtool: devToolMap(mode),
  ...sliceDevServer(),
  ...sliceOutputEntry(),
  plugins: slicePlugins(paths),
  module: {
    rules: sliceLoaders(mode),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "scss", "css",'.svg'],
    alias: {
      "#src": paths.aliasSrcPath,
    },
  },
};

export default config;
