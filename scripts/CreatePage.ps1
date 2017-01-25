git pull;
$FileName = ((get-date -Format "yyyy\\MM\\dd")+".md");
if(-NOT (Test-Path $FileName)){
    New-Item $FileName;
    git add $FileName;
}