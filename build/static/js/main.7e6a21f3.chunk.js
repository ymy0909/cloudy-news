(this["webpackJsonpcloudy-news"]=this["webpackJsonpcloudy-news"]||[]).push([[0],{145:function(e,t,n){e.exports=n(263)},150:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},233:function(e,t,n){},237:function(e,t,n){},243:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(98),i=n.n(l),s=(n(150),n(62)),u=n(45),m=(n(67),n(43)),p=(n(80),n(38)),b=n(12),f=n(14),d=n(13),h=n(15),O=n(16),v=(n(104),n(65)),E=(n(106),n(39)),j=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=m.a.Footer;return r.a.createElement(e,null,r.a.createElement(v.a,null,r.a.createElement(E.a,{span:2}),r.a.createElement(E.a,{span:20,style:{textAlign:"center"}},"Copyright2019\u65b0\u95fb\u5934\u6761\xa0\u6caaICP\u590710010000\u53f7"),r.a.createElement(E.a,{span:2})))}}]),t}(a.Component),y=(n(202),n(142)),g=(n(204),n(10)),w=(n(265),n(56)),_=(n(208),n(103)),k=(n(210),n(211),n(34)),P=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).changeTab=function(e){console.log(e),console.log(n.props.history);var t="index"===e?"/":"/".concat(e);n.props.history.push({pathname:t})},n.state={userName:"",userId:"",current:"top",modalVisible:!1,selectTab:"index"},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.pathname;this.setState({selectTab:e.substr(1)?e.substr(1):"index"})}},{key:"render",value:function(){var e=m.a.Header,t=_.a.TabPane,n=this.props,a=n.submit,c=n.login,o=r.a.createElement(w.a,null,r.a.createElement(w.a.Item,null,r.a.createElement("span",null,"\u865a\u62df\u5e01")),r.a.createElement(w.a.Item,null,r.a.createElement("span",null,"\u6bd4\u7279\u5e01")),r.a.createElement(w.a.Item,null,r.a.createElement("span",null,"\u6df1\u5ea6\u89c2\u5bdf")),r.a.createElement(w.a.Item,null,r.a.createElement("span",null,"\u5927\u516c\u53f8\u5e03\u5c40"))),l=r.a.createElement("div",{className:"qk_pc_tab_extra"},r.a.createElement(y.a,{overlay:o,trigger:["hover"]},r.a.createElement("div",{className:"point"},"\u66f4\u591a\u7c7b\u522b",r.a.createElement(g.a,{type:"down"}))),r.a.createElement("div",{className:"qk_pc_tab_extra_right point"},r.a.createElement(g.a,{type:"search"}),"\u641c\u7d22"),r.a.createElement("div",{className:"qk_pc_tab_extra_right"},c?r.a.createElement("div",null,"\u5df2\u767b\u5f55"):r.a.createElement("div",{onClick:function(){return a()}},"\u672a\u767b\u5f55"))),i=this.state.selectTab;return r.a.createElement(e,{className:"qk_pc_header"},r.a.createElement("div",{className:"qk_pc_header_main"},r.a.createElement("img",{src:"assets/logo.png",alt:"",className:"qk_pc_header_main_img"}),r.a.createElement("div",{className:"qk_pc_header_content"},r.a.createElement(_.a,{defaultActiveKey:i,tabBarExtraContent:l,onChange:this.changeTab},r.a.createElement(t,{tab:"\u9996\u9875",key:"index"}),r.a.createElement(t,{tab:"\u524d\u6cbf\u5feb\u8baf",key:"forward"}),r.a.createElement(t,{tab:"\u70ed\u70b9\u8d44\u8baf",key:"3"},"Content of Tab Pane 3"),r.a.createElement(t,{tab:"\u533a\u5757\u94fe",key:"4"},"Content of Tab Pane 3"),r.a.createElement(t,{tab:"\u5e94\u7528\u843d\u5730",key:"5"},"Content of Tab Pane 3"),r.a.createElement(t,{tab:"\u653f\u7b56\u6cd5\u89c4",key:"6"},"Content of Tab Pane 3"),r.a.createElement(t,{tab:"\u884c\u4e1a\u5927\u4f6c",key:"7"},"Content of Tab Pane 3"),r.a.createElement(t,{tab:"\u6280\u672f\u4e86\u89e3",key:"8"},"Content of Tab Pane 3")))))}}]),t}(a.Component),N=Object(k.b)((function(e){return console.log(e),{login:e.app.login}}),(function(e){return{submit:function(){var t={type:"login",value:!0};e(t)}}}))(Object(u.e)(P)),C=(n(233),n(77)),S=n.n(C),q=(n(236),n(237),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={list:[{id:1,url:"assets/qkljw_pc_baner1.jpg"},{id:2,url:"assets/qkljw_pc_baner2.jpg"}]},e}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.list;return r.a.createElement("div",null,r.a.createElement(S.a,null,e.map((function(e){return r.a.createElement("div",{className:"qk_pc_swiper_slide",key:e.id},r.a.createElement("img",{src:e.url,alt:""}))}))))}},{key:"componentDidMount",value:function(){}}]),t}(a.Component)),x=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={list:[{id:1,url:"assets/banner_logo1.png"},{id:2,url:"assets/banner_logo2.png"},{id:3,url:"assets/banner_logo3.png"}]},e}return Object(O.a)(t,e),Object(f.a)(t,[{key:"clickPanelImg",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.state.list;return r.a.createElement("div",{className:"d-flex align-items-center justify-content-between flex-column width-100",style:{height:270}},t.map((function(t){return r.a.createElement("div",{className:"point",onClick:function(){return e.clickPanelImg(t.id)},key:t.id},r.a.createElement("img",{src:t.url,alt:""}))})))}}]),t}(a.Component),D=(n(238),n(141)),T=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=D.a.Search,t=this.props.className;return r.a.createElement(e,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",enterButton:"\u641c\u7d22",size:"default",className:t,onSearch:function(e){return console.log(e)}})}}]),t}(a.Component),L=(n(243),n(31)),I=n(139);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=n.n(I).a.create({baseURL:"/",timeout:5e4,withCredentials:!0,xsrfCookieName:"xsrf-token"});F.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json;charset=UTF-8","get"===e.method||"delete"===e.method?e.params=M({},e.params):("post"===e.method||e.method,e.data=M({},e.data)),e}),(function(e){return Promise.reject(e)})),F.interceptors.response.use((function(e){if(200!==e.status)return Promise.reject(new Error("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"));var t=e.data;return 0==t.code?t.data:void 0}),(function(e){return Promise.reject(e)}));var W=F;var B=function(){return function(e){W({url:"/api/forward.json",method:"get",params:{}}).then((function(t){e({type:"getForwardList",swiperParams:{loop:!0,slidesPerView:9,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1,stopOnLastSlide:!1},freeMode:!0,speed:1500,direction:"vertical",observer:!0,observeParents:!0},forwardList:t})}))}},U=(n(260),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={swiper:null},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"getSwiperInstance",value:function(e){var t=this;this.setState({swiper:e},(function(){var e=t.state.swiper;e.el.onmouseenter=function(){console.log(e.autoplay),e.autoplay.stop()},e.el.onmouseleave=function(){console.log("\u5f00\u59cb"),e.autoplay.start()}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.forwardList,c=t.swiperParams,o=n.map((function(t,n){return r.a.createElement("div",{key:t.id,className:"qk_pc_swiper_word_slide",onClick:function(){return e.handleSlideClick()}},r.a.createElement("div",{className:"width-100 d-flex"},r.a.createElement("div",{className:"qk_pc_con_index"},n+1),r.a.createElement("div",{className:"qk_pc_con_span"},t.title)))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"qk_pc_con_nav"},r.a.createElement("div",null,r.a.createElement("span",{className:"qk_pc_con_nav_seq"},"|"),r.a.createElement("span",null,"\u524d\u6cbf\u5feb\u8baf")),r.a.createElement("div",{className:"point"},"\u66f4\u591a>>")),r.a.createElement("div",{className:"qk_pc_con_word_box"},c?r.a.createElement(S.a,Object.assign({getSwiper:function(t){return e.getSwiperInstance(t)}},c,{noSwiping:!0}),o):r.a.createElement(a.Fragment,null)))}}]),t}(a.Component)),V=Object(k.b)((function(e){return console.log(e),{swiperParams:e.home.swiperParams,forwardList:e.home.forwardList}}),null)(U),X=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={forwardList:[]},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{gutter:24},r.a.createElement(E.a,{span:16},r.a.createElement(v.a,{gutter:16},r.a.createElement(E.a,{span:18},r.a.createElement(q,null)),r.a.createElement(E.a,{span:6},r.a.createElement(x,null)))),r.a.createElement(E.a,{span:8},r.a.createElement(T,{className:"mb-md"}),r.a.createElement(V,null)))}},{key:"componentDidMount",value:function(){this.props.renderSwiper()}}]),t}(a.Component),R=Object(k.b)(null,(function(e){return{renderSwiper:function(){e(B())}}}))(X),H=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}},{key:"componentDidMount",value:function(){this.props.renderSwiper()}}]),t}(a.Component),J=Object(k.b)((function(e){return{forwardList:e.home.forwardList}}),(function(e){return{renderSwiper:function(){e(B())}}}))(H),z=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=m.a.Content;return r.a.createElement(e,{style:{padding:"0 50px",marginTop:80},className:"bg-white"},r.a.createElement("div",{style:{minHeight:380},className:"qk_pc_container"},r.a.createElement(u.a,{exact:!0,path:"/",component:R}),r.a.createElement(u.a,{path:"/forward",component:J})))}}]),t}(a.Component),K=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"qk_pc_layout"},r.a.createElement("div",{className:"qk_pc_layout_main"},r.a.createElement(m.a,{className:"bg-white"},r.a.createElement(N,null),r.a.createElement(z,null),r.a.createElement(p.a,null),r.a.createElement(j,null))))}}]),t}(a.Component),$=n(44);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={login:!1};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={swiperParams:null,forwardList:[]},ne=Object($.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return Q({},e,{},{login:t.value});default:return e}},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getForwardList":return console.log(t),ee({},e,{},{swiperParams:t.swiperParams,forwardList:t.forwardList});default:return e}}}),ae=n(140),re=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):$.d)(Object($.a)(ae.a)),ce=Object($.e)(ne,re),oe=(n(261),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"qk-mobile-layout"},"mobile")}}]),t}(a.Component));var le=function(){return r.a.createElement("div",null,r.a.createElement(k.a,{store:ce},r.a.createElement(i.a,{minDeviceWidth:768},r.a.createElement(s.a,null,r.a.createElement(K,null))),r.a.createElement(i.a,{maxDeviceWidth:768},r.a.createElement(s.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(262);o.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.7e6a21f3.chunk.js.map