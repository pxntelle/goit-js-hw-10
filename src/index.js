import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');


selectEl.addEventListener('change', createMarkup);

selectEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    createOptions(data);
    selectEl.classList.remove('is-hidden');
  })
  .catch(() => errorEl.classList.remove('is-hidden'))
  .finally(() => loaderEl.classList.add('is-hidden'));

function createOptions(cats) {
  const markup = cats
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  selectEl.innerHTML = markup;
}

function createMarkup(evt){
    catInfoEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    fetchCatByBreed(evt.target.value)
    .then(createCardCat)
    .catch(() => errorEl.classList.remove('is-hidden'))
    .finally(() => loaderEl.classList.add('is-hidden'));
}

function createCardCat(cat){
    const {description, name, temperament} = cat[0].breeds[0];
    const markup = `<img src="${cat[0].url}" alt="${name}" width="300"/>
    <div class="wrapper"><h1>${name}</h1><p>${description}</p><p><b>Temperament: </b>${temperament}</p></div>`;
    catInfoEl.innerHTML = markup;
}

function showError(message) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
  