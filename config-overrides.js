/*
* 从customize-cra引入一些相关的方法
* */

const {
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy
} = require('customize-cra');

const modifyVars = require('./modifyVars');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars,
  }),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: "antd",
    libraryDirectory: 'es',
    style: true,
  }),
);
