import { parseURIParams, urlencode } from "app/utils/www";
import axios from "./config";

const LC_KEYS = {
    // User default localization settings
    // This should correspond to the TZ capture on the first time the user logged in
    // When the users changes the TZ, we should probably ask them if they want to update it 
    USER_DEFAULT_TIMEZONE: 'USER_DEFAULT_TIMEZONE',
}

export { LC_KEYS as LOCALIZATION_LOCALSTORAGE_KEYS };

export const localizationServices = {


    /**
     * Returns ISO timezone format, i.e CST, EST, PST, etc
     */
    getDeviceTimezone: () => {
        return new Intl.DateTimeFormat('en-us', { timeZoneName: 'short' })
            .formatToParts(new Date())
            .find(part => part.type == "timeZoneName")
            .value
    }


}