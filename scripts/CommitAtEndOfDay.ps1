# 空のファイルを削除
get-childitem -recurse -include *.md -exclude readme.md|?{$_.length -eq 0}|%{remove-item $_}

git add -A
git commit -m "commit at the end of today"
git push origin master