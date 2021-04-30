import 'react';

var arkw = window;
const ArkConfig = (() => {
  const get = key => (key || '').split('.').reduce((p, c) => p && p[c] || null, arkw);

  const set = (key, val) => {
    var lst = (key || '').split('.');
    if (!lst.length) return;
    var cur = arkw;
    lst.forEach((t, idx) => {
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
})();

export { ArkConfig };
//# sourceMappingURL=index.modern.js.map
