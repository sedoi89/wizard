'use strict';

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const names = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристо`, `Викто`, `Юли`, `Люпит`, `Вашингто`];
const lastName = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColor = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColor = [`black`, `red`, `blue`, `yellow`, `green`];

let wizardName = function () {
  return `${window.util.getRandom(names)}  ${window.util.getRandom(lastName)}`;
};

let wizard = [{
  name: wizardName(),
  coatColor: `${window.util.getRandom(coatColor)}`,
  eyesColor: `${window.util.getRandom(eyesColor)}`
}, {
  name: wizardName(),
  coatColor: `${window.util.getRandom(coatColor)}`,
  eyesColor: `${window.util.getRandom(eyesColor)}`
}, {
  name: wizardName(),
  coatColor: `${window.util.getRandom(coatColor)}`,
  eyesColor: `${window.util.getRandom(eyesColor)}`
}, {
  name: wizardName(),
  coatColor: `${window.util.getRandom(coatColor)}`,
  eyesColor: `${window.util.getRandom(eyesColor)}`
}];

const similarListElement = document.querySelector(`.setup-similar-list`);

const similarWizard = document.getElementById(`similar-wizard-template`).content.querySelector(`div`);

for (let i = 0; i < 4; i++) {
  let wizardElement = similarWizard.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
window.wizard = {
  coatColor,
  eyesColor
};
