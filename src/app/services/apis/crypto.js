import {cryptoNews, newsCategories} from "../mock-data/cryptonews";
import mock from "../index";

mock.onGet("/crypto-news").reply(request => {
    const params = request.params;

    let selectedNews = [...cryptoNews];
    if (params?.category?.slug && params?.category?.slug !== "all") {
        selectedNews = selectedNews.filter(category => category.category === params.category?.slug);
    }
    return [
        200, {
            cryptoNews: selectedNews,
        }
    ];
});
mock.onGet("/crypto-news/categories").reply(request => {
    return [
        200, {
            newsCategories: newsCategories,
        }
    ];
});
