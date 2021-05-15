import { defineUserConfig, DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  title: "个人小站",
  description: "blog",
  bundler: "@vuepress/vite",
});
