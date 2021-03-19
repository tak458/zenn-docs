// migrate from qiita to zenn
// refs https://zenn.dev/luna_chevalier/articles/ca9cb142a3111944f6af

const https = require("https");
const crypto = require("crypto");
const fs = require("fs").promises;

const username = process.env.USER_NAME;

async function getQiita() {
  return new Promise((resolve, reject) => {
    const req = https.request(
      `https://qiita.com/api/v2/users/${username}/items`,
      (res) => {
        let rawContent = [];
        res.on("data", (chunk) => {
          rawContent.push(chunk);
        });
        res.on("end", () => {
          resolve(Buffer.concat(rawContent));
        });
      }
    );
    req.on("error", (e) => {
      reject(e);
    });

    req.end();
  });
}

async function createZennArticle(qiitaArticle){
  const hash = crypto.createHash("md5").update(qiitaArticle.body).digest("hex");

  const topics = qiitaArticle.tags.map((tag) => tag.name);
  const filename = `./articles/${hash.substring(0, 20)}.md`;
  const header = `---
title: "${qiitaArticle.title}"
emoji:
type: "tech"  # tech: 技術記事 / idea: アイデア
topics: [ "${topics.join('", "')}" ]
published: false
created_at: "${qiitaArticle.created_at}"
updated_at: "${qiitaArticle.updated_at}"
---
`;
  await fs.writeFile(filename, `${header}${qiitaArticle.body}`);
}

async function main() {
  const articles = JSON.parse(await getQiita()).map((article) => article);

  await Promise.all(articles.map(createZennArticle));
}

main();
