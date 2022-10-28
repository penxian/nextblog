---
title: linux 清屏命令
date: 2022-10-28 10:20:48
tag: [linux, 命令]
categories: 服务器
---
往往我们敲打命令各种字符占满来终端屏幕，一点也不清爽。所以我们需要清屏。
window中清屏命令是cls，而在Linux中是啥呢？今天查找来一下资料记录一下
<!-- more -->
### clear
`clear`这个命令将会刷新屏幕，本质上只是让终端显示页向后翻了一页，如果向上滚动屏幕还可以看到之前的操作信息。一般都会用这个命令

### rest
`rest`这个命令将完全刷新终端屏幕，之前的终端输入操作信息将都会被清空，这样虽然比较清爽，但整个命令过程速度有点慢，使用较少。

### 快捷键 Ctrl + l(小写)
在键盘上*Ctrl + l* 更快捷，更方便

### printf "\033c"
这个命令才是真正的清空终端屏幕，他的原理是什么？
**\033 == \x1B == 27 == ESC**
"\033c"于是变成来*<ESC>c*,他是VT-xxx中表示“Full Reset（RIS）”的转义码，现今我们使用的所有的终端都是VT兼容的
printf是bash里内置的命令，内置命令的优先级比其它可执行文件要高。下面两种方式新增cls命令：
1. 第一种 在PATH路径下,如/usr/bin/目录下。新建一个名为cls的文件，加上执行权限，写入如入内容
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20221028110051.png)
加入执行权限 *chmod x 文件名*
`chmod x cls`

然后可以使用和window同样的命令 cls 清屏
2. 第二种，通过设置别名也可以使用
设置别名，执行下面命令
```bash
alias cls='printf "\033c"'
```
查看别名，是否生效
```bash
alias 
```
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20221029010911.png)

取消别名
```bash
unalias cls
```

