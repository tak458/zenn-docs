# 構築手順

## ログイン

Bonjourを使ってSSH接続する。
ホスト名：rapberrypi.local
ユーザ名：pi
パスワード：[AppleID]

## インストール

## ユーザ設定

[Make: Japan \| Raspberry Piを攻撃から守るための手順](http://makezine.jp/blog/2017/09/secure-your-raspberry-pi-against-attackers.html)

```
sudo /usr/sbin/useradd --groups sudo -m takahiro
sudo passwd takahiro  // いつもの
sudo passwd root  // AppleID
sudo passwd --lock pi
```

## vim設定

vi互換モードを切る

```
echo "set nocompatible">~/.vimrc
```

## 自動更新
[Debian 系で unattended\-upgrades を有効にする場合の追加設定 \(メール通知, autoremove, autoclean, 再起動\) \- Qiita](https://qiita.com/kitsuyui/items/11b4c0ebb9d1d2181853)

## メール設定
[debianサーバでメールを送る（exim4編） \- ひゃまだのブログ](https://sites.google.com/site/hymd3a/linux/debian-exim4)
[メールを受け取らないサーバでのexim4の設定 \- たていすのメモ2](http://tateisu.hatenablog.com/entry/2012/03/03/083829)

# ラズパイゼロの初期設定
[Installing operating system images \- Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)
[Raspbianのインストールと最強の初期設定 \| 純規の暇人趣味ブログ](https://jyn.jp/raspbian-setup/)
Synology NASとラズパイZero間でSSH公開鍵の設定。これでrsyncでパスワード不要になる。