import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { pathsType } from "./paths";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const slicePlugins = (
  paths: pathsType,
  mode: string
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.publicHtmlPath,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      MODE:JSON.stringify(mode),
    }),
  ];
};
