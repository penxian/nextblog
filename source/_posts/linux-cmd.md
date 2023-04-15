---
title: linux 常用命令
date: 2023-03-03 08:02:59
tag: [linux, 命令]
categories: 服务器
---
查看nginx `ps  -ef | grep nginx`
查看端口80 `netstat -anop | grep 0.0.0.0:80`
查看环境路径 `echo $PATH`
查看ip `ifconfig -a` 如果没有此命令则需要安装`yum search ifconfig`
![](https://cdn.webfan.cn/logoko_%E5%89%AF%E6%9C%AC.png)

查看系统的信息
`uname -r` //显示内核版本信息
`lscpu` //查看cpu数量
`free -g`查看内存使用情况
`df -h` 查看磁盘空间情况