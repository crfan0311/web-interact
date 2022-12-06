import mock from "../index";
import {properties, propertyTabCategories} from "../mock-data/properties";

mock.onGet("/properties/categories").reply(request => {
    return [
        200, {
            propertiesCategory: propertyTabCategories,
        }
    ];
});

mock.onGet("/properties").reply(request => {
    const params = request.params;
    let selectedProperties = [...properties];
    if (params?.category?.slug && params?.category?.slug !== "all") {
        selectedProperties = selectedProperties.filter(category => category.category === params.category?.slug);
    }
    return [
        200, {
            propertiesList: selectedProperties,
        }
    ];
});
