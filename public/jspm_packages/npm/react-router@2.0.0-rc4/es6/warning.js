/* */ 
"format cjs";
'use strict';

export default routerWarning;
import warning from 'warning';
function routerWarning(falseToWarn, message) {
  message = '[react-router] ' + message;
  process.env.NODE_ENV !== 'production' ? warning(falseToWarn, message) : undefined;
}