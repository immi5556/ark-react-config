import React from 'react'
var arkw = window;
export const ArkConfig = (() => {
  const read = key => (key || '').split('.').reduce((p, c) => p && p[c] || null, arkw);
  return {
    read: read
  }
})();
