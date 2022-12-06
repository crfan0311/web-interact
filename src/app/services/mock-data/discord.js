
export const discordConfig = {
    clientId: "893912286178201640",
    scopes: [
        'identify',
        'bot',
        'guilds',
        'guilds.join',
        'applications.commands'
    ],
    // Manage: SERVER, ROLES, CHANNELS
    // Send: Messages
    permissions: 268437552,
    redirectUri: window.location.origin + "/oauth/discord/callback"
}