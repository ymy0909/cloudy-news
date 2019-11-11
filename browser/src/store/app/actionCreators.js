import {LOGIN} from './constants'
import ReconnectingWebSocket from "reconnecting-websocket";
import * as constant from './constants'


//定义它的action 行为
export const connectWebsocket  = (name) => ({ 
  type: constant.CONNECT_WEBSOCKET ,
  name
});
// 断开连接,你可以在退出登录时调用,或者时你离开你的模块时调用,都可以,看你自己的情况决定
export const disconnect = result=> ({ 
  type: constant.DISCONNECT_WEBSOCKET , 
  result
});

export const login = (value) => ({
  type:LOGIN,
  value
})
