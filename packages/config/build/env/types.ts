export interface EnvVariables {
  PORT: number;
  MODE: "production" | "development";
  ANALYZER?: string;
  PLATFORM?: "mobile" | "desktop";
  SHOP_REMOTE_URL?: string;
  ABOUT_REMOTE_URL?: string;
}
export type IEnvVariablesKeys = Record<keyof EnvVariables, any>;
