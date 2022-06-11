'use strict';

const getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

window.util = {
  getRandom
};
