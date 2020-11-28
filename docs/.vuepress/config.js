const nav = require("./nav");
const sidebar = require("./sidebar");

module.exports = {
  title: "Hello Blog",
  base: "/vuepress-blog/",
  dest: "dist",
  description: "Just playing around",
  themeConfig: {
    sidebarDepth: 2,
    nav,
    sidebar,
    lastUpdated: "最后更新时间",
    docsDir: "docs",
    repo: "https://github.com/QYunChao/vuepress-blog",
  },
  extraWatchFiles: ["./nav.js", "./sidebar.js"],
  markdown: {
    lineNumbers: true,
  },
};
