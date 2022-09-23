---
title: 笔记
date: 2022-4-8
tag: js
categories: 工作日志
---

第一步：
添加群组
groupadd _pure-ftpd
会在/etc/group 添加群组  通过tail 查看内容 tail /etc/group 
<!--more -->
第二部添加用户
useradd -g _pure-ftpd -d /var/empty -s /etc _pure-ftpd


pure-pw useradd peng -u _pure-ftpd -d /www/wwwroot/webfan.cn

-g 指定群组 
-d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录
-s Shell文件 指定用户的登录Shell。

## centos 安装ftp
今天在centos上使用ftp命令连接本机的FTP服务器，出现如下的错误提示：-bash: ftp: command not found
查询相关资料，发现很有可能是FTP命令没有安装。通过yum方式安装FTP命令:yum install ftp

## 查看pure-ftpd 是否安装ok
ps aux | grep pure-ftpd
Linux ps （英文全拼：process status）命令用于显示当前进程的状态，类似于 windows 的任务管理器。
ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义
-A 列出所有的进程
-w 显示加宽可以显示较多的资讯
-au 显示较详细的资讯
-aux 显示所有包含其他使用者的行程

## netstat 查看端口
netstat 命令用于显示 各种网络相关信息 ，如网络连接, 路由表, 接口状态等等; 列出所有处于监听状态的tcp端口:
netstat -lntp 查看端口占用情况