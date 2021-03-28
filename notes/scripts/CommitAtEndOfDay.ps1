# 空のファイルを削除
Get-ChildItem -Recurse -Include *.md -Exclude readme.md | Where-Object { $_.Length -eq 0 } | ForEach-Object { Remove-Item $_ }

git add -A
git commit -m "commit at the end of today"
git push origin master