import moment from 'moment';

export const timeSince = (days) => {
    let calcDate = new Date(Date.now() - (days * 24 * 3600 * 1000));
    let seconds = Math.floor((new Date() - calcDate) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + "y ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + "m ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "h ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "m ago";
    }
    return Math.floor(seconds) + "s ago";
};

export const parseGradientArray = (gradientArray) => {
    const gradients = [];
    let percentageDefined = 0;
    let undefinedGradientCounts = 0;

    for (let count = 0; count < gradientArray.length; count++) {
        const gradientValues = gradientArray[count].trim().split(" ");

        if (gradientValues.length === 1) {
            gradients.push({color: gradientValues[0], percent: -1});
            undefinedGradientCounts++;
        } else {
            const percent = parseInt(gradientValues[gradientValues.length - 1].trim());
            gradients.push({color: gradientValues[0], percent: percent});
            percentageDefined += percent;
        }
    }

    if (undefinedGradientCounts) {
        const equalPercent = (100 - percentageDefined) / undefinedGradientCounts;
        for (let count = 0; count < gradients.length; count++) {
            if (gradients[count].percent === -1) {
                gradients[count].percent = equalPercent;
            }
        }
    }
    return gradients;
};

export const getDateElements = date => {
    const dateString = moment(date).format('dddd, MMMM DD YYYY, hh:mm A');
    const dateSections = dateString.split(',');
    const day = dateSections[0];
    const time = dateSections[2];
    const datePart = dateSections[1].trim().split(' ');
    return {
        day,
        time,
        date: {
            dateString: dateSections[1],
            month: datePart[0],
            date: datePart[1],
            year: datePart[2],
        },
    };
};

/**
 * Get Custom Date Time
 * @param value
 * @param unit
 * @param format
 * @returns {string}
 */
export const getCustomDateTime = (value = 0, unit = 'days', format = 'HH:mm a | MMMM DD, YYYY') => {
    if (value === 0) {
        return moment().format(format);
    } else {
        return moment()
            .add(value, unit)
            .format(format);
    }
};
export const getCustomDate = (value = 0, unit = 'days', format = 'hh:mm , DD MMMM') => {
    if (value === 0) {
        return "Today";
    }
    if (value === 1) {
        return "Yesterday";
    } else {
        return moment().subtract(value, unit).format(format);
    }
};
export const getCustomTime = (value = 0, unit = 'minutes', format = 'hh:mm A') => {
    if (value === 0) {
        return moment().format(format);
    } else {
        return moment().subtract(value, unit).format(format);
    }
};
export const getYesterdayDate = () => {
    return moment()
        .subtract(1, 'day')
        .format('DD.MM.YYYY');
};
export const capitalizeFLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
};

export const isValidEmail = (emailAddress) => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};
