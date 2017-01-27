# scriptsディレクトリの一つ上のディレクトリに移動
$previousPath = Get-Location;
$path = Split-Path -Parent $MyInvocation.MyCommand.Path;
Set-Location ($path + "\..\");

# ファイル作成
git pull;
$FileName = ((get-date -Format "yyyy\\MM\\dd") + ".md");
if(-NOT (Test-Path $FileName)){
    New-Item $FileName;
}

# 元の場所に戻す
Set-Location $previousPath;