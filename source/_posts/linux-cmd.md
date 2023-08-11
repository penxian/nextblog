---
title: linux 常用命令
date: 2023-03-03 08:02:59
tag: [linux, 命令]
categories: 服务器
---
## nginx
查看nginx `ps  -ef | grep nginx`
查看端口80 `netstat -anop | grep 0.0.0.0:80`
查看环境路径 `echo $PATH`
查看ip `ifconfig -a` 如果没有此命令则需要安装`yum search ifconfig`

## 查看系统的信息
`uname -r` //显示内核版本信息
`lscpu` //查看cpu数量
`free -g`查看内存使用情况
`df -h` 查看磁盘空间情况

## 查看进程方法
```
ps aux
```
a：显示当前终端下的所有进程信息，包括其他用户的进程。
u：使用以用户为主的格式输出进程信息。
x：显示当前用户在所有终端下的进程。

```
top
```
以全屏交互式的界面显示进程排名，及时跟踪包括CPU、内存等系统资源占用情况，默认情况下每三秒刷新一次，其作用基本类似于Windows系统中的任务管理器。
![20230417234649](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230812010617.png)

## curl命令
设置请求超时时间 10秒
```
curl --max-time 10 http://localhost
```

## docker命令

查看所有容器
```
docker ps -a
```
搜索镜像
```
docker search nginx
```
拉取镜像
```
docker pull nginx
```

以后台方式运行nginx,并把容器的80端口映射到宿主机的8080端口，容器名称nginx
```
docker run -d -p 8080:80 --name nginx nginx
```
进入容器
```
docker exec -it 780df1d6b4e8 /bin/bash
```

docker rm  容器id

启动容器 名字为redis-stack
docker run -d --name redis-stack -p 6379:6379 redis/redis-stack-server:latest
