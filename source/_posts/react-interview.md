---
title: 2022年React面试题
date: 2022-10-12 8:00:00
tags: [React, 面试题]
categories: React
---
### 1. 什么是虚拟DOM
> 虚拟 DOM (VDOM)是真实 DOM 在内存中的表示。UI 的表示形式保存在内存中，并与实际的 DOM 同步。这是一个发生在渲染函数被调用和元素在屏幕上显示之间的步骤，整个过程被称为调和。
<!-- more -->
### 2. 类组件和函数组件之间的区别是啥？
* 类组件可以使用其他特性，如状态`state`和生命周期钩子。
* 当组件只是接收`props`渲染到页面时，就是无状态组件，就属于函数组件，也被称为哑组件或展示组件。

函数组件和类组件当然是有区别的，而且函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

| 区别	       |函数组件|类组件|
|--------------|-------|------|
|是否有        | 没有   |	有 |
|是否有生命周期 | 没有   |	有  |
|是否有状态 	| 没有   |	有  |

### 3. React 中 refs 干嘛用的？
 `refs`提供了一种访问在`render`方法中创建的 DOM 节点或者 React 元素的方法。在典型的数据流中，`props`是父子组件交互的唯一方式，想要修改子组件，需要使用新的`props`重新渲染它。凡事有例外，某些情况下咱们需要在典型数据流外，强制修改子代，这个时候可以使用`Refs` 。

### 4. React 组件生命周期有哪些不同阶段？
* `componentWillMount` :在渲染之前执行，用于根组件中的 App 级配置。
* `componentDidMount`：在第一次渲染之后执行，可以在这里做AJAX请求，DOM 的操作或状态更新以及设置事件监听器。
* `componentWillReceiveProps`：在初始化`render`的时候不会执行，它会在组件接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染
* `shouldComponentUpdate`：确定是否更新组件。默认情况下，它返回`true`。如果确定在  `state`或`props`更新后组件不需要在重新渲染，则可以返回`false`，这是一个提高性能的方法。
* `componentWillUpdate`：在`shouldComponentUpdate`返回 `true` 确定要更新组件之前件之前执行。
* `componentDidUpdate`：它主要用于更新DOM以响应`porps`或`state`更改。
* `componentWillUnmount`：它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

### 5. React 常用的hook

useState \ useEffect\ useContext \ useReducer \ useCallback \ useImperativeHandle \ useMemo \ useRef

### 6. React 组件间有那些通信方式?

* 父组件向子组件通信
  * 通过 props 传递
* 子组件向父组件通信
  * 主动调用通过 props 传过来的方法，并将想要传递的信息，作为参数，传递到父组件的作用域中
* 跨层级通信
  1. 使用 react 自带的 Context 进行通信，createContext 创建上下文， useContext 使用上下文。 
        参考下面代码：
    ```jsx
    import React, { createContext, useContext } from 'react';
    const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
    };

    const ThemeContext = createContext(themes.light);

    function App() {
        return (
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }

    function Toolbar() {
        return (
            <div>
            <ThemedButton />
            </div>
        );
    }

    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return (
            <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
            </button>
        );
    }

    export default App;
    ```
    2. 使用 Redux 或者 Mobx 等状态管理库
    3. 使用订阅发布模式


### 7. 为什么 React 元素有一个 $$typeof 属性？

目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。
如果没有 $$typeof 这个属性，react 会拒绝处理该元素。
相关阅读：[为什么React元素有一个$$typeof属性？](https://overreacted.io/zh-hans/why-do-react-elements-have-typeof-property/)

### 8. 为什么 JSX 中的组件名要以大写字母开头？

因为 React 要知道当前渲染的是组件还是 HTML 元素。

### 9. redux 是什么？
Redux 是一个为 JavaScript 应用设计的，可预测的状态容器。
* 它解决了如下问题：
   - 跨层级组件之间的数据传递变得很容易
   - 所有对状态的改变都需要 dispatch，使得整个数据的改变可追踪，方便排查问题。
* 但是它也有缺点：
   - 概念偏多，理解起来不容易
   - 样板代码太多

### 10. setState到底是异步还是同步?
 >先给出答案: 有时表现出异步,有时表现出同步

- `setState`只在合成事件和钩子函数中是“异步”的，在原生事件和`setTimeout` 中都是同步的
- `setState` 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数`setState(partialState, callback)`中的*callback*拿到更新后的结果
- `setState` 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次`setState`，`setState`的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时`setState`多个不同的值，在更新时会对其进行合并批量更新