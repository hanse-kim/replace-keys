'use strict';

const mapObject = require('map-obj');

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

modules.exports = replaceKeys;
