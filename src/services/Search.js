import axios from "axios";

export const SearchFromChatGPT = (prompt) => {
 return axios
   .post("http://localhost:9009/chat", { prompt })
   .then((response) => {
    return response;
   })
   .catch((err) => {
     return err;
   });
};