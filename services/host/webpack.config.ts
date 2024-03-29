import {
  BuildOptions,
  IEnvVariablesKeys,
  buildWebpack,
} from "@packages/build-config";
import * as Webpack from "webpack";
import PackageJson from "./package.json";
import path from "path";

export default function (env: IEnvVariablesKeys) {
  const options: BuildOptions = {
    mode: env.MODE,
    port: env.PORT,
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
  const SHOP_REMOTE_URL = env?.SHOP_REMOTE_URL ?? "http://localhost:3001";

  const ABOUT_REMOTE_URL = env?.ABOUT_REMOTE_URL ?? "http://localhost:3002";
  const config = buildWebpack(options);
  config.plugins.push(
    new Webpack.container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js", //default name for remote containers
      remotes: {
        shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
        about: `about@${ABOUT_REMOTE_URL}/remoteEntry.js`,
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
