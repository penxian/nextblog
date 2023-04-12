---
title: MySQL使用记录
date: 2022-10-28 10:20:48
tag: [MySQL]
categories: 数据库
---
Mysql创建数据库字符集的选择
字符集选择： 在国内正常都是用【UTF-8】

排序选择：
排序一般分为两种：utf_bin和utf_general_ci
bin 是二进制, a 和 A 会别区别对待.

utf8_general_ci 【不区分大小写】，这个你在注册用户名和邮箱的时候就要使用。

utf8_general_cs 【区分大小写】，如果用户名和邮箱用这个 就会照成不良后果

utf8_bin:字符串每个字符串用【二进制数据】编译存储。 【区分大小写】，而且可以存二进制的内容

utf8_unicode_ci和utf8_general_ci对中、英文来说没有实质的差别。

utf8_general_ci校对【速度快】，但【准确度稍差】。（准确度够用，一般建库选择这个）

utf8_unicode_ci【准确度高】，但校对【速度稍慢】。