'use strict';

import mapObject from 'map-obj';

function replaceKeys(target, replaceKeyMap, options = { deep: true }) {
  return mapObject(
    target,
    function (key, value) {
      let replaced = replaceKeyMap[key];

      return [
        replaced === undefined
          ? key
          : typeof replaced === 'function'
          ? replaced(key)
          : replaced,
        value,
      ];
    },
    options
  );
}

export default replaceKeys;
