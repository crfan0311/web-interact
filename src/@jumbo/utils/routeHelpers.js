import React from "react";
import {matchRoutes} from "react-router-dom";

const addRouteObjectToTree = (routeTree, routes) => {
    const routeObject = routes[0];
    routes.shift();
    if (routeObject.hasOwnProperty("children")) {
        const {children, ...restRouteProperties} = routeObject;
        const nextNode = {...restRouteProperties};
        nextNode.children = [];
        routeTree.push(nextNode);
        buildRoutesTree(nextNode.children, routeObject.children);
    } else {
        if(Array.isArray(routeObject?.path)) {
            routeObject.path.forEach(path => {
                routeTree.push({
                    path: path,
                    element: routeObject.element
                });
            });
        }
        else {
            routeTree.push(routeObject);
        }
    }
};

const applyMiddlewareToRoutes = (routeTree, middlewareArray, routes) => {

    const mWare = middlewareArray[0];
    middlewareArray.shift();
    if (mWare && mWare.element) {
        const Middleware = mWare.element;
        const fallbackPath = mWare.fallbackPath ? mWare.fallbackPath : null;
        const payload = mWare.payload ? mWare.payload : null;
        const fallbackUI = mWare.fallbackUI ? mWare.fallbackUI : null;
        const nextNode = {
            element: (
                <Middleware
                    fallbackPath={fallbackPath}
                    payload={payload}
                    fallbackUI={fallbackUI}
                />
            )
        };
        nextNode.children = [];
        routeTree.push(nextNode);
        if(middlewareArray.length > 0) {
            applyMiddlewareToRoutes(nextNode.children, middlewareArray, routes);
        }
        else {
            buildRoutesTree(nextNode.children, routes);
        }
    }
};

const buildRoutesTree = (routeTree, routes) => {

    if (routes[0] && routes[0].hasOwnProperty("middleware")) {
        if (!routes[0].hasOwnProperty("routes")) {
            throw Error("If a route object in the route object tree has a middleware key value pair then it must also have routes key value pair.");
        } else {
            applyMiddlewareToRoutes(routeTree, [...routes[0].middleware], [...routes[0].routes]);
            routes.shift();
        }
    } else {
        addRouteObjectToTree(routeTree, routes);
    }
    if (routes.length > 0) {
        buildRoutesTree(routeTree, routes);
    }
};

export const buildRoutes = (routes) => {
    const routeTree = [];
    if (Array.isArray(routes) && routes.length > 0) {
        buildRoutesTree(routeTree, routes);
        return routeTree;
    }
    else {
        throw Error("routes must be an array of object with at least a key 'element'");
    }
};

export const matchRoutePaths = (routes, searchPath) => {

    if(Array.isArray(routes) && routes.length > 0) {
        const generatedRoutes = buildRoutes(routes);
        const matchedRoutes = matchRoutes(generatedRoutes, searchPath);
        return Array.isArray(matchedRoutes) && matchedRoutes.length > 0;
    }

    return false;
};