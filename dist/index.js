require('react');

var arkw = window;
var ArkConfig = function () {
  var get = function get(key) {
    return (key || '').split('.').reduce(function (p, c) {
      return p && p[c] || null;
    }, arkw);
  };

  var set = function set(key, val) {
    var lst = (key || '').split('.');
    if (!lst.length) return;
    var cur = arkw;
    lst.forEach(function (t, idx) {
      cur[t] = cur[t] || {};

      if (idx == lst.length - 1) {
        cur[t] = val;
      } else {
        cur = cur[t];
      }
    });
    cur = val;
  };

  return {
    get: get,
    set: set
  };
}();

exports.ArkConfig = ArkConfig;
//# sourceMappingURL=index.js.map
