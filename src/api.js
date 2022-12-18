import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID dWMm8Wt4pE1fgAaoBSuSqXjP5hii3v8E5hjza9ZMOIY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
