---
title: 使用sftp报错All configured authentication methods failed
date: 2022-07-07 22:27:02
tags: [hexo, sftp]
---
 之前自己配置hexo deploy 是通过sftp来上次静态文件的，而服务器则是用宝塔来管理，今天直接deploy一下发现报错来
 <!-- more -->
 ![error](https://webfan.obs.cn-south-1.myhuaweicloud.com/20220707223333.png)

 看报错的信息大概是配置的认证失败，我的配置如下：
 ![config](https://webfan.obs.cn-south-1.myhuaweicloud.com/20220707223724.png)

 之前的`privateKey`配置为空,应该是要配置key值，我跑去我的宝塔管理面板看看

 1. 打卡面板->安全菜单->启用SSh->点击ssh安全管理
 2. 开启SSH密钥登录
 3. 点击下载
 4. 放入项目_config.yml目录下
 5. 配置_config.yml
 6. 在deploy 配置privateKey值伟下载的密钥文件名
 ![btssh](https://webfan.obs.cn-south-1.myhuaweicloud.com/20220707224330.png)