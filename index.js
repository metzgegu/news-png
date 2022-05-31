const { draw } = require("./src/draw");
const { getNews } = require("./src/rss");

(async () => {
    const news = await getNews()
    draw(news.items.map(item => item.title))
})();
