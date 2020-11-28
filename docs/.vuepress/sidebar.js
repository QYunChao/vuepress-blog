const project = [
  {
    title: "一个完整项目的搭建",
    collapsable: true,
    children: ["firstProject/introduce", "firstProject/start"],
  },
];

const web_front = [
  {
    title: "前端基础",
    collapsable: true,
    children: ["base/html", "base/js", "base/css"],
  },
  {
    title: "你不知道的JS",
    collapsable: true,
    children: [
      "JSyoudontknow/Part I",
      "JSyoudontknow/Part II",
      "JSyoudontknow/Part III",
    ],
  },
];

const algorithm = [
  {
    title: "leetcode",
    collapsable: true,
    children: ["leetcode/leetcode", "leetcode/sort"],
  },
];

const design_pattern = {
  title: "设计模式",
};

module.exports = {
  "/project/": project,
  "/web-front/": web_front,
  "/algorithm/": algorithm,
};
