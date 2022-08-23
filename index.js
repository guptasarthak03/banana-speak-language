const inputDOM = document.querySelector('.translation-input');
const btnTranslate = document.querySelector('.btn-translate');
const outputDOM = document.querySelector('.translation-output');

// const fetchUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';  // Mock Server
const fetchUrl = 'https://api.funtranslations.com/translate/minion.json'; // Translate App

const constructUrl = input => {
  const encodedUrl = encodeURI(fetchUrl);
  return `${encodedUrl}?text=${input}`;
};

btnTranslate.addEventListener('click', () => {
  console.log(inputDOM.value);
  const input = inputDOM.value;

  fetch(constructUrl(input))
    .then(res => res.json())
    .then(data => {
      outputDOM.value = data.contents.translated;
    })
    .catch(err => console.log('OOps! You ran into some error.', err));
});
