import useSWR from "swr";
import getImages from "../services/getImages";

const useImages = () => {
  const {
    data: images,
    error,
    isValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/image`, getImages);
  // useSWR return the result of the fetcher function on data element, the error and if it's loading

  return { images, error, isValidating };
};

export default useImages;
