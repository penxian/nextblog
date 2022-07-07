---
title: JavaScript实现range方法
date: 2022-06-30 23:36:57
tag: Javascript
categories: 代码片段
updated: 2022-07-01 23:18:03
---
## 代码片段
平时我们需要获取一组有序数组，[1, 2, 3, 4] 所以现在有个片段代码
<!-- more -->
```js
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
```

## 使用场景
有时候，你想渲染一组数字序列。例如
![](https://webfan.obs.cn-south-1.myhuaweicloud.com/range_20220630235440.png)

需要一组1到10的数组进行遍历渲染

在React中，可能有点复杂一点，因为我们还需要对数组进行map遍历生成数据

 ```jsx
 const PaginationWidget = () => {
  return (
    <div>
      {range(1, 11).map((num) => (
        <PageNum key={num}>{num}</PageNum>
      ))}
    </div>
  );
};
 ```

 ## 使用方式

 有多种使用方式
 你传入一个参数时候，会生成0到你入参数字，例如:
 ```js
 range(5); // [0, 1, 2, 3, 4]
 ```
 你传入两个参数的时候,会生成者两个数的范围，例如：
 ```js
 range(5, 10); // [5, 6, 7, 8, 9]
 ```
最后，你可以传入第三个参数（步长），来改变两个相邻的数的差值
```js
range(0, 6, 2); // [0, 2, 4]
range(10, 12, 0.5); // [10, 10.5, 11, 11.5]
```

你会注意到生成的数组，只包含来开始值，没有包含结尾值，例如`range(5, 10)`包含来5，而不包含10，故意这样做的目的，是和JavaScript方法中[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)类似做法

当然还有更多简单方便的方式来生成这样的数组
在[stackoverflow](https://stackoverflow.com/questions/39924644/es6-generate-an-array-of-numbers)可以找到更多的方法