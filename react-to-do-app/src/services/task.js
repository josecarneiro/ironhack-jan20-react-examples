import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonbox.io/box_3592e95fbb9b6c7a6b47'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/')
      .then(result => {
        const tasks = result.data;
        resolve(tasks);
      })
      .catch(error => {
        reject(error);
      });
  });

const create = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/', data)
      .then(result => {
        const task = result.data;
        resolve(task);
      })
      .catch(error => {
        reject(error);
      });
  });

const remove = id =>
  new Promise((resolve, reject) => {
    instance
      .delete(`/${id}`)
      .then(result => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });

export { list, create, remove };
