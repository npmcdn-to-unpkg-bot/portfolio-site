/* */ 
'use strict';
exports.__esModule = true;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _useRouterHistory = require('./useRouterHistory');
var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
var _historyLibCreateHashHistory = require('history/lib/createHashHistory');
var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var history = undefined;
if (canUseDOM) {
  history = _useRouterHistory2['default'](_historyLibCreateHashHistory2['default'])();
}
exports['default'] = history;
module.exports = exports['default'];
