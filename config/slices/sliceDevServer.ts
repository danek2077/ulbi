import "webpack-dev-server";
import type { Configuration } from "webpack";

export const sliceDevServer = (): Partial<Configuration> => {
  return {
    devServer: {
      static: { directory: "./dist", watch: true },
      historyApiFallback: true,
    },
    optimization: {
      runtimeChunk: "single",
    },
  };
};
