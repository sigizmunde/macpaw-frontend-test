import axios from 'axios';

const API_KEY = 'f987148c-ecf5-480d-acd2-8f3e6d1b392b'; //for file uploading
const API_BASE_URL = 'https://api.thedogapi.com/v1';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['x-api-key'] = API_KEY;

export async function fetchDogImages() {
  const rawData = await axios.get(`/images/search?size=full`);
  return rawData.data;
}

export async function fetchBreedList() {
  const rawData = await axios.get(`/breeds`);
  return rawData.data;
}

export async function fetchImages({ breedId = '-1', limit, page }) {
  const rawData = await axios.get(
    `/images/search?${
      breedId !== '-1' ? 'breed_id=' + breedId : ''
    }&limit=${limit}&page=${page}`
  );
  return {
    data: rawData.data,
    itemsCount: rawData.headers['pagination-count'],
  };
}
