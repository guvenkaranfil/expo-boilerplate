// a library to wrap and simplify api calls
import apisauce from "apisauce";

const create = (baseURL = "") => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,

    // here are some default headers
    headers: {
      "Cache-Control": "no-cache",
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // Fake API with JSON files
  const loginRequest = () => ({
    user: {
      userName: "userName",
    },
  });

  return {
    loginRequest,
  };
};

export default {
  create,
};
