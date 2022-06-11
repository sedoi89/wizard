'use strict';

const fireBallColor = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const coatColor = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColor = [`black`, `red`, `blue`, `yellow`, `green`];
const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const input = setup.querySelector(`.setup-user-name`);
const setupWizard = setup.querySelector(`.wizard`);
const fireBall = setup.querySelector(`.setup-fireball`);
let setupCoatColor = setup.querySelector(`input[name='coat-color']`);
const setupFireball = setup.querySelector(`input[name='fireball-color']`);
const setupEyesColor = setup.querySelector(`input[name='eyes-color']`);
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

let getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

fireBall.addEventListener(`click`, (evt) => {
  let vCl = fireBallColor[getRandom(0, fireBallColor.length)];
  evt.target.style.backgroundColor = vCl;
  setupFireball.value = vCl;
});

setupWizard.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`wizard-coat`)) {
    let vAl = coatColor[getRandom(0, coatColor.length)];
    evt.target.style.fill = vAl;
    setupCoatColor.value = vAl;
  } else if (evt.target.classList.contains(`wizard-eyes`)) {
    let vBl = eyesColor[getRandom(0, eyesColor.length)];
    evt.target.style.fill = vBl;
    setupEyesColor.value = vBl;
  }
});
