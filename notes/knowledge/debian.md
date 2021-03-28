# Debian note

## 初期構築

### debian stratch を USBメモリに書き込み

### 設定作業

sudo をインストール

```

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
