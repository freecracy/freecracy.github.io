#!/usr/bin/env sh

set -e
rm -rf articles/.vuepress/dist/*
yarn run build

cd articles/.vuepress/dist

echo 'www.cn100800.tk' > CNAME

git init
git config user.name freecracy
git config user.email 12114073+freecracy@users.noreply.github.com
git add -A
git commit -m 'deploy'

git push -f git@github.com:freecracy/freecracy.github.io master

cd -
