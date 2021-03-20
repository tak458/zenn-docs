---
title: "PowerShellのコンソール起動時に.envを読み込む"
emoji: "😽"
type: "tech"  # tech: 技術記事 / idea: アイデア
topics: [ "PowerShell" ]
published: false
created_at: "2018-04-03T12:08:37+09:00"
updated_at: "2018-04-03T12:08:37+09:00"
---
環境ごとに違う値であったり、Gitなどに入れたくない値などは.envファイルにまとめていたりする。
PowerShellのコンソール画面を起動する時に.envファイルを読み込んで欲しいときがあったので自動化してみた。

```powershell
Get-ChildItem (Get-Location) |
    Where-Object {-not $_.PsIsContainer -and $_.Name -eq ".env"} |
    Get-Content |
    ForEach-Object {
        $key, $value = $_.split('=', 2);
        Invoke-Expression "`$env:$key='$value'"
    }
```

やっていることは単純で、
1. カレントディレクトリに.envファイルがあるか探す
2. ファイルを読み込んで1行ずつ処理しだす
3. `=`で`$key`と`$value`に分割して環境変数に入れる
ということをやっている。

PowerShellでは環境変数は`$env:???`になるので、そこが参考URLとの違いになる。

あとはこれを自分のPowerShellプロファイルに書き込めば、コンソール起動時に読み込んでくれる。
PowerShellプロファイルは`$profile`変数を見ればファイルパスが確認できる。

参考URL
[power shell の変数について。 \- その他（プログラミング・開発） 解決済み\| 【OKWAVE】](https://okwave.jp/qa/q6899282.html)
