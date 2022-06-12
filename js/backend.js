'use strict';
const URLget = `https://25.javascript.pages.academy/code-and-magick/data`;
const URLpost = `https://25.javascript.pages.academy/code-and-magick`;
const StatusCode = {
  OK: 200
};
const TIMEOUT = 5000;
const save = function (data, onSuccess) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, function () {
    onSuccess(xhr.response);
  });

  xhr.open(`POST`, URLpost);
  xhr.send(data);
};
const load = function (onSuccess, onError) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, function () {
    if (xhr.status === StatusCode.OK) {
      onSuccess(xhr.response);
    } else {
      onError(`Статус ответа:  '${xhr.status}' ${xhr.statusText}`);
    }

  });
  xhr.addEventListener(`error`, function () {
    onError(`Произошла ошибка соединения`);
  });
  xhr.addEventListener(`timeout`, function () {
    onError(`Запрос не успел выполниться за ${xhr.timeout}  мс`);
  });
  xhr.timeout = TIMEOUT;
  xhr.open(`GET`, URLget);
  xhr.send();
};

window.backend = {
  save,
  load
};
