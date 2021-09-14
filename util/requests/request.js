import axios from "axios";

const request = async (query) => {
  const req = await axios.get(
    "https://escapefromtarkov.fandom.com/wiki/" + query
  );

  return req.data;
};

export default request;
