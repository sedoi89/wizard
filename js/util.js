'use strict';

const input = document.querySelector(`.setup-user-name`);
const getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};


const isEscPress = function (evt, action) {
  if (evt.key === `Escape` && document.activeElement !== input) {
    evt.preventDefault();
    action();
  }
};

const isEnterPress = function (evt, action) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    action();
  }
};

window.util = {
  getRandom,
  isEscPress,
  isEnterPress
};
