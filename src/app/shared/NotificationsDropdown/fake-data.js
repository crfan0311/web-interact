import {getCustomDateTime} from "@jumbo/utils";

export const notifications = [
    {
        id: 2,
        user: {
            id: 101,
            name: 'Stella Johnson',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        type: 'POSTING',
        metaData: {
            post: {
                type: 'album',
                title: 'This is Beginning',
                owner: {
                    id: 545,
                    name: 'Martin Guptil',
                    profile_pic: 'https://via.placeholder.com/150x150',
                },
            },
        },
        createdAt: getCustomDateTime(-27, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        id: 3,
        user: {
            id: 102,
            name: 'John Doe',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        type: 'SHARED_POST',
        metaData: {
            post: {
                title: 'This is Beginning',
                owner: {
                    id: 545,
                    name: 'Martin Guptil',
                    profile_pic: 'https://via.placeholder.com/150x150',
                },
            },
        },
        createdAt: getCustomDateTime(-50, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        id: 1,
        user: {
            id: 100,
            name: 'Garry Sobars',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        type: 'INVITATION',
        metaData: {
            user: {
                id: 105,
                name: 'North Taylor',
                profile_pic: 'https://via.placeholder.com/150x150',
            },
            group: { id: 12, name: 'Global Health' },
        },
        date: getCustomDateTime(-90, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
        id: 4,
        user: {
            id: 105,
            name: 'Sara John',
            profile_pic: 'https://via.placeholder.com/150x150',
        },
        type: 'BIRTHDAY',
        createdAt: getCustomDateTime(-150, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
];
