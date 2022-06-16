const Parser = require("rss-parser");
const parser = new Parser();

exports.getNews = async () => {
  return await parser.parseURL(
    "https://hnrss.org/frontpage"
  );
};
