---
title: redis在socket.io接收多次重覆信息問題
date: 2015-01-17
tags:
  - node.js
---

在網上看到一個範例，展示了redis 如何配合socket.io進行互動的source code :
```javascript
io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    socket.emit(channel, JSON.parse(message));
  });
});
```
這段程式碼有一個問題,就是會因為client的數目增加而令redis接收message的handler觸發多次，因此向每一個socket.io client 傳送了多次重覆的信息。解決方法是將redis的程式碼移出```io.on('connection', function(socket){ .. });``` :

```javascript
redis.on('message', function(channel, message){
  //socket.emit改為io.sockets.emit ,信息傳送給所有人
  io.sockets.emit(channel, JSON.parse(message));
});

io.on('connection', function(socket){
//當有新的connection要處理的程式碼
});
```
