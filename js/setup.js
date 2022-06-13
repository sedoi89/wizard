'use strict';

const fireBallColor = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
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
    let coatColor = window.util.getRandom(coatColors);
    evt.target.style.fill = coatColor;
    setupCoatColor.value = coatColor;
    setTimeout(() => {
      window.wizardSemilar.filteredWizards();
    }, 1500);
  } else if (evt.target.classList.contains(`wizard-eyes`)) {
    let eyeColor = window.util.getRandom(eyesColors);
    evt.target.style.fill = eyeColor;
    setupEyesColor.value = eyeColor;
    setTimeout(() => {
      window.wizardSemilar.filteredWizards();
    }, 1500);
  }
});

const form = setups.querySelector(`.setup-wizard-form`);


form.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  window.backend.save(new FormData(form), function (response) {
    setups.classList.add(`hidden`);
  });
});

let coatColor = setupCoatColor.value;
let eyeColor = setupEyesColor.value;
window.setup = {
  coatColor,
  eyeColor
};

