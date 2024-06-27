function selectButton(os) {
    const macButton = document.getElementById('macButton');
    const windowsButton = document.getElementById('windowsButton');

    if (os === 'mac') {
      macButton.classList.add('selected');
      windowsButton.classList.remove('selected');
    } else if (os === 'windows') {
      macButton.classList.remove('selected');
      windowsButton.classList.add('selected');
    }
  }