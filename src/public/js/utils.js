'use strict';

(function(root, factory) {
  root.Enfagrow = root.Enfagrow || {};
  root.Enfagrow.Utils = factory();
}(window, function() {
  return {
    isJson: isJson
  };

  function isJson(str) {
    if (str === null) {
      return false;
    }

    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }
}));
