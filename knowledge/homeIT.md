# 自宅ネットワーク構成

## ルータ

d-room備え付け

## メインPC（自作）

| パーツ         | 構成                                               | 製品名 |
|:--------------|:---------------------------------------------------|:--|
|OS             |Windows 10 Pro 64-bit                               |   |
|CPU            |Intel Core i7 6700 @ 3.40GHz Skylake 14nm Technology|   |
|RAM            |16.0GB Dual-Channel Unknown @ 1064MHz (15-15-15-36) |   |
|Motherboard    |ASUSTeK COMPUTER INC. H170-PRO (LGA1151)            |   |
|Graphics(Inner)|Intel HD Graphics 530 (ASUStek Computer Inc)        |   |
|Graphics(Board)|nVIDIA GeForce GTX 1070                             |NE51070S15P2-1041J 8GB Super JetStream [PCIExp 8GB] ドスパラWeb限定モデル|
|Storage 1      |223GB Crucial CT240BX200SSD1 (SSD)                  |   |
|Storage 2      |2794GB Western Digital WDC WD30EZRZ-00Z5HB0 (SATA)  |   |
|Optical Drives |PIONEER BD-RW BDR-207M                              |   |

### 前世代PCのベンチマーク

```
-----------------------------------------------------------------------
CrystalDiskMark 3.0.1 x64 (C) 2007-2010 hiyohiyo
                           Crystal Dew World : http://crystalmark.info/
-----------------------------------------------------------------------
* MB/s = 1,000,000 byte/s [SATA/300 = 300,000,000 byte/s]

           Sequential Read :   505.825 MB/s
          Sequential Write :   189.856 MB/s
         Random Read 512KB :   381.142 MB/s
        Random Write 512KB :   190.461 MB/s
    Random Read 4KB (QD=1) :    25.206 MB/s [  6153.8 IOPS]
   Random Write 4KB (QD=1) :    63.703 MB/s [ 15552.6 IOPS]
   Random Read 4KB (QD=32) :   271.859 MB/s [ 66371.9 IOPS]
  Random Write 4KB (QD=32) :   174.695 MB/s [ 42650.1 IOPS]

  Test : 1000 MB [C: 33.0% (39.3/119.1 GB)] (x5)
  Date : 2012/02/15 20:39:27
    OS : Windows 7 Ultimate Edition SP1 [6.1 Build 7601] (x64)
```

## ノートPC

Let's Note CF-NX2

SHDDに換装済み
* 旧HGST HDD 5K1000-750 HTS541075A9E680
* Seagate SHDD ST1000LX015-SWT

Ubuntu 16.04にOS変更
* USBメモリでいれただけ
* [Let's note CF\-NX2にFedora 22を入れて最初にやったこと \- azmin's diary](http://azmin.hatenablog.com/entry/2015/10/23/014414)

### NAS

Synology DiskStation DS218play

* Hostname(Bonjour):ty458fam-media.local
* HDD:Westan Degital Red 3TB(SATA) 2台

# 実家ネットワーク構成

## ルータ

iBuffalo