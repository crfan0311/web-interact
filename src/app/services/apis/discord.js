import mock from "../index";
import { discordConfig } from "../mock-data/discord";

mock.onGet("/discord/oauth/config").reply(request => {
    return [
        200, 
        discordConfig
    ];
});
