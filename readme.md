# notebooks

## Create new page

### Windows (PowerShell)
```
git pull
$FileName = ((get-date -Format "yyyy\\MM\\dd")+".md")
if(-NOT (Test-Path $FileName)){
    New-Item $FileName
    git add $FileName
}
```

## Commit at the end of day

### Windows (PowerShell)
```
git add -u
git commit -m "work end commit"
git push origin master
```