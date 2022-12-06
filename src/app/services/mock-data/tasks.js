import {ASSET_AVATARS} from "../../utils/constants/paths";
import {getAssetPath} from "../../utils/appHelpers";

export const tasks = [
    {
        id: 1,
        completed: true,
        description: 'Make the homepage dynamic',
        tags: [1, 2],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 07, 2020',
    },
    {
        id: 2,
        completed: false,
        description: 'Add the file formats in the data',
        tags: [2, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 3,
        completed: false,
        description: 'Add new page in the website.',
        tags: [1, 2, 4],
        user: {
            id: 102,
            name: 'Tanmay Goswami',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 4,
        completed: true,
        description: 'Assign the task to John Doe',
        tags: [3, 4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 5,
        completed: false,
        description: 'Re-design the components',
        tags: [4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 06, 2020',
    },
    {
        id: 6,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [4, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 7,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [1, 2],
        user: {
            id: 102,
            name: 'Tanmay Goswami',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 8,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [2, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, `28x28`),
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 9,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 06, 2020',
    },
    {
        id: 10,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [3, 4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 05, 2020',
    },
    {
        id: 11,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [2],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `28x28`),
        },
        dueDate: 'July 04, 2020',
    },
];

export const taskCategories = [
    {id: 1, name: 'All Tasks', slug: 'all-tasks'},
    {id: 2, name: 'My Tasks', slug: 'my-tasks', userId: 100}
];
export const taskTags = [
    {
        id: 1,
        name: 'HTML',
        color: 'error',
    },
    {
        id: 2,
        name: 'React',
        color: 'success',
    },
    {
        id: 3,
        name: 'JavaScript',
        color: 'info',
    },
    {
        id: 4,
        name: 'CSS',
        color: 'warning',
    },
];
