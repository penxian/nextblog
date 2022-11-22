---
title: LeetCode 两数相加
date: 2022-11-23
tag: [LeetCode, Go]
categories: [LeetCode, Go]
---
> 学习Go语言，准备使用LeetCode来熟悉Go语言的语法

## 准备题目
题目是leetCode的第二题
[两数相加](https://leetcode.cn/problems/add-two-numbers/)
<!-- more -->
自己捣鼓写来一版

思路就是每次遍历一个节点都相互加起来，然后进位+1就存着到下个节点去，下次再相加就是本身+两个节点相加

![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20221123010421.png)

```Go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// 初始化节点第一个
	var pli = new(ListNode)
	//引用第一个节点存储
	nli := pli
	for {
		// 两个节点都不为空，遍历两个节点
		if l1 != nil && l2 != nil {
			// 如果进位 则给下个节点+1
			pli.Next = &ListNode{Val: (pli.Val + l1.Val + l2.Val) / 10}
			// 两个节点相加，在加上上个进位的值取余
			pli.Val = (pli.Val + l1.Val + l2.Val) % 10
			// 两个节点跳入下一个节点
			l1 = l1.Next
			l2 = l2.Next
			// 如果任何一个节点不为空，则当前总节点跳入下个节点
			if l1 != nil || l2 != nil {
				pli = pli.Next
			}
		} else if l1 == nil && l2 != nil { // 如果l2节点有值，而l1没有值
			// 如果有进位 则➕1 没有则是0
			pli.Next = &ListNode{Val: (l2.Val + pli.Val) / 10}
			// 一个节点加上进位值
			pli.Val = (pli.Val + l2.Val) % 10
			// 节点下走
			l2 = l2.Next
			// 如果任何一个节点不为空，则当前总节点跳入下个节点
			if l1 != nil || l2 != nil {
				pli = pli.Next
			}
		} else if l1 != nil && l2 == nil {
			pli.Next = &ListNode{Val: (l1.Val + pli.Val) / 10}
			pli.Val = (pli.Val + l1.Val) % 10
			l1 = l1.Next
			if l1 != nil || l2 != nil {
				pli = pli.Next
			}
		} else if l1 == nil && l2 == nil {
			// 由于这边每次先加个空的节点用于存储进位，如果为0 则没有进位 则清空，如果有则不需要清空
			if pli.Next.Val == 0 {
				pli.Next = nil
			}
			break
		}
	}
	return nli
}

```

编写代码中记录一些学习点：

1. 初始化 struct,可以使用new，也可以使用字面量,new关键字是用来分配内存的函数，new(Type)作用是为T类型分配并清零一块内存，并将这块内存地址作为结果返回。也就是说new(T)会为类型为T的新项分配已置零的内存空间，并返回它的地址。
```go

ln := new(ListNode)

ln2 := &ListNode{Val: 1}
```

2. 学习来类转换字符转数字使用strconv库
3. struct中首字母大写是可以暴露属性给外部使用
4. 一个文件目录下只能有一个main方法
5. vscode中设置运行配置![](https://webfan.obs.cn-south-1.myhuaweicloud.com/20221123013050.png) 指定来program指定目录则，运行该目录下的main方法

未待完续...

后面我看来别人的实现方式， 我有时间在优化一版。