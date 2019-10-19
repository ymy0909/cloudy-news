// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };


// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { override, 
  fixBabelImports,
  addBabelPlugin,
  addWebpackAlias,
  addLessLoader } 
= require('customize-cra');
const path = require('path');
// const { compose } = require('react-app-rewired');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addBabelPlugin(
    'react-hot-loader/babel'
  ),
  //设置绝对路径：addWebpackAlias
  addWebpackAlias({
    ["@mock"]: path.resolve(__dirname, "src/mock"),
    ["@container"]: path.resolve(__dirname, "src/container")
  }),
  //配置less：addLessLoader (loaderOptions)
  // addLessLoader({
  //     javascriptEnabled: true,
  //     modifyVars: { '@primary-color': '#1DA57A' }
  // })
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