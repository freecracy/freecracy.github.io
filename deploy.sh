#!/usr/bin/env sh

set -e

#npm run build

cd articles/.vuepress/dist

echo 'cn100800.tk' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:freecracy/freecracy.github.io master

cd -
