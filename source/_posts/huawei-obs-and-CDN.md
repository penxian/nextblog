---
title: 华为OBS+华为CDN+Hexo打造静态博客
date: 2023-04-10 23:46:58
tag: [OBS, CDN, 建站]
categories: 华为云
photos: 
    https://webfan.obs.cn-south-1.myhuaweicloud.com/house-7497001_640.png
---

最近我的个人网站 [https://www.webfan.cn](https://www.webfan.cn)快要到期了，之前买来阿里云的3年229元新用户，自己就部署了一个静态网站加上自己忙（懒）就没有折腾了新的技术，就写了几篇水文在上面，但是这个到期了，域名也注册备案了。我可不想这样浪费了 😀,但是阿里云续费贼贵同配置都要到900元涨3倍，资本家都是这样先引进你，在按到池塘里作死的薅你。好巧不巧，我发现来华为这块静态部署网站方案也非常棒花费非常小。OBS，1块钱40G存储1个月，3年也就是27块钱，买一个CDN内容分发新用户有个6块钱100GB的流量，老用户有个500GB1年的66元优惠后，但是整合起来真的很实惠来CDN不是很必要但是为了上https就买来，不单单加速一个网站可以加速多个网站，在国内建站可以提高速度而且还省浏览，何乐而不为呢？
<!-- more -->

好来废话不多说先了解一下华为这两个产品干啥的

华为OBS：对象存储服务（Object Storage Service，OBS）提供低成本的数据存储能力，可供用户存储任意类型和大小的数据，还能托管静态网站，存储图片和视频文件等等。

华为CDN：CDN（Content Delivery Network，内容分发网络）是通过将源站内容分发至靠近用户的加速节点，使用户可以就近获得所需的内容，解决Internet网络拥挤的状况，提高用户访问的响应速度和成功率，从而提升您业务的使用体验。说白来，就是把的静态资源缓存到不同地方的节点，到时候各个不同地方访问速度提高来

## 准备的一些工作

1. 备案的域名一个
2. hexo静态博客一个，我的是nexT主题非常不错。
3. 华为账号产品两个

## 第一步：创建OBS桶

创建OBS桶，区域选择自己买资源包的区域，取个名字nextblog、选择单AZ存储（多AZ用户复杂容灾），选择标准存储

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410223724.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410223724.png)

选择公开读取

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224341.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224341.png)

创建成功之后开始配置桶为静态托管，点击进去桶名，然后在点击静态网站菜单托管，编辑开始配置

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224639.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224639.png)

配置首页，一般首页都放在桶的根目录下index.html

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224852.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410224852.png)

上传自己的网页

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410225108.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410225108.png)

好来 一个简单的网站搭建OK来，但是我们访问地址的时候（点开静态网站托管有个地址）访问的时候就是下载，根本无法使用，之前是可以，华为为了合规安全所以是开始不再使用华为自己的域名访问，所以我们准备一个备案过的域名（如果桶区域是国内的，非国内可以不需要备案域名）

## 第二步：绑定自己的域名

点击自己的桶，然后点击域名管理，在配置自定义域名

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410230102.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410230102.png)

然后把CNAME配置到你的域名管理解析中配置为CNAME值就是上面的，然后可以访问自己的域名地址了，如果访问还是下载而非预览，则需要自己看下对象的类型，是否支持预览，例如html就是图中的情况

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410230458.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410230458.png)

这种方式智能http方式访问。如果这样CND也不需要了

## 第三部：把HTTP换成HTTPS

华为云OBS如果要支持HTTPS的话则需要CDN加速功能

CDN先申请证书，华为云有免费的证书，进入云正式管理服务CCM，创建测试证书

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231004.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231004.png)

点击申请证书，绑定域名例如webfan.cn

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231138.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231138.png)

过一会儿就申请成功。

然后我们配置加速网站，在回到桶中，域名管理，改为配置加速域名，业务类型选择网站加速，下面还有其他信息，勾选静态网站开启。加速两个域名，一个是[https://www.webfan.cn](https://www.webfan.cn),一个是[https://webfan.cn](https://webfan.cn)方便用户不适用www也能访问我们的网站。

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231541.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410231541.png)

配置CNAME，配置域名解析，配置完毕之后变绿色则是正常的

配置https

点进去一个域名配置点开HTTPS配置 选择华为云托管证书

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410232225.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410232225.png)

然后过几分钟生效之后，则可以通过https访问了

## 结语

通过上述步骤，我们可以快速、简单地搭建自己的静态博客，享受快速、稳定、安全的博客体验。

上述看起来非常简单，但是配置起来如果错了一步导致不能访问。

在配置过程中，我这边遇到一些问题

问题一： 配置https还是一直下文件，即使我确认了文件是html/text的头部协议

原因：在配置加速域名的时候忘记勾选来静态网站来

问题二：[https://www.webfan.cn](https://www.webfan.cn)可以访问，但是[https://webfan.cn](https://webfan.cn)不能访问

原因：主要是CDN的webfan.cn的源站配置没有配置主站源，应该和[https://www.webfan.cn](https://www.webfan.cn)配置一致。

问题三：访问http无法跳转到https上去

原因：需要在CDN的HTTPS配置一下强制跳转

问题四：404错误页面如何配置？

原因：如果是桶的只能直接指点根下面的404页面，如果使用CDN加速的话可以在CDN配置页面高级配置配置自定义错误页面

问题五：如果https还是访问下载

原因：看是否HTTP Header问题，在CDN高级配置下面配置响应头Content-Disposition为inline

问题六：OBS更新内容，发现内容还是原来的

原因：这就是CDN的优势来，所以我们需要手动清除其他节点的缓冲，点击CDN然后预热刷新菜单，点击缓存刷新Tab页面，然后填上域名全站刷新
![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410233537.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230410233537.png)
在实际上实践中我遇到了一些棘手的问题，有些问题如果没有文档或者资料指导根本无法实施，然后导致我部署不了博客网站，搞了好几天，每天翻开文档读一遍，后来慢慢摸索，现在记录下来。

