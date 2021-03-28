# scriptsディレクトリの一つ上のディレクトリに移動
$previousPath = Get-Location;
$path = Split-Path -Parent $MyInvocation.MyCommand.Path;
Set-Location ($path + "\..\");

# ファイル作成
git pull;
$dir = "diary\" + (get-date -Format "yyyy\\MM");
if (-NOT (Test-Path $dir)) {
    New-Item $dir -ItemType directory;
}
$FileName = ("diary\" + (get-date -Format "yyyy\\MM\\dd") + ".md");
if (-NOT (Test-Path $FileName)) {
    Copy-Item "diary\template.md" $FileName;
}

# 元の場所に戻す
Set-Location $previousPath;