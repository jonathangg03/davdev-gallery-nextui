import axios from "axios";

const getImages = async (args) => {
  // function that get images from server
  const images = await axios.get(args);
  return images.data;
};

export default getImages;
