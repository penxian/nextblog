---
title: 使用华为OBS+CDN+PicGo打造你的图床，使你的图片更加快速
date: 2023-04-15 09:51:27
tag: [OBS, CDN, 图片托管]
categories: 华为云
photos: 
    https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415095020.png
---
一直以来图片托管是放到华为OBS里面，但是我买来CDN却没有加速图片，今天我就加速一下我的图片，网站大概如下
分两个OBS，一个专门托管图片、一个专门托管网站信息
<!-- more -->
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415100116.png)

## OBS新建图片托管桶✨
这块比较简单，就是OBS新建桶属性，就是选择自己套餐区域，在选择**公开只读桶**,**标准存储**，新建即可，**无需**开启静态网站

## CDN配置加速地址✨
1. 新建加速网站，我选择我的二级域名img.webfan.cn.dd8f4734.cdnhwcggk22.com，然后选择OBS桶域名，选上自己刚刚新建的OBS桶图片，选择**公有桶**, 点击确认
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415092445.png)
2. 配置域名解析,新增域名解析CNAME，主机记录为**img**，记录值就是上面图片新增知乎的CNAME
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415091810.png)
3. 新增完毕之后大约几分钟之后，你的CDN配置上面变成绿色
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415092656.png)
4. nslookup一下查看是否生效，非权威应答，出现多个ip则是成功了
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415092901.png)
5. 配置HTTPS加速，刚才那个只是http地址但是我们标志就是要上https
华为自带的SCM正式免费申请一个正式，域名绑定**img.webfan.cn.dd8f4734.cdnhwcggk22.com**
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093258.png)
下一步填写自己的信息
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093334.png)
成功之后验证DNS，网页暂时不要关闭，打开域名解析填写新增解析TxT
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093416.png)
填写上图中的**主机记录**和**记录值**,点击保存。
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093540.png)
回到刚才那个SCM免费正式列表，需要推送到CDN才会在CDN选到
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093736.png)
推送完毕之后 大约生效几分钟回到CDN页面进入img.webfan.cn.dd8f4734.cdnhwcggk22.com域名进去配置https，开启https，选华为云托管证书，确认
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093826.png)
然后出现两个绿色状态说明配置成功
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415093901.png)

## 使用PicGo管理上传自己的图片
去GitHub中下载软件[https://github.com/Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo)
安装之后然后安装华为OBS插件，因为主流上面没有😂
点击插件设置-搜索Huawei则出现插件，进行安装
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415103011.png)
进行配置， AccessKeyId就是AK，AccessKeySecret就是KS，去华为账号哪里去申请然后下载获取地址[地址](https://support.huaweicloud.com/devg-apisign/api-sign-provide-aksk.html)
EndPoint:为你存储图片的那个EndPoint，
自定义域名就是把直接域名换成了自定域名**https://img.webnfan.cn**
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415103239.png)

好了，就一个完整的图床够打造好了，PicGo支持截图粘贴剪切板上面，自动帮忙复制了地址。可以调整不同复制格式，一般我们写MD最多，所以我切换到MD模式
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230415103940.png)

## 总结
其实这里里面没有啥技术含量，只是流程有点复杂，我们经常写博客托管图片很发愁，图片大浪费流量，图片地方不集中，上次同一服务器没有图片而外请求及其慢，这里我打造自己图床，支持CDN，大大的减轻来我们服务的流量。CDN是个好东西，好好使用大大提升来自己网站的体验非常不错。里面还能支持图片防盗链之类，但是这里不再去多讲来。后续我们在慢慢配置。
