---
title: ESP8266（nodeMUC）+ 华为IoT设备接入
date: 2023-03-22 21:22:29
tag: [IoT, nodeMUC, Lua]
categories: 物联网
photos: 
    https://webfan.obs.cn-south-1.myhuaweicloud.com/20230318002623.png
---

> ESP8266是一款高度集成的WiFi芯片，可以作为微控制器的一部分来控制其他设备。它可以通过串口连接到计算机，并通过编程实现控制。NodeMCU是一种基于ESP8266的开发板，使得使用ESP8266更加简单。使用NodeMCU，可以通过Lua编程语言来控制ESP8266。这种芯片和开发板非常适合物联网设备和远程控制应用程序。

最近我想买一个来玩一下物联网的乐趣，然后买来一个最便宜最广泛的一个开发板，就是ESP8266，具有Wifi功能，然后想用MQTT协议连接华为云IOT代理，但是搜索了整个网络，都没有好的教程，要么就是刷的固件都是很老的，要么是AT固件，然后没有MQTT模块。今天我来记录我的一次教程。
<!-- more -->
# 1. 准备材料

在淘宝上购买来ESP8266,大约12元钱左右
<div align="left" style="display: flex; justify-content: flex-start;">
<img alt="淘宝淘的便宜货" src="https://webfan.obs.cn-south-1.myhuaweicloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230321073133.jpg" width="300px" style="margin:0">
</div>

接下来就是开始进行操作，先进去官网，官网是最好的教程说的没错

[NodeMCU Documentation](https://nodemcu.readthedocs.io/en/release/getting-started/#cloud-builder)

1. 下载刷固件的工具

NodeMCU PyFlasher

![Untitled](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321233700.png)

1. 下载固件

[NodeMCU custom builds](https://nodemcu-build.com/) 

在云上自定义自己固件模块，进去有几个默认模块

然后勾选来Mqtt 和 sjson，crypto模块，填写自己的邮箱，然后点击开始build，过几分钟就会收到固件邮件

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321074602.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321074602.png)

收到邮件通过邮件提供的链接下载固件

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321075014.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321075014.png)

1. 下载开发工具****ESPlorer 进入****[4refr0nt/ESPlorer: Integrated Development Environment (IDE) for ESP8266 developers](https://github.com/4refr0nt/ESPlorer) 下载ESPlorer工具

# 2. 开始烧录固件

打开 nodeMCU pyflasher,

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321075806.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321075806.png)

通过USB链接自己的开发板，选择CoM3，选择固件，点击烧录

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321080309.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321080309.png)

出现‘Firmware successfully flashed. Unplug/replug or reset device
to switch back to normal boot mode.‘ 则烧录成功

# 3. 开始开发MQTT

打开Esplorer开发工具，连上串口出现下图则成功连接上。然后开始编写代码。连上wifi 建立连接

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321194122.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321194122.png)

代码中显示ssid是wifi名字，注意:有些wifi有5G之类的，请使用普通的，因为这个板子不太支持那么高级的wifi协议

新建文件init.lua

代码如下：

```lua
-- init.lua
print('Setting up WIFI...')
wifi.setmode(wifi.STATION)
cfg={}
cfg.ssid="TP-LINK_38B1" 
cfg.pwd=""
wifi.sta.config(cfg)
wifi.sta.connect()
mytime = tmr.create()
mytime:alarm(1000, tmr.ALARM_AUTO, function()
    if wifi.sta.getip() == nil then
        print('Waiting for IP ...')
    else
        print('IP is ' .. wifi.sta.getip())
    mytime:stop()
    end
end)
```

然后开始上传代码。在ESplorer中左下角有个upload…按钮上传之后按一下开发板的rest键则出现开始连接wifi了

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321195044.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321195044.png)

# 4.华为云****设备接入 IoTDA****

打开华为云网站进入设备接入IotDA，点击免费试用，试用免费产品

1. 新建产品模型，例如我这边产品名称填esp8266、设备类型选择自定义，填来一个W

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321195748.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321195748.png)

1. 模型定义，新增服务，服务id自己取，英文+数字，例如我这边就取名字peng，服务类型和服务ID一致即可

![Untitled](https://webfan.obs.cn-south-1.myhuaweicloud.com/Untitled.png)

1. 新增下发命令，这边我们开发板很简单没有触发的事件这边我就模拟一个下发命令点亮了他自身带的灯，新增参数参数为ON和OFF

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321200442.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321200442.png)

![Untitled](https://webfan.obs.cn-south-1.myhuaweicloud.com/Untitled2.png)

1. 新建设备，点击设备—所有设备—注册设备，弹出解码，所属资源空间就是之前上面注册的产品空间，空间下的产品填入所属产品，设备标识码，自己随便命名，成功之后会有一个密钥下载，这块记得保存

![Untitled](https://webfan.obs.cn-south-1.myhuaweicloud.com/Untitled3.png)

# 5. 编写esp8266客户端MQTT代码

如下编写代码，把一下代码放入之前init.lua后面主要的一些参数需要从刚才的配置的华为云端拿

HOST、PORT、USERNAME、PASSWORD还有public地址和subscribe地址

```lua
m=nil
config={}
config.HOST = "15c3bcdf8c.st1.iotda-device.cn-north-4.myhuaweicloud.com"
config.PORT = 1883
config.USERNAME = "641474d140773741f9fb9dab_wifi1234"
config.PASSWORD = "123"
config.ID = node.chipid()
config.ENDPOINT = "$oc/devices/641474d140773741f9fb9dab_wifi1234/sys/bootstrap/down"

-- Sends a simple ping to the broker
local function send_ping()
    m:publish("$oc/devices/641474d140773741f9fb9dab_wifi1234/sys/bootstrap/up",gpio.read(1)..gpio.read(2)..gpio.read(3)..gpio.read(4),0,1)
    print("Published the status")
end

local function get_request(topic)
	local t = string.find(topic, "=")
	return string.sub(topic,t+1,-1)
end

--响应消息命令
local function send_suf()
	msg = {}
	msg.object_device_id = "641474d140773741f9fb9dab_wifi1234"
	msg.name="open_light"
	msg.id="12345"
	msg.content ={}
	msg.content.result = true
	print(sjson.encode(msg))
	m:publish("$oc/devices/641474d140773741f9fb9dab_wifi1234/sys/messages/up",sjson.encode(msg),0,1)
	print("Published the responce")
end
-- 响应命令
local function send_command(request_id)
	local msg ={}
	msg.result_code = 0
	msg.response_name = "COMMAND_RESPONSE"
	msg.paras ={}
	msg.paras.result="success"
	m:publish("$oc/devices/641474d140773741f9fb9dab_wifi1234/sys/commands/response/request_id="..request_id,sjson.encode(msg),0,1)
end

IO_BLINK=4
gpio.mode(IO_BLINK, gpio.OUTPUT)
local function blinking(flag)
	print(flag)
	gpio.write(IO_BLINK, flag and gpio.HIGH or gpio.LOW)
end

local function consume_data( payload, request_id )
	print(sjson.decode(payload).paras.light)
	if sjson.decode(payload).paras.light == "on" then
		blinking(true)
	else
		blinking(false)
	end
	 
  --do someting with the payload and send responce
    send_suf()
	print(request_id)
	send_command(request_id)
end

-- Sends my id to the broker for registration
local function register_myself()
    m:subscribe(config.ENDPOINT,0,function(conn)
        print("Successfully subscribed to data endpoint")
        send_ping()
    end)
end

local function mqtt_start()
	print("init mqtt")
    m = mqtt.Client("641474d140773741f9fb9dab_wifi1234_0_0_2023031715", 120,config.USERNAME,config.PASSWORD)
    -- register message callback beforehand
    m:on("message", function(conn, topic, data)
      if data ~= nil then
        print(topic .. ": " .. data)
        consume_data(data, get_request(topic))
      end
    end)
    -- Connect to broker
    m:connect(config.HOST, config.PORT, false, function(con)
		print("connect sucess")
        register_myself()
    end,
	function(client, reason)
		print("Connection failed reason: " .. reason)
	end)

end

mqtt_start()
```

首先是HOST就是接入地址、端口我们先选个http端口

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321201919.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321201919.png)

用户名和密码就是设备id和密码，但是密码需要加密过，之前有下载文档就是

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202529.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202529.png)

但是我们可以进入[Huaweicloud IoTDP Mqtt ClientId Generator (myhuaweicloud.com)](https://iodps-file.obs.cn-north-4.myhuaweicloud.com/tools/iotprovisioning.html)这个网站进行生成pwd

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202809.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202809.png)

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202926.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321202926.png)

# 6. 开始调试

调好这些参数之后，开始调试，先上传代码，然后在按rest重启，然后刷新华为云服务发现注册设备上报数据之后，在线状态。

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321203251.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321203251.png)

然后开始下发命令，开启led灯，on开启，off关闭

![https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321223852.png](https://webfan.obs.cn-south-1.myhuaweicloud.com/20230321223852.png)

在查看一下数据走向，查看消息跟踪

![Untitled](https://webfan.obs.cn-south-1.myhuaweicloud.com/Untitled4.png)

好了一个简单的接入华为设备IOT开启和关闭Led灯程序和流程完毕来

虽然简单，但是包含了整个iot设备接入，设备上云的整个完整的流程，

我非常开心学习了这个物联网相关的知识，通过自己探索，终于弄个完了。后续还有穷B的我需要购买额外的设备继续来实现更多的功能了

# 相关连接

[NodeMCU Documentation](https://nodemcu.readthedocs.io/en/release/)

[NodeMCU之旅（一）：构建、刷入固件，上传代码 - 不是很难 - 博客园 (cnblogs.com)](https://www.cnblogs.com/wangzexi/p/5696925.html)

[MQTT CONNECT连接鉴权_设备接入 IoTDA_快速入门_设备发放入门_接口说明_华为云 (huaweicloud.com)](https://support.huaweicloud.com/qs-iothub/iot_05_0011.html)

[Huaweicloud IoTDP Mqtt ClientId Generator (myhuaweicloud.com)](https://iodps-file.obs.cn-north-4.myhuaweicloud.com/tools/iotprovisioning.html)

[ESP8266 SDK发布 | 安信可科技 (ai-thinker.com)](https://docs.ai-thinker.com/esp8266/sdk)

[NodeMCU custom builds (nodemcu-build.com)](https://nodemcu-build.com/)