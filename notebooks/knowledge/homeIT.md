# 自宅ネットワーク構成

## ルータ

Buffalo Air Station WXR-1900DHP3

## 中継器

Buffalo Air Station WEX-1166DHP

## メイン PC（自作）

| パーツ          | 構成                                                 | 製品名                                                                      |
| :-------------- | :--------------------------------------------------- | :-------------------------------------------------------------------------- |
| OS              | Windows 10 Pro 64-bit                                |                                                                             |
| CPU             | Intel Core i7 6700 @ 3.40GHz Skylake 14nm Technology |                                                                             |
| RAM             | 16.0GB Dual-Channel Unknown @ 1064MHz (15-15-15-36)  |                                                                             |
| Motherboard     | ASUSTeK COMPUTER INC. H170-PRO (LGA1151)             |                                                                             |
| Graphics(Inner) | Intel HD Graphics 530 (ASUStek Computer Inc)         |                                                                             |
| Graphics(Board) | nVIDIA GeForce GTX 1070                              | NE51070S15P2-1041J 8GB Super JetStream [PCIExp 8GB] ドスパラ Web 限定モデル |
| Storage 1       | 512GB シリコンパワー SP512GBP34A60M28 (M.2 SSD)      | 3D TLC NAND M.2 2280 PCIe3.0x4 NVMe1.3 P34A60 シリーズ 5 年保証             |
| Storage 2       | 223GB Crucial CT240BX200SSD1 (SSD)                   |                                                                             |
| Storage 3       | 2794GB Western Digital WDC WD30EZRZ-00Z5HB0 (SATA)   |                                                                             |
| Optical Drives  | PIONEER BD-RW BDR-207M                               |                                                                             |

### ベンチマーク

#### 前世代 PC

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

#### 2020/12/13

```
------------------------------------------------------------------------------
CrystalDiskMark 8.0.0 x64 (UWP) (C) 2007-2020 hiyohiyo
                                  Crystal Dew World: https://crystalmark.info/
------------------------------------------------------------------------------
* MB/s = 1,000,000 bytes/s [SATA/600 = 600,000,000 bytes/s]
* KB = 1000 bytes, KiB = 1024 bytes

[Read]
  SEQ    1MiB (Q=  8, T= 1):   543.188 MB/s [    518.0 IOPS] < 15407.04 us>
  SEQ    1MiB (Q=  1, T= 1):   510.084 MB/s [    486.5 IOPS] <  2054.29 us>
  RND    4KiB (Q= 32, T= 1):   188.997 MB/s [  46141.8 IOPS] <   683.02 us>
  RND    4KiB (Q=  1, T= 1):    27.355 MB/s [   6678.5 IOPS] <   149.33 us>

[Write]
  SEQ    1MiB (Q=  8, T= 1):   458.892 MB/s [    437.6 IOPS] < 18204.11 us>
  SEQ    1MiB (Q=  1, T= 1):   427.376 MB/s [    407.6 IOPS] <  2447.79 us>
  RND    4KiB (Q= 32, T= 1):   137.234 MB/s [  33504.4 IOPS] <   951.08 us>
  RND    4KiB (Q=  1, T= 1):    66.421 MB/s [  16216.1 IOPS] <    61.32 us>

Profile: Default
   Test: 1 GiB (x5) [C: 91% (202/223GiB)]
   Mode:
   Time: Measure 5 sec / Interval 5 sec
   Date: 2020/12/13 22:27:52
     OS: Windows 10 Professional [10.0 Build 19042] (x64)
```

#### 2020/12/16 OS ドライブを SSD から M.2 に換装

```
------------------------------------------------------------------------------
CrystalDiskMark 8.0.0 x64 (UWP) (C) 2007-2020 hiyohiyo
                                  Crystal Dew World: https://crystalmark.info/
------------------------------------------------------------------------------
* MB/s = 1,000,000 bytes/s [SATA/600 = 600,000,000 bytes/s]
* KB = 1000 bytes, KiB = 1024 bytes

[Read]
  SEQ    1MiB (Q=  8, T= 1):  2470.084 MB/s [   2355.7 IOPS] <  3386.97 us>
  SEQ    1MiB (Q=  1, T= 1):  1372.023 MB/s [   1308.5 IOPS] <   761.94 us>
  RND    4KiB (Q= 32, T= 1):   361.821 MB/s [  88335.2 IOPS] <   350.75 us>
  RND    4KiB (Q=  1, T= 1):    41.069 MB/s [  10026.6 IOPS] <    99.39 us>

[Write]
  SEQ    1MiB (Q=  8, T= 1):  1949.277 MB/s [   1859.0 IOPS] <  4290.26 us>
  SEQ    1MiB (Q=  1, T= 1):  1777.548 MB/s [   1695.2 IOPS] <   588.90 us>
  RND    4KiB (Q= 32, T= 1):   255.716 MB/s [  62430.7 IOPS] <   500.80 us>
  RND    4KiB (Q=  1, T= 1):   127.670 MB/s [  31169.4 IOPS] <    31.86 us>

Profile: Default
   Test: 1 GiB (x5) [C: 13% (63/476GiB)]
   Mode:
   Time: Measure 5 sec / Interval 5 sec
   Date: 2020/12/16 22:21:28
     OS: Windows 10 Professional [10.0 Build 19042] (x64)
```

## ノート PC

Let's Note CF-NX2

SHDD に換装済み

- 旧 HGST HDD 5K1000-750 HTS541075A9E680
- Seagate SHDD ST1000LX015-SWT

Ubuntu 16.04 に OS 変更

- USB メモリでいれただけ
- [Let's note CF\-NX2 に Fedora 22 を入れて最初にやったこと \- azmin's diary](http://azmin.hatenablog.com/entry/2015/10/23/014414)
- ディスプレイの明るさ変更はうまくいかない

### NAS

Synology DiskStation DS218play

- Hostname(Bonjour):ty458fam-media.local
- HDD:Westan Degital Red 3TB(SATA) 2 台

## DNS

NAS に設定済み。設定ファイルは[./homeIT/dns_config]にある。

# 実家ネットワーク構成

## ルータ

iBuffalo
