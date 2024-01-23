import {
  BuildOptions,
  IEnvVariablesKeys,
  buildWebpack,
} from "@packages/build-config";
import * as Webpack from "webpack";
import path from "path";
import PackageJson from "./package.json";

export default function (env: IEnvVariablesKeys) {
  const options: BuildOptions = {
    mode: env.MODE,
    port: env.PORT || 3001,
    isDev: env.MODE === "development",
    isProd: env.MODE === "production",
    withAnalyzer: env.ANALYZER === "on",
    platform: env.PLATFORM ?? "mobile",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      locales: path.resolve(__dirname, "public", "locales"),
    },
  };
  const config = buildWebpack(options);
  config.plugins.push(
    new Webpack.container.ModuleFederationPlugin({
      name: "shop",
      filename: "remoteEntry.js", //default name for remote containers
      exposes: {
        "./Router": "./src/router/index.tsx",
      },
      shared: {
        ...PackageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: PackageJson.dependencies["react"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: PackageJson.dependencies["react-dom"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: PackageJson.dependencies["react-router-dom"],
        },
      },
    })
  );
  return config;
}
