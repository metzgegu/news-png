const fs = require("fs");
const Git = require('@lennym/commit');

exports.pushToGithub = () => {
  const img = fs.readFileSync('./dist/news.png');

  const git = Git({
    repo: 'metzgegu/news-png',
    token: process.env.GITHUB_API_TOKEN,
    branch: 'news'
  });

  git
  .add('news.png', img)
  .commit('Update news')
  .push()
  .then(() => console.log('All done'));
}
