// migrate from qiita to zenn
// refs https://zenn.dev/luna_chevalier/articles/ca9cb142a3111944f6af

const https = require("https");
const crypto = require("crypto");
const fs = require("fs").promises;

/**
 * Qiita API から記事を取得する
 * @returns
 */
async function getQiita(username) {
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

/**
 * アイキャッチの絵文字を生成する
 * refs https://github.com/zenn-dev/zenn-editor/blob/02bf9b1e245f0b187470f4cdbe80f5fe38656829/packages/zenn-cli/cli/new-article.ts#L13-L17
 * @param {string} src
 * @returns
 */
function pickRandomEmoji(src) {
  // prettier-ignore
  const emojiList = ["😺","📘","📚","📑","😊","😎","👻","🤖","😸","😽","💨","💬","💭","👋","👌","👏","🙌","🙆","🐕","🐈","🦁","🐷","🦔","🐥","🐡","🐙","🍣","🕌","🌟","🔥","🌊","🎃","✨","🎉","⛳","🔖","📝","🗂","📌"]
  // src 文字列からランダムな絵文字を抽出
  const bytes = Array.from(new TextEncoder().encode(src));
  const bytesSum = bytes.reduce(
    (pre, cur) => (pre + cur) % emojiList.length,
    0
  );
  return emojiList[bytesSum];
}

/**
 * zenn slug id を生成する
 * @param {string} src
 * @returns
 */
function pickRandomSlug(src) {
  const hash = crypto.createHash("md5").update(src).digest("hex");
  return hash.substring(0, 20);
}

/**
 * Qiita 記事から zenn 記事を生成する
 * @param {*} qiitaArticle
 */
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

  const username = process.env.USER_NAME;

  const articles = JSON.parse(await getQiita(username));

  await Promise.all(articles.map(createZennArticle));
}

main();
