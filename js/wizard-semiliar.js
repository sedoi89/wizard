'use strict';

const MAX_SIMILAR_WIZARD_COUNT = 4;
const userDialog = document.querySelector(`.setup`);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

  return wizardElement;
};
const successHandler = function (wizards) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
    fragment.appendChild(renderWizard(window.util.getRandom(wizards)));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
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


