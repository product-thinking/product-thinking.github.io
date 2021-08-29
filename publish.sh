#!/bin/sh
export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;export ALL_PROXY=socks5://127.0.0.1:1080
git add .
git commit -m "post"
git push
GIT_USER=jiajinli22 yarn deploy