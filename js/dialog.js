'use strict';

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const input = setup.querySelector(`.setup-user-name`);

const openPopUp = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};
const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};
const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && document.activeElement !== input) {
    evt.preventDefault();
    closePopup();
  }
};
setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    setup.classList.remove(`hidden`);
    openPopUp();
  }
});

setupOpen.addEventListener(`click`, function () {
  openPopUp();
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

