#!/usr/bin/env sh

set -e

#npm run build

cd articles/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:freecracy/freecracy.github.io master

cd -
