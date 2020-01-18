/*
* 从customize-cra引入一些相关的方法
* */

const {
  override,
  addLessLoader,
  fixBabelImports
} = require('customize-cra');

const modifyVars = require('./modifyVars');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars,
  }),
  fixBabelImports('import', {
    libraryName: "antd",
    libraryDirectory: 'es',
    style: true,
  }),
);
