# Raspberry Pi Zero W

## 初期構築

### raspbian(lite)をダウンロード
### EtcherでSDカードに書き込み
### sshファイルを作る
```
(空ファイル)
```

### Wi-fiの設定ファイルを作る
wpa_supplicant.conf
```
country=JP
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="Buffalo-G-055E"
    psk=8a16c41b92510ee4208b0d494271dbf7747e1564f3ece6e8ae8d000f0d0fb657
}
```

### 設定作業

pi / raspberry でログイン

```
# pi ユーザのパスワード変更
$ sudo passwd root

$ sudo /usr/sbin/useradd --groups sudo -m takahiro -s /bin/bash
$ sudo passwd takahiro
$ sudo passwd --lock pi

# apt更新
$ sudo apt-get update
$ sudo apt-get -y dist-upgrade
$ sudo apt-get -y autoremove
$ sudo apt-get autoclean

# 自動更新
$ sudo apt-get install -y unattended-upgrades
$ sudo nano /etc/apt/apt.conf.d/50unattended-upgrades
"o=${distro_id},n=${distro_codename}"; # Origin-Patternに書き込む

# raspi-config
$ sudo raspi-config nonint do_memory_split 16
$ sudo raspi-config nonint do_hostname raspi-w-1
$ sudo raspi-config nonint do_expand_rootfs
$ sudo timedatectl set-timezone Asia/Tokyo

# exim4
$ sudo apt -y install exim4 mailutils
$ sudo dpkg-reconfigure exim4-config

General type of mail configuration:
->mail sent by smarthost; no local mail

System mail name:
->raspi-w-1

IP-addresses to listen on for incoming SMTP connections:
->127.0.0.1 ; ::1

Other destinations for which mail is accepted:
->raspi-w-1

Visible domain name for local users:
->raspi-w-1

IP address or host name of the outgoing smarthost:
->ty458fam.myds.me

Keep number of DNS-queries minimal (Dial-on-Demand)?
->Yes

Split configuration into small files?
->No

Root and postmaster mail recipient:
->

$ sudo nano /etc/aliases
root: takahiro # ← 追記
takahiro: takahiro@ty458fam.myds.me # ← 追記

$ cat /etc/exim4/update-exim4.conf.conf
dc_eximconfig_configtype='satellite'
dc_other_hostnames='raspi-w-1'
dc_local_interfaces='127.0.0.1 ; ::1'
dc_readhost='raspi-w-1'
dc_relay_domains=''
dc_minimaldns='true'
dc_relay_nets=''
dc_smarthost='ty458fam.myds.me'
CFILEMODE='644'
dc_use_split_config='false'
dc_hide_mailname='true'
dc_mailname_in_oh='true'
dc_localdelivery='mail_spool'

# logwatch
$ sudo apt -y install logwatch
$ sudo cp /usr/share/logwatch/default.conf/logwatch.conf /etc/logwatch/conf/
$ sudo mkdir /var/cache/logwatch
$ sudo nano /etc/logwatch/conf/logwatch.conf
Output = mail # 変更
Detail = Med # 変更


# http://yagitsawa.github.io/2017/06/17/raspberrypi-camera-rtsp-server/
$ sudo raspi-config
Interfacing Options で Camera を有効化
$ sudo modprobe bcm2835-v4l2
$ sudo nano /etc/modules
bcm2835-v4l2 # 末尾に追記
$ sudo apt-get -y install vlc
$ sudo raspivid -o - -t 0 -w 640 -h 480 | cvlc -vvv stream:///dev/stdin --sout '#rtp{sdp=rtsp://:8554/}' :demux=h264

# https://github.com/mpromonet/v4l2rtspserver
; https://mincode.net/?p=129
$ cd ~
$ sudo apt-get install -y git cmake
$ git clone https://github.com/mpromonet/v4l2rtspserver.git
$ cd v4l2rtspserver
$ cmake . && make
$ sudo make install
$ sudo modprobe -v bcm2835-v4l2
$ sudo systemctl start v4l2rtspserver.service
$ sudo systemctl enable v4l2rtspserver.service

$ sudo nano /etc/systemd/system/v4l2rtspserver.service
# systemd configuration for v4l2rtspserver
# /etc/systemd/system/v4l2rtspserver.service
 
[Unit]
Description=v4l2rtspserver rtsp streaming server
After=network.target
 
[Service]
ExecStartPre=/usr/bin/v4l2-ctl --set-ctrl h264_i_frame_period=5
ExecStart=/usr/local/bin/v4l2rtspserver -F 5 -W 1600 -H 1200
#ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=root
Group=video
Restart=always
 
[Install]
WantedBy=multi-user.target
```

参考URL
* [Installing operating system images \- Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)
* [Make: Japan \| Raspberry Piを攻撃から守るための手順](http://makezine.jp/blog/2017/09/secure-your-raspberry-pi-against-attackers.html)
* [Raspbianのインストールと最強の初期設定 \| 純規の暇人趣味ブログ](https://jyn.jp/raspbian-setup/)

## カメラと連携

## Synology NASとrsync

Synology NASとラズパイZero間でSSH公開鍵の設定。これでrsyncでパスワード不要になる。

# Raspberry Pi 3 Model B

## 初期構築

* raspbian(lite)をダウンロード
* EtcherでSDカードに書き込み
* sshファイルを作る
* Wi-fiの設定ファイルを作る
* 設定作業
```

```

参考URL
* [Installing operating system images \- Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)
* [Make: Japan \| Raspberry Piを攻撃から守るための手順](http://makezine.jp/blog/2017/09/secure-your-raspberry-pi-against-attackers.html)
* [Debian 系で unattended\-upgrades を有効にする場合の追加設定 \(メール通知, autoremove, autoclean, 再起動\) \- Qiita](https://qiita.com/kitsuyui/items/11b4c0ebb9d1d2181853)

## メール設定

```

```

参考URL
* [debianサーバでメールを送る（exim4編） \- ひゃまだのブログ](https://sites.google.com/site/hymd3a/linux/debian-exim4)
* [メールを受け取らないサーバでのexim4の設定 \- たていすのメモ2](http://tateisu.hatenablog.com/entry/2012/03/03/083829)

## logwatch
https://www.mk-mode.com/octopress/2017/09/22/debian-9-logwatch-installation/
http://wings2fly.jp/yaneura/raspberry-pi-security-logwatch/

## Google Homeと連携

## Docker
[Get Docker CE for Debian \| Docker Documentation](https://docs.docker.com/install/linux/docker-ce/debian/#set-up-the-repository)
