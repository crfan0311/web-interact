import React from "react";
import interactV1Routes from "./interactV1Routes";
import { Navigate } from "react-router-dom";
import oAuthRoutes from "./oAuthRoutes";

const routes = [
  ...oAuthRoutes,
  ...interactV1Routes,
];

export default routes;
