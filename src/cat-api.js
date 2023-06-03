const BASE_URL = ' https://api.thecatapi.com/v1/';
const BREEDS_ENDP = 'breeds';
const ENDPOINT = 'images/search';
const API_KEY = 'live_tgQbcnnirwR3modocPGn5ypKD5FvCB0XvReuZ5M58ssc4MlbuiAWZ3j22JoEimQb';

const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

export function fetchBreeds() {
    return fetch(`${BASE_URL}${BREEDS_ENDP}`, options).then(response =>
      response.json()
    );
  }
  

  export function fetchCatByBreed(breedId) {
    return fetch(
      `${BASE_URL}${ENDPOINT}?breed_ids=${breedId}`,
      options
    ).then(response => response.json());
  }