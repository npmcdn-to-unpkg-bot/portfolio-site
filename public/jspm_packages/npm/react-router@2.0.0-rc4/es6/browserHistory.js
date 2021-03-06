/* */ 
"format cjs";
'use strict';

import useRouterHistory from './useRouterHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var history = undefined;

if (canUseDOM) {
  history = useRouterHistory(createBrowserHistory)();
}

export default history;