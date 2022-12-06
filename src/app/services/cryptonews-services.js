import axios from "./config";

const cryptoNewsService = {};

cryptoNewsService.getNews = async ({queryKey}) => {
    const {queryParams} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/crypto-news", {
        params: {
            ...queryParams,
        }
    });
    return data;
};
cryptoNewsService.getNewsCategories = async () => {
    const {data} = await axios.get("/crypto-news/categories");
    return data;
};
export {cryptoNewsService}
