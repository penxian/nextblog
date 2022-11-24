---
title: Go语言学习-安装环境
date: 2022-11-02 01:07:29
tag: Go
categories: Go
---

## 先下载Go安装包

下载地址 [https://golang.google.cn/dl/](https://golang.google.cn/dl/)
安装路径选择默认，安装完成后会{% label @自动帮你配置环境变量 %}不用自己配置了
打开cmd 输入 go查看是否安装成功
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20221102012828.png)
这样就代表已经成功安装了
<!-- more -->
用vscode新建一个go文件,vscode会提示你安装go插件

点击install all

因为墙的原因，这时候会安装失败
使用go mod 代理来安装，https://goproxy.io 是一个国内的代理

执行
```shell
# 新版改成如下链接
go env -w GO111MODULE=on
go env -w GOPROXY=https://proxy.golang.com.cn,direct
```
关闭vscode重新打开，再次点击install all
成功安装

### 问题
 问题一：出现`GOPATH set to GOROOT (D:\Program Files\Go) has no effect`
 
 > GOPATH不应该指向Go的安装路径，而是指向你的工作空间 (见 https://golang.org/doc/code.html)。每当你用go get或go install安装某个包时，它就会被扔到GOPATH里。这就是为什么它会警告你。你绝对不会希望网上安装的什么包都被扔到你的Go安装文件中。
也可以创建一个或多个你想用来开发Go代码的文件夹，并将其设置为GOPATH（但注意，如果设置了多个文件夹，那么go get将只会把包安装到第一个文件夹中）
所以，你需要另外创建个文件夹（随便放到哪里），然后把这个路径设置为GOPATH

比如我的路径：/Users/shuirong/Code/Go

###优秀的学习网站：
[Go网站导航](https://hao.studygolang.com/)
[Go指南](https://tour.go-zh.org/list)
[Go程序设计](https://www.yuque.com/qyuhen/go)