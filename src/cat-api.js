const BASE_URL = ' https://api.thecatapi.com/v1/';
const BREEDS_ENDP = 'breeds';
const ENDPOINT = 'images/search';
const API_KEY =
  'live_tgQbcnnirwR3modocPGn5ypKD5FvCB0XvReuZ5M58ssc4MlbuiAWZ3j22JoEimQb';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

// ------------------------ DOESNT WORK 1 ----------------------------

// function handleResponse(response) {
//   if (!response.ok) {
//     throw new Error(`Request failed with status code ${response.status}`);
//   }
//   return response.json();
// }

// function handleData(data) {
//   return {
//     ok: true,
//     data: data,
//   };
// }

// function handleError(error) {
//   console.error(error);
//   return {
//     ok: false,
//     error: error.message,
//   };
// }

// function fetchBreeds() {
//   return fetch(`${BASE_URL}${BREEDS_ENDP}`, options)
//     .then(handleResponse)
//     .then(handleData)
//     .catch(handleError);
// }

// function fetchCatByBreed(breedId) {
//   return fetch(`${BASE_URL}${ENDPOINT}?breed_ids=${breedId}`, options)
//     .then(handleResponse)
//     .then(handleData)
//     .catch(handleError);
// }

// ------------------------ DOESNT WORK 2 ----------------------------

// return fetch(`${BASE_URL}breeds?${params}`).then(response => {
//   console.log(response);
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });

// function fetchCatByBreed(breedId) {
// return fetch(
//   `${BASE_URL}images/${breedId}?api_key=${API_KEY}`
// ).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });
// }

// export { fetchBreeds, fetchCatByBreed };

// ------------------------ DOESNT WORK 3 ----------------------------

// function handleData(data) {
//   return {
//     ok: true,
//     data: data,
//   };
// }

// function handleError(error) {
//   console.error(error);
//   return {
//     ok: false,
//     error: error.message,
//   };
// }

// export function fetchBreeds() {
//   return fetch(`${BASE_URL}${BREEDS_ENDP}`, options)
//     .then(handleData)
//     .catch(handleError);
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(`${BASE_URL}${ENDPOINT}?breed_ids=${breedId}`, options)
//     .then(handleData)
//     .catch(handleError);
// }

// ------------------------ DOESNT WORK 4 ----------------------------

// export function fetchBreeds() {
//   return fetch(`${BASE_URL}${BREEDS_ENDP}`, options)
//     .then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       } else {
//         throw new Error(`Request failed with status code ${response.status}`);
//       }
//     })
//     .then(data => {
//       return {
//         ok: true,
//         data: data,
//       };
//     })
//     .catch(error => {
//       return {
//         ok: false,
//         error: error.message,
//       };
//     });
// }

export function fetchBreeds() {
  return fetch(`${BASE_URL}${BREEDS_ENDP}`, options).then(response =>
    response.json()
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}${ENDPOINT}?breed_ids=${breedId}`, options).then(
    response => response.json()
  );
}
