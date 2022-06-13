'use strict';

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);

const onPopupEscPress = function (evt) {
  window.util.isEscPress(evt, closePopup);
};

const openPopUp = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};


setupOpen.addEventListener(`keydown`, function (evt) {
  window.util.isEnterPress(evt, openPopUp);
});


setupOpen.addEventListener(`click`, function () {
  openPopUp();
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});


