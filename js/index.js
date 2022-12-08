"use strict";

function initialize() {
  var url = 'https://viewer-ota.ridicdn.net/android';
  var current = '22.12.1';
  var available = [
    'Release Notes.txt',
    'RIDI-20.1.2-E-Ink-noTTS.apk',
    'RIDI-20.1.2-E-Ink.apk',
    'RIDI-20.1.2-noTTS.apk',
    'RIDI-20.1.2-PlayStore.apk',
    'RIDI-20.5.1-E-Ink-noTTS.apk',
    'RIDI-20.5.1-E-Ink.apk',
    'RIDI-' + current + '-OneStore-ARMv7aOnly.apk',
    'RIDI-' + current + '-OneStore.apk',
    'RIDI-' + current + '-PlayStore-ARMv7aOnly.apk',
    'RIDI-' + current + '-PlayStore.apk',
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
