/**
 * 静态资源处理
 */
module.exports = () => {
  let jsFiles = ["libs.js", "main.js"];
  let cssFiles = ["main.css"];
  let devHost = "//localhost:3004";
  const assets = {
    js: [],
    css: [],
  };
  if (__IS_PROD__) {
    // 生产环境
    const assetsMap = require("@dist/static/manifest.json");
    jsFiles.forEach((item) => {
      if (assetsMap[item]) {
        assets.js.push(
          `<script type="text/javascript"  src="${assetsMap[item]}"></script>`
        );
      }
    });
    cssFiles.forEach((item) => {
      if (assetsMap[item]) {
        assets.css.push(
          `<link rel="stylesheet" type="text/css" href="${assetsMap[item]}"/>`
        );
      }
    });
  } else {
    // 开发环境
    assets.js.push(
      `<script type="text/javascript" src="${devHost}/js/main.js"></script>`
    );
  }
  return assets;
};
