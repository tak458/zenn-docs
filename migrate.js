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

// refs https://github.com/zenn-dev/zenn-editor/blob/02bf9b1e245f0b187470f4cdbe80f5fe38656829/packages/zenn-cli/cli/new-article.ts#L13-L17
function pickRandomEmoji(src) {
  // prettier-ignore
  const emojiList =["😺","📘","📚","📑","😊","😎","👻","🤖","😸","😽","💨","💬","💭","👋", "👌","👏","🙌","🙆","🐕","🐈","🦁","🐷","🦔","🐥","🐡","🐙","🍣","🕌","🌟","🔥","🌊","🎃","✨","🎉","⛳","🔖","📝","🗂","📌"]
  const bytes = Array.from(new TextEncoder().encode(src));
  const bytesSum = bytes.reduce(
    (pre, cur) => (pre + cur) % emojiList.length,
    0
  );
  return emojiList[Math.floor(bytesSum)];
}

function pickRandomSlug(src) {
  const hash = crypto.createHash("md5").update(src).digest("hex");
  return hash.substring(0, 20);
}

async function createZennArticle(qiitaArticle) {
  const topics = qiitaArticle.tags.map((tag) => tag.name);
  const filename = `./articles/${pickRandomSlug(qiitaArticle.body)}.md`;
  const header = `---
title: "${qiitaArticle.title}"
emoji: "${pickRandomEmoji(qiitaArticle.body)}"
type: "tech"  # tech: 技術記事 / idea: アイデア
topics: [ "${topics.join('", "')}" ]
published: true
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
