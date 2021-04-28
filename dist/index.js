require('react');

var arkw = window;
var ArkConfig = function () {
  var read = function read(key) {
    return (key || '').split('.').reduce(function (p, c) {
      return p && p[c] || null;
    }, arkw);
  };

  return {
    read: read
  };
}();

exports.ArkConfig = ArkConfig;
//# sourceMappingURL=index.js.map
