// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };


// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { override, 
  fixBabelImports,
  addBabelPlugin,
  addWebpackAlias,
  addLessLoader,
  addPostcssPlugins } 
= require('customize-cra');
const path = require('path');
// const { compose } = require('react-app-rewired');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true
  }),
  addBabelPlugin(
    'react-hot-loader/babel'
  ),
  //设置绝对路径：addWebpackAlias
  addWebpackAlias({
    ["@mock"]: path.resolve(__dirname, "src/mock"),
    ["@container"]: path.resolve(__dirname, "src/container"),
    ["@utils"]: path.resolve(__dirname, "src/utils"),
  }),
  //ant主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  //配置less：addLessLoader (loaderOptions)
  // addLessLoader({
  //     javascriptEnabled: true,
  //     modifyVars: { '@primary-color': '#1DA57A' }
  // })
  addPostcssPlugins([
  require('autoprefixer')(),  
  require('postcss-plugin-px2rem')({
    // rootValue: 16,
    // propList: ['*'],
    // remUnit: 37.5,
    // propList: ['*', '!border*', '!letter-spacing'],
    // propWhiteList: [],
    // exclude: /(node_module)/

    
    rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。 
    // unitPrecision: 5, //允许REM单位增长到的十进制数字。
    propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
    propBlackList: ['font-size','border','letter-spacing'], //黑名单
    exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
    selectorBlackList: ['qk_pc','ant'], //要忽略并保留为px的选择器
    // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
    // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
    mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
    minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
 })])
/**
* [安装less]
* npm i less
* npm i -D less-loader
*/
// addLessLoader({
//   javascriptEnabled: true,
//   modifyVars: { '@primary-color': '#1DA57A' },
// }),

/**
* [remUnit description]
* npm install lib-flexible --save
* flexible会为页面根据屏幕自动添加<meta name='viewport' >标签，
* 动态控制initial-scale，maximum-scale，minimum-scale等属性的值。
* 安装完成之后再入口index.js页面 import lib-flexible
* 注意事项（important）: 由于flexible会动态给页面header中添加<meta name='viewport' >标签，
* 所以务必请把目录 public/index.html 中的这个标签删除！！！
*/

/**
* [postcss-px2rem]
* npm install postcss-px2rem --save
* postcss-px2rem会将px转换为rem，rem单位用于适配不同宽度的屏幕，
* 根据<html>标签的font-size值来计算出结果，1rem=html标签的font-size值。
*/

// addPostcssPlugins([
//   require("postcss-px2rem")({ remUnit: 37.5 })
// ])

/**
* [description]
* 温馨提示： remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
* 假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
* 那为什么你在这里写成了37.5呢？？？那我们后面专门来讲！
* 之所以设为37.5，是为了引用像mint-ui这样的第三方UI框架，因为第三方框架没有兼容px2rem ，
* 将remUnit的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原mint-ui的组件，否则会样式会有变化，例如按钮会变小。
* 既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
*/
);

  
//v2版本以下
// module.exports = function override(config, env) {
//   const rewires = compose(
//     rewireReactHotLoader(config, env),
//     rewireAntdLoader()
//   )
//   return rewires;
//   // config = rewireReactHotLoader(config, env);
//   // return config
// }