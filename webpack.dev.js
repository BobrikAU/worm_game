import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    watchFiles: ["./src/**/*.html"],
  },
});
