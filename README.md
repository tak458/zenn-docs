# Zenn Contents

* [📘 How to use](https://zenn.dev/zenn/articles/zenn-cli-guide)
* [📘 Markdown guide](https://zenn.dev/zenn/articles/markdown-guide)

# notebooks

## Create new page

### Windows (PowerShell)

```powershell
git pull;
$FileName = ((get-date -Format "yyyy\\MM\\dd")+".md");
if(-NOT (Test-Path $FileName)){
    New-Item $FileName;
    git add $FileName;
}
```

## Commit at the end of day

### Windows (PowerShell)

```powershell
git add -u
git commit -m "work end commit"
git push origin master
```
