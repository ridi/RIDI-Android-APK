"use strict";

function initialize() {
  var url = 'https://viewer-ota.ridicdn.net/android';
  var current = '21.9.1';
  var available = [
    'Release Notes.txt',
    'Ridibooks-20.1.2-E-Ink-noTTS.apk',
    'Ridibooks-20.1.2-E-Ink.apk',
    'Ridibooks-20.1.2-noTTS.apk',
    'Ridibooks-20.1.2-PlayStore.apk',
    'Ridibooks-20.5.1-E-Ink-noTTS.apk',
    'Ridibooks-20.5.1-E-Ink.apk',
    'Ridibooks-' + current + '-ARMv7aOnly.apk',
    'Ridibooks-' + current + '-PlayStore.apk',
  ];

  var container = document.getElementById('container');
  available.forEach(function (path) {
    var item = document.createElement('div');
    item.classList.add('item');
    item.innerText = path;
    item.onclick = function () {
      location.href = url + '/' + encodeURIComponent(path);
    };
    container.appendChild(item);
  });
}

initialize();
