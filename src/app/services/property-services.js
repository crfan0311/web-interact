import axios from "./config";

const propertyServices = {};

propertyServices.getPropertyCategories = async () => {
    const {data} = await axios.get("/properties/categories");
    return data;
};
propertyServices.getProperties = async ({queryKey}) => {
    const {queryParams} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/properties", {
        params: {
            ...queryParams,
        }
    });
    return data;
};
export {propertyServices}
