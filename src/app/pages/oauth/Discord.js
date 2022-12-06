import { discordServices } from 'app/services/discord';
import React from 'react';









/**
 * Do not use directly!
 * Invoked by Discord redirectURI callback
 * The page is expected to:
 * - Store the Discord tokens in the local storage
 * - Close the window tab
 */
export const DiscordOAuthPage = () => {

    try{
        discordServices.storeAuthorization(window.location.href).then(() => {
            window.close();
        });
        
    
    }
    catch(e){
        console.error(e);
    }
        

    return (
        <p>Processing your tokens...</p>
    );
};
