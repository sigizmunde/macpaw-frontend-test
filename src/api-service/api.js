import axios from 'axios';

const API_KEY = 'f987148c-ecf5-480d-acd2-8f3e6d1b392b'; //for file uploading
const API_BASE_URL = 'https://api.thedogapi.com/v1';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['x-api-key'] = API_KEY;

// export async function fetchDogImages() {
//   const rawData = await axios.get(`/images/search?size=full`);
//   return rawData.data;
// }

export async function fetchBreedList() {
  const rawData = await axios.get(`/breeds`);
  return rawData.data;
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
  const data = { image_id: id, value };
  if (sub_id) data.sub_id = sub_id;
  try {
    const status = await axios.post('/votes', data);
    console.log(status);
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function postImageFav({ id, sub_id = '' }) {
  const data = { image_id: id };
  if (sub_id) data.sub_id = sub_id;
  try {
    const status = await axios.post('/favourites', data);
    console.log(status);
    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteFav({ id }) {
  try {
    const status = await axios.delete(`/favourites/${id}`);
    console.log(status);
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
