const moment = require("moment");

module.exports = {
  // plugins: [
  //   "@vuepress/last-updated",
  //   {
  //     transformer: (timestamp, lang) => {
  //       // 不要忘了安装 moment
  //       const moment = require("moment");
  //       moment.locale(lang);
  //       return moment(timestamp).fromNow();
  //     },
  //   },
  // ],
  title: "Aoe夜白",
  description: "真正的发现，不是遇见新的风景，而是寻得新的眼睛",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/avatar.jpg",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // 关闭默认腾讯公益404页面
    noFoundPageByTencent: false,
    // 通过valine配置评论和浏览量功能
    valineConfig: {
      appId: "I4NFviHFDEmK088Li8psmWHl-gzGzoHsz", // your appId
      appKey: "jxSeL1fN5VzaAea1rxxrrfYJ", // your appKey
      // 默认关闭评论功能
      showComment: false,
      // 默认开启浏览量统计
      visitor: true,
    },
    //  默认开始子侧边栏
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "LearnCSS",
            // "link": "/docs/theme-reco/"
            link: "https://web.dev/learn/css/",
          },
          {
            text: "文档",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "链接",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/kylosong",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    author: "Mr.Song",
    authorAvatar: "/avatar.jpg",
    record: "safe",
    startYear: "2017",
    // 启用页面滚动效果
    smoothScroll: true,

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // "nextLinks": false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // "prevLinks": false
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3"],
  }
  
};
