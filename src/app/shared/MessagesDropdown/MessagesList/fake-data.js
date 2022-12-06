import {getCustomDateTime} from "@jumbo/utils";

const messages = [
    {
        user: {
            id: 1,
            name: 'Domnic Harris',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        message: 'I think its a good idea, lets do it then.',
        date: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        user: {
            id: 2,
            name: 'Joe Root',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        message: 'Hey, lets have a cricket match this sunday, what you say?',
        date: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        user: {
            id: 3,
            name: 'Dennis lilly',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        message: 'George has invited you for the dinner, will you go?',
        date: getCustomDateTime(-45, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        user: {
            id: 4,
            name: 'Sara Taylor',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        message: 'Hi, I have shared some documents with you, please go through them.',
        date: getCustomDateTime(-55, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
];

export default messages;