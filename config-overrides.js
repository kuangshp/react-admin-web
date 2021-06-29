const path = require('path');
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    src: path.resolve(__dirname, 'src'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css',
  })
);
