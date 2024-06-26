---
title: Node.js中五种HTTP请求方式
date: 2024-06-26 22:08:18
tags: [nodejs]
categories: JavaScript
photos:
 - https://webfan.obs.cn-south-1.myhuaweicloud.com/http_requests_node_js.png
---
{% note default %}
Node请求是非常常见的操作，在形形色色的库有着不同的解决方案，一些库提供跨平台支持，一些注重于库大小，这篇文章中我们将探索Node.js中HTTP请求五种最流行的方法，并且为每种方法介绍使用方式。首先介绍我们将会使用标准库来，后面在展现Node Fetch、Axios、SuperAget等库的方案
本文与2024-06-26编写，技术有一定的时效性，注意分辨。
{% endnote %}

### 标准库（HTTP模块）
Node.js中标准库已经默认配备HTTP模块，他可以在不新增任何依赖的情况下可以进行http请求，然而对于开发者调用不太友好。

此外，你还需要使用异步流来进行分块接受，因此它无法使用async/await特性。而需要手动解析请求的响应数据

通常情况下，你可以使用HTTP模块来进行测试或者演示，因为他不太安全。

这是使用Htpp请求模块进行Get请求的简单例子：
<!-- more -->
```javascript
const http = require('http');

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.end();
```
### 标准库（HTTPS请求）
如果你需要在Node.js中需要进行安全的请求HTTPS请求，可以使用内置的标准库HTTPS模块，其用法和HTTP模块非常类似，但是具有额外的安全性
```javascript
const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.end();
```
### Axios

Axios是一个用于Node.js的HTTP客户端，提供来一种更加优化而且功能丰富的方式来进行HTTP请求。他不但可以使用在Node环境下而且还可以在broswer环境下，Axios简化了错误处理并支持自动JSON解析和请求/响应拦截器等功能，因此是HTTP请求场景下很好的选择
```bash
npm install axios
```
简单示例来展现Axios调用
```javascript
const axios = require('axios');

axios.get('https://example.com')
  .then((response) =&gt; {
    console.log(response.data);
  })
  .catch((error) =&gt; {
    console.error(error);
  });
```

### Node Fetch

Node fetch是专门为Node.js定制的JavaScript库，简化来HTTP请求的过程，他提供来一种直观且基于Promise的方法，用于从网络或者服务器上获取资源，支持GET、POST、PUT、DELETE等请求。设计用于服务器端应用程序，和Fetch API兼容，可以在客户端和服务端环境下轻松进行代码转换。
此外，Node fetch 还提供了如：重定向限制，响应大小限制和明确的错误用于排除故障等扩展功能，在终端输入一下命令可以从npm安装Node Fetch

```bash
npm install node-fetch
```
简单的Fetch请求案例
```JavaScript
const fetch = require('node-fetch');

fetch('https://example.com')
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```
### SuperAgent
SuperAgent是一个轻量级别且灵活的HTTP客户端，支持Promise和callback回调方式，它以简单和易用性而闻名
在终端输入以下命令进行安装：
```bash
npm install superagent
```
简单示例调用使用方式
```javascript
request.get('https://example.com')
  .then((response) => {
    console.log(response.text);
  })
  .catch((error) => {
    console.error(error);
  });
```
### 结束
本文介绍了三个常用且流行的Node.js请求库和标准库的使用方式。而此外也有一些正在崛起的库也慢慢升起，支持ESM风格的。
以下是三个库的下载量对比图，可以看出三个下载量最大还是axios和node-fetch。
[npmtrends](https://npmtrends.com/axios-vs-node-fetch-vs-superagent)
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20240626223409.png)