function initialize() {
  const url = 'https://viewer-ota.ridicdn.net/android';
  const current = '21.7.4';
  const available = [
    'Release Notes.txt',
    'Ridibooks-20.1.2-E-Ink-noTTS.apk',
    'Ridibooks-20.1.2-E-Ink.apk',
    'Ridibooks-20.1.2-noTTS.apk',
    'Ridibooks-20.1.2-PlayStore.apk',
    'Ridibooks-20.5.1-E-Ink-noTTS.apk',
    'Ridibooks-20.5.1-E-Ink.apk',
    `Ridibooks-${current}-ARMv7aOnly.apk`,
    `Ridibooks-${current}-PlayStore.apk`,
  ];

  const container = document.getElementById('container');
  available.forEach(path => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerText = path;
    item.onclick = () => {
      location.href = `${url}/${encodeURIComponent(path)}`;
    };
    container.appendChild(item);
  });
}

initialize();