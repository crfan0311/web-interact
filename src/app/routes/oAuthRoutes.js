import { DiscordOAuthPage } from "app/pages/oauth/Discord";
import React from "react";
import Login1 from "../pages/auth-pages/login1";


/**
 * OAuth routes dedicated to external integratinons callbacks
 */
const oAuthRoutes = [
    {
        path: "/oauth/discord/callback",
        element: <DiscordOAuthPage/>,
        // No rendering of the component
        renderless: true
    }
];

export default oAuthRoutes;
