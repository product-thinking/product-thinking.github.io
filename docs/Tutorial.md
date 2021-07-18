---
id: Tutorial
title: 如何维护这个网站
sidebar_position: 2
sidebar_label: 如何维护
---

## 环境准备

- [git](https://git-scm.com/downloads)，版本管理器
- [node](https://nodejs.org/en/download/)，可选，如果需要本地预览则安装
- [yarn](https://yarn.bootcss.com/docs/install/#windows-stable)，一个包管理器，可选
- [markdown](https://www.markdownguide.org/cheat-sheet/)，一种文本语法
- [typora](https://typora.io/)，一个 Markdown 编辑器

相关软件的安装以及环境配置请自行 [Google](https://google.com) / [百度](https://baidu.com)

## 检查环境

1、打开命令行工具

- For Win： `win+R` 打开任务管理器，输入 cmd 打开命令行工具
- For Mac：`cmd+space` 打开 spotlight，输入 `terminal`

2、检查环境

在命令行工具中，输入下面的命令检查 Git 和 Node 的环境是否生效。

```console
git --version
node --version
```

![image-20210718173519496](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/image-20210718173519496.png)

## 申请权限

注册一个 [GitHub](https://github.com) 账号，发送你的用户名或者注册邮箱给 <a href="mailto:phillzou@gmail.com">管理员</a>，管理员会返回一封确认邮件，点击确认后即可加入组织。

## 克隆项目

使用 git 命令将[项目](https://github.com/product-thinking/product-thinking.github.io) clone 至本地。

```console
git clone https://github.com/product-thinking/product-thinking.github.io
```

使用你熟悉的编辑器打开，下面的截图我使用的是 [vscode](https://code.visualstudio.com/download)。

![product-thinking-tutorial-1](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/product-thinking-tutorial-1.png)

项目的目录如下，我们只需要关心 docs 里的文件，里面是我们所编写的 product-thinking 内容。

```
├── README.md
├── babel.config.js
├── blog
├── docs(这里有我们所写的内容)
├── docusaurus.config.js
├── node_modules
├── package.json
├── publish.sh
├── sidebars.js
├── src
├── static
└── yarn.lock
```

## 文件

`docs/` 文件夹里每一个文件，都对应着网站左侧导航栏的一个标题。

![image-20210718181711087](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/image-20210718181711087.png)

所有的文件都是以 `.md` 格式结尾，说明这是一个 Markdown 文件，希望你可以先去熟悉一下 [Markdown 的相关语法](https://www.markdownguide.org/cheat-sheet/)。推荐使用 [typora](https://typora.io/) 打开 Markdown 文件，对于新手来说编辑起来会更方便。

![image-20210718182152745](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/image-20210718182152745.png)

文件的开头有一些参数配置，含义如下：

- `sidebar_position`：导航栏上的位置
- title：文章的标题
- sidebar_label：导航栏的名字

## 新增文章

在 `docs/` 文件夹里新增文件或者文件夹，我这里直接新增一个 `tutorial.md` 的文件，然后编写了本篇教程。
