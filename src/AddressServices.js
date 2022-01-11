import axios from "axios";

const endpoint = "http://127.0.0.1:8090/api/addresses/";

let getAll = () => {
  console.log("getAll is firing");

  const config = {
    method: "GET",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getAll };
