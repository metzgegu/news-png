const { draw } = require("./src/draw");
const { getNews } = require("./src/rss");
const { pushToGithub } = require("./src/github");

(async () => {
  const news = await getNews();
  draw(news.items.map((item) => item.title));
  pushToGithub()
})();
