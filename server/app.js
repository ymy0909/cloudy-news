const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const ser = http.Server(app);
const soc = socketIo(ser);

soc.on('connection',(socket)=>{
    //监听connection（用户连接）事件，socket为用户连接的实例
    socket.on('disconnect',()=>{
     //监听用户断开事件
        console.log("用户"+socket.id+"断开连接");
    });
    console.log("用户"+socket.id+"连接");
    socket.on('msg',(data)=>{
       //监听msg事件（这个是自定义的事件）
        console.log(data);//你好服务器
        socket.emit('msg','你好浏览器');
        //向socket用户发送信息
    })
})

ser.listen(80);