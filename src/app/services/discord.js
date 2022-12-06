import { parseURIParams, urlencode } from "app/utils/www";
import axios from "./config";

const LC_KEYS = {
    DISCORD_OAUTH_STATE:'DISCORD_OAUTH_STATE',
    DISCORD_OAUTH_DATA:'DISCORD_OAUTH_DATA',
}

export { LC_KEYS as DISCORD_LOCALSTORAGE_KEYS };

export const discordServices = {
    getConfig: async () => {
        return await axios.get("/discord/oauth/config");
    },

    /**
     * Parses (and validates) the params supplied in the URI parsed from Discord redirect upon user authorization.
     * @param {URL} redirectURI 
     */
    storeAuthorization: (redirectURI) => {
        // URI Format: 
        // https://localhost:8080/authorize-discord?code=VQQTk4JK0WGUsprJiZqcunUjNOYPRQ&state=15773059ghq9183habn&guild_id=893914383317622786&permissions=0

        const oAuthData = discordServices.parseRedirectURI(redirectURI);
        const { state } = oAuthData;

        // Ensure that the state is valid
        // We validate it against the last state stored by "generateAuthorizationURI"
        if (state !== localStorage.getItem(LC_KEYS.DISCORD_OAUTH_STATE)) {
            throw new Error("Invalid Discord authorization state");
        }
        localStorage.setItem(LC_KEYS.DISCORD_OAUTH_DATA, JSON.stringify(oAuthData));
    },
    waitForAuthorization: () => {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                const discordLinkStatus = localStorage.getItem(LC_KEYS.DISCORD_OAUTH_DATA);
                if (discordLinkStatus) {
                    clearInterval(interval);
                    resolve(discordLinkStatus);
                }
            }, 1000);
        });
    },

    isLinked: () => {
        return Boolean(localStorage.getItem(LC_KEYS.DISCORD_OAUTH_DATA));
    },


    revokeAuthorization: async () => {
        localStorage.removeItem(LC_KEYS.DISCORD_OAUTH_DATA);
    },


    /**
     * Generates an authorization URI that opens a Discord OAuth2 window flow.
     */
    generateAuthorizationURI: async () => {
        // Collect the config from our backend
        const {data} = await discordServices.getConfig();
        const {clientId, scopes, permissions, redirectUri} = data;

        // Creat a state for the current authorization context
        const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        localStorage.setItem(LC_KEYS.DISCORD_OAUTH_STATE, state);
        
        // Build Authorization URI
        return "https://discord.com/oauth2/authorize?" + urlencode({
            "client_id": clientId,
            "scope": scopes.join(" "),
            // This could be anything random. We'll use it to validate the authorization context
            "state": state, 
            "redirect_uri":redirectUri,
            "prompt":"consent",
            "response_type":"code",
            'permissions': permissions
        });
    },

    /**
     * Parses the params of an URI redirected from Discord's OAuth2 flow.
     */
    parseRedirectURI: (redirectURI) => {
        // URI Format: 
        // https://localhost:8080/authorize-discord?code=VQQTk4JK0WGUsprJiZqcunUjNOYPRQ&state=15773059ghq9183habn&guild_id=893914383317622786&permissions=0
        const urlParams = parseURIParams(redirectURI);
        console.info("Parsed Discord redirect URI params", urlParams);
        return {
            code: urlParams.code,
            guild_id: urlParams.guild_id,
            permissions: urlParams.permissions,
            state: urlParams.state,
        };

    }

}