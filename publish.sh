#!/bin/sh
git add .
git commit -m "post"
git push
GIT_USER=mayandev yarn deploy