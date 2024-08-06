import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const sliceModuleRules = (mode: string): webpack.RuleSetRule[] => {
  const isDev = mode === "development";
  const TS_LOADER = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const CSS_LOADER = {
    test: /(\.module\.scss|\.scss|\.css)$/,
    use: [
      isDev ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes("module")),
          },
        },
      },
      "sass-loader",
    ],
  };
  return [TS_LOADER, CSS_LOADER];
};
