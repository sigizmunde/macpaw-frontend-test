import axios from 'axios';

const API_KEY = 'f987148c-ecf5-480d-acd2-8f3e6d1b392b'; //for file uploading
const API_BASE_URL = 'https://api.thedogapi.com/v1/images';

axios.defaults.baseURL = API_BASE_URL;

export async function fetchDogImages(page) {
  const rawData = await axios.get(`/search?size=full`);
  return rawData.data;
}
