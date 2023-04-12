---
title: 使用软件开发生产线CodeArts发布OBS
date: 2023-04-11 21:49:27
tag: [OBS,CodeArts, 建站]
categories: 华为云
---
上次通过OBS和CDN部署来Hexo网站，但是每次我们不可能都自己编译然后在上传到OBS，不然太麻烦了，所以我们需要构建流水线，通过PUSH Markdown来发布文章，这样方便又简单，我们大概流程如此
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411223130.png)
<!-- more -->
✨好来废话不多说开干

## 🚀第一步gitee上面拥有一份Hexo代码
这个不用多说，申请代码仓库，提交自己博客代码。
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411223917.png)

## 🚀第二步华为云申请CodeArts
这个是免费的，新建一个免费空间最多5人使用，自己使用即可地址 [CodeArts地址](https://hn.devcloud.huaweicloud.com/ipdproject/home)，先点击新建项目，选择*DevOps全流程示例项目*，输入项目名称点击OK，返回页面在点击进去项目，能看到有很多项目流程菜单。

## 🚀第三步新建流水线
新建流水线之前我们先新建编译构建
1. 新建任务，名字取blog
2. 选择源码源为码云，第一次需要授权，Endpoint实例新建，根据提示授权即可
3. 选择代码仓库，在选择分支下一步选择NPM构建然后修改脚本

```shell
    export PATH=$PATH:~/.npm-global/bin
    #设置缓存目录
    npm config set cache /npmcache
    npm config set registry https://repo.huaweicloud.com/repository/npm/
    npm config set disturl https://repo.huaweicloud.com/nodejs
    npm config set sass_binary_site https://repo.huaweicloud.com/node-sass/
    npm config set phantomjs_cdnurl https://repo.huaweicloud.com/phantomjs
    npm config set chromedriver_cdnurl https://repo.huaweicloud.com/chromedriver
    npm config set operadriver_cdnurl https://repo.huaweicloud.com/operadriver
    npm config set electron_mirror https://repo.huaweicloud.com/electron/
    npm config set python_mirror https://repo.huaweicloud.com/python
    npm config set prefix '~/.npm-global'
    #如需安装node-sass
    #npm install node-sass --verbose
    #加载依赖
    npm install --verbose
    #默认构建 以上都是系统默认的 才是自己修改 tar.gz就当做备份
    npm run build
    tar -zcvf blog.tar.gz public
    #这个生成zip包给OBS
    cd public
    zip -r blog.zip *
```
4. 需要新增文件上传到OBS上去，主要配置如下：产物路径配置，桶名配置
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411230045.png)
然后保存执行，看是否有zip产物到OBS桶下面
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411230233.png)

5. 新建流水线配置源，然后新增任务，然后把刚才的编译构建的任务添加接口，部署不需要，因为这里是编译完毕直接上传obs桶的

## 🚀第四步开启数据处理，把zip文件自动解压到桶目录下
如图下：
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411230802.png)
新建规则，事件选择ObjectCreate,前缀是包名全程不含后缀，后缀默认zip，解压路径默认，IAM委托根据链接新建一个只容许操作OBS的全新
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230411230957.png)

## 🚀清除CDN缓存

待写

好来一个完整的发布流程完整来，在本地我们写来一份MD，然后通过PUSH之后，过几分钟则可以看到自己写的内容已经自动部署到OBS了，非常方便。