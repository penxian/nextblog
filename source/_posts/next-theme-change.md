---
title: next主题新增一个自定义近期文章功能
date: 2022-07-10 00:48:56
tags: [hexo, next]
categories: Hexo
---

NexT主题没有一个近期文章的功能模块，其实我一直想要这样的功能，就是左边有一个列表显示最近五条的数据如图
<!-- more -->
![image](https://webfan.obs.cn-south-1.myhuaweicloud.com/20220710005438.png)
然后我自己动手写一个,实现方式很多种，我就用{% label @theme_inject%}来实现

第一步：新建scripts文件夹，新建一个filter.js 名字随便起，hexo会读取的到这里的js
{% codeblock lang:js filter.js line_number:true first_line:1 %}
hexo.extend.filter.register('theme_inject', function(injects) {
    injects.style.push('source/_data/recent_posts.styl');
    injects.header.file('recent_posts', 'source/_data/recent_posts.njk');
});
{% endcodeblock %}
第二步：新增模板代码和模板样式
目录下的njk文件 source/_data/recent_posts.njk
```js recent_posts.njk
{% if page.posts.length and is_home() %}
  <div class="widget-wrap">
    <h3 class="widget-title"> 近期文章 </h3>
    <div class="widget">
      <ul>
        {% for post in page.posts.sort('date', -1).limit(5).toArray() %}
          <li>
            <i class="fa fa-chevron-right handle"></i><a href="{{ url_for(post.path) }}" title="{{post.title}}">{{ post.title or '(no title)' }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
{% endif %}
```

目录下的styl文件 source/_data/recent_posts.styl
```css recent_post.styl
@keyframes icon-arrow {
  0%, 100% {
    transform: translate(-2px, 0) 
  }

  10%, 30% {
    transform: translate(0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate(2px, 0);
  }

  50%, 70% {
    transform: translate(2px, 0);
  }
}
.widget-wrap{
    +mobile(){
        display none
    }
    .widget-title{
        padding: 5px 20px
    }
    .widget{
        ul{
            list-style: none
            padding: 0 20px
            font-size: 14px
            margin: 0
            &>li{
                .handle{
                    width: 16px
                    height: 16px
                    display: inline-block
                   
                }
                 &:hover{
                    .handle{
                        animation: icon-arrow 1.33s ease-in-out infinite
                    }
                }
                line-height: 22px
                display: inline-block
                overflow: hidden
                width: 100%
                white-space: nowrap
                text-overflow: ellipsis
                list-style: decimal
            }
        }
        padding-bottom: 20px
    }
}

```

第三步：发布生产，强制刷缓存

