import 'react';

var arkw = window;
const ArkConfig = (() => {
  const read = key => (key || '').split('.').reduce((p, c) => p && p[c] || null, arkw);

  return {
    read: read
  };
})();

export { ArkConfig };
//# sourceMappingURL=index.modern.js.map
