
import path from "path";
import webpack from "webpack";
import WebpackUserscript from "webpack-userscript";
import { environment, generateHeader } from "./build-settings";
import { DIST_PATH, IMAGES_PATH, SRC_PATH } from "./paths";

const config: webpack.Configuration = {
  entry: "./src/main.js",
  output: {
    path: DIST_PATH,
    filename: "total-conversion.user.js",
  },
  resolve: {
    alias: {
      "jquery-ui-static": path.join(__dirname, "node_modules", "jquery-ui"),
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [SRC_PATH],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        include: [IMAGES_PATH],
        options: {
          limit: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ...environment,
    }),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
    }),
    new WebpackUserscript({
      headers: generateHeader,
    },
    ),
  ],
};

export default config;
