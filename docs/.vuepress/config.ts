import { defineUserConfig, DefaultThemeOptions } from "vuepress";
import { createPage } from "@vuepress/core";
const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();
export default defineUserConfig<DefaultThemeOptions>({
  title: "嗯哼人生",
  description: "莫与傻瓜论短长",
  async onInitialized(app) {
    if (app.pages.every((page) => page.path !== "/")) {
      const homepage = await createPage(app, {
        path: "/",
        frontmatter: {
          layout: "Layout",
        },
        content: `\
# 欢迎来到 ${app.options.title}

这是默认主页
`,
      });
      app.pages.push(homepage);
    }
  },
  themeConfig: {
    lastUpdatedText: "上次更新",
    //contributors: false,
    contributorsText: "鲁迅",
    editLinkText: "编辑",
    editLink: true,

    navbar: [
      {
        text: "google",
        link: "https://www.google.com.hk",
      },
      {
        text: "youtube",
        link: "https://www.youtube.com",
      },
    ],
    nav,
    sidebar,
  },
  plugins: [["@vuepress/plugin-shiki"]],
});
