'use strict';

const fireBallColor = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const coatColors = window.wizard.coatColor;
const eyesColors = window.wizard.eyesColor;
const setups = document.querySelector(`.setup`);
const setupWizard = setups.querySelector(`.wizard`);
const fireBall = setups.querySelector(`.setup-fireball`);
let setupCoatColor = setups.querySelector(`input[name='coat-color']`);
const setupFireball = setups.querySelector(`input[name='fireball-color']`);
const setupEyesColor = setups.querySelector(`input[name='eyes-color']`);


fireBall.addEventListener(`click`, (evt) => {
  let vCl = window.util.getRandom(fireBallColor);
  evt.target.style.backgroundColor = vCl;
  setupFireball.value = vCl;
});

setupWizard.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`wizard-coat`)) {
    let vAl = window.util.getRandom(coatColors);
    evt.target.style.fill = vAl;
    setupCoatColor.value = vAl;
  } else if (evt.target.classList.contains(`wizard-eyes`)) {
    let vBl = window.util.getRandom(eyesColors);
    evt.target.style.fill = vBl;
    setupEyesColor.value = vBl;
  }
});


