import axios from 'axios';

export const imagesArr = async search => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=1&key=33294397-381f15b78d88cb787350f045d&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export const NextSearch = async ({ search }, page) => {
  // console.log(page);
  const response = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=33294397-381f15b78d88cb787350f045d&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
