import axios from 'axios';

const API_KEY = 'f987148c-ecf5-480d-acd2-8f3e6d1b392b'; //for file uploading
const API_BASE_URL = 'https://api.thedogapi.com/v1';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['x-api-key'] = API_KEY;

//-----------------favorites-cashed-array-----------------
let favArr = null;

export function getCashedFavs() {
  return favArr;
}
//--------------------------------------------------------

export async function fetchBreedList() {
  const rawData = await axios.get(`/breeds`);
  return rawData.data;
}

export async function searchBreeds({ q }) {
  const rawData = await axios.get(`/breeds/search?q=${q}`);
  console.log(q);
  return rawData.data;
}

export async function fetchImage({ image_id }) {
  try {
    const rawData = await axios.get(`/images/${image_id}`);
    return {
      data: rawData.data,
    };
  } catch (err) {
    console.error(err);
  }
}

export async function fetchImages({
  breedId = '-1',
  limit = 10,
  page = 0,
  order = 'random',
  type = 'all',
}) {
  const queryString = `/images/search?${
    breedId !== '-1' ? 'breed_id=' + breedId : ''
  }&limit=${limit}&page=${page}${order !== 'random' ? '&order=' + order : ''}${
    type !== 'all'
      ? type === 'static'
        ? '&mime_types=jpg,png'
        : '&mime_types=gif'
      : ''
  }`;
  console.log(queryString);
  try {
    const rawData = await axios.get(queryString);
    return {
      data: rawData.data,
      itemsCount: rawData.headers['pagination-count'],
    };
  } catch (err) {
    console.error(err);
  }
}

export async function postImageVote({ id, sub_id = '', value = 1 }) {
  const params = { image_id: id, value };
  if (sub_id) params.sub_id = sub_id;
  try {
    const status = await axios.post('/votes', params);
    console.log(status);
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteImageVote({ id, sub_id = '' }) {
  const params = { id };
  if (sub_id) params.sub_id = sub_id;
  try {
    const status = await axios.delete(`/votes/${id}`);
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchVotes({ limit = 10, page = 0 }) {
  try {
    const rawData = await axios.get(`/votes/?limit=${limit}&page=${page}`);
    return {
      data: rawData.data,
      itemsCount: rawData.headers['pagination-count'],
    };
  } catch (err) {
    console.error(err);
  }
}

export async function postImageFav({ id, sub_id = '' }) {
  const params = { image_id: id };
  if (sub_id) params.sub_id = sub_id;
  try {
    const status = await axios.post('/favourites', params);
    if (status.data.message === 'SUCCESS') {
      favArr = [...favArr, { id: status.data.id, imageId: id }];
    }
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteFav({ id }) {
  try {
    const status = await axios.delete(`/favourites/${id}`);
    if (status.data.message === 'SUCCESS') {
      if (favArr) {
        favArr = favArr.filter(item => item.id !== id);
      }
    }
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchFavs() {
  try {
    const rawData = await axios.get('/favourites', {});
    return {
      data: rawData.data,
    };
  } catch (err) {
    console.error(err);
  }
}

export async function postImageFile(file) {
  const params = { file: file };
  try {
    const rawData = await axios.post('/images/upload', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      data: rawData.data,
    };
  } catch (err) {
    if (err.response.status === 400) {
      // console.log(err.message);
      return err.response.data.message;
    }
    console.error(err);
  }
}

export async function fetchFavParamImages(params) {
  const img_response = await fetchImages(params);
  const fav_response = await fetchFavs();
  if (!favArr) {
    favArr = fav_response.data.map(({ id, image_id }) => ({
      id,
      imageId: image_id,
    }));
  }
  const imageArray = img_response.data.map(
    ({ id, breeds, width, height, url }) => {
      const fav_id = favArr.find(item => item.imageId === id)?.id || -1;
      return { id, breeds, width, height, url, fav_id };
    }
  );
  img_response.data = imageArray;
  return img_response;
}

export function createLogItem({ eventType, imageId }) {
  let log = JSON.parse(sessionStorage.getItem('logDog')) || [];
  const dateTime = new Date();
  log = [
    {
      key: '' + dateTime + Math.random(),
      date: dateTime,
      id: imageId,
      event: eventType,
    },
    ...log,
  ];
  sessionStorage.setItem('logDog', JSON.stringify(log));
  return log;
}
