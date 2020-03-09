import axios from 'axios';

const listAll = () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(result => {
        const objectOfBreeds = result.data.message;
        const breeds = Object.keys(objectOfBreeds);
        resolve(breeds);
      })
      .catch(error => {
        reject(error);
      });
  });

const listSubBreeds = breed =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/list`)
      .then(result => {
        const subBreeds = result.data.message;
        resolve(subBreeds);
      })
      .catch(error => {
        reject(error);
      });
  });

export { listAll, listSubBreeds };
