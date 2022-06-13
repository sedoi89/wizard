'use strict';
const setupsCoatColor = document.querySelector(`input[name='coat-color']`);
const setupsEyesColor = document.querySelector(`input[name='eyes-color']`);
let wizards = [];

const filteredWizards = function () {
  const filteredAndSorted = function (wizard) {
    let rank = 0;
    if (wizard.colorCoat === setupsCoatColor.value) {
      rank += 2;
    }
    if (wizard.colorEyes === setupsEyesColor.value) {
      rank += 1;
    }
    return rank;
  };
  window.renderWizard(wizards.sort((left, right) => filteredAndSorted(right) - filteredAndSorted(left)));
};


const successHandler = function (data) {

  wizards = data;
  filteredWizards();
};


const errorHandler = function (errorMessage) {
  const node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);

};

window.backend.load(successHandler, errorHandler);

window.wizardSemilar = {
  filteredWizards
};
