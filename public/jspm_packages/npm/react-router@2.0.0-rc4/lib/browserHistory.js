/* */ 
'use strict';
exports.__esModule = true;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _useRouterHistory = require('./useRouterHistory');
var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');
var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var history = undefined;
if (canUseDOM) {
  history = _useRouterHistory2['default'](_historyLibCreateBrowserHistory2['default'])();
}
exports['default'] = history;
module.exports = exports['default'];
