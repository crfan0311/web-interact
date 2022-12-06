import baseAxios from "axios";

const axios = baseAxios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

//todo: define interceptors and other configuration like baseURL, headers etc. here
export default axios;