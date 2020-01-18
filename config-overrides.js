/*
* 从customize-cra引入一些相关的方法
* */

const {
  override,
  addLessLoader,
  fixBabelImports
} = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  fixBabelImports('import', {
    libraryName: "antd",
    libraryDirectory: 'es',
    style: true,
  }),
);
