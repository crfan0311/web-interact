import {getCustomDate, getCustomTime} from "@jumbo/utils";
import {ASSET_AVATARS} from "../../utils/constants/paths";
import {getAssetPath} from "../../utils/appHelpers";

export const users = [
    {
        id: 1,
        name: 'Alex Dolgove',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`,"40x40"),
        status: 'away',
    },
    {
        id: 2,
        name: 'Domnic Brown',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
        status: 'online',
    },
    {
        id: 3,
        name: 'Domnic Harris',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"40x40"),
        status: 'offline',
    },
    {
        id: 4,
        name: 'Garry Sobars',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`,"40x40"),
        status: 'away',
    },
    {
        id: 5,
        name: 'Jeson Born',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"40x40"),
        status: 'away',
    },
    {
        id: 6,
        name: 'Jimmy Jo',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`,"40x40"),
        status: 'online',
    },
    {
        id: 7,
        name: 'John Smith',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`,"40x40"),
        status: 'away',
    },
    {
        id: 8,
        name: 'Kadir M',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`,"40x40"),
        status: 'online',
    },
    {
        id: 9,
        name: 'Jimmy Jon',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`,"40x40"),
        status: 'offline',
    },
    {
        id: 10,
        name: 'Stella Johnson',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`,"40x40"),
        status: 'offline',
    },
    {
        id: 11,
        name: 'Steve Smith',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`,"40x40"),
        status: 'online',
    },
];

export const favorite_users = [3, 4, 5];

export const conversations = [
    {
        id: 6501,
        first_user_id: 2,
        second_user_id: 1,
        messages: [
            {
                id: "7501",
                message_type: 'text',
                message: 'It is a long established fact',
                sent_at: getCustomTime(50, 'minutes'),
                sent_date: getCustomDate(50, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 2,
            },
            {
                id: "7502",
                message_type: 'text',
                message: 'I must explain to you how all this mistaken idea of denouncing ',
                sent_at: getCustomTime(48, 'minutes'),
                sent_date: getCustomDate(48, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 2
            },
            {
                id: "7503",
                message_type: 'text',
                message: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                sent_at: getCustomTime(45, 'minutes'),
                sent_date: getCustomDate(45, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 1,
            },
            {
                id: "7504",
                message_type: 'text',
                unread: false,
                message: 'There are many variations of passages of ',
                sent_at: getCustomTime(42, 'minutes'),
                sent_date: getCustomDate(42, 'days', 'DD MMMM'),
                sent_by: 1
            },
            {
                id: "7505",
                message_type: 'text',
                message: 'All the Lorem Ipsum generators on the',
                sent_at: getCustomTime(41, 'minutes'),
                sent_date: getCustomDate(41, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 2
            },
            {
                id: "7506",
                message_type: 'text',
                message: 'There are many variations of passages of ',
                sent_at: getCustomTime(35, 'minutes'),
                sent_date: getCustomDate(35, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 2
            },
            {
                id: "7507",
                message_type: 'text',
                message: 'It is a long established fact',
                sent_at: getCustomTime(33, 'minutes'),
                sent_date: getCustomDate(33, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 2
            },
            {
                id: "7508",
                message_type: 'text',
                message: 'The standard chunk of Lorem Ipsum used since the 1500s',
                sent_at: getCustomTime(30, 'minutes'),
                sent_date: getCustomDate(30, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 2,
            },
        ]
    },
    {
        id: 6502,
        first_user_id: 3,
        second_user_id: 1,
        messages: [
            {
                id: "7510",
                message_type: 'text',
                message: 'Hi, how are you doing?',
                sent_at: getCustomTime(27, 'minutes'),
                sent_date: getCustomDate(27, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 3,
            },
            {
                id: "7511",
                message_type: 'text',
                message: "Hey, I'm good. Thanks!",
                sent_at: getCustomTime(25, 'minutes'),
                sent_date: getCustomDate(25, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 1
            },
            {
                id: "7512",
                message_type: 'text',
                message: 'Did you try the new app I published a couple of hours ago?',
                sent_at: getCustomTime(21, 'minutes'),
                sent_date: getCustomDate(21, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 3,
            },
            {
                id: "7513",
                message_type: 'text',
                unread: false,
                message: "Sorry, didn't get much chance today. Let me give it a try right away.",
                sent_at: getCustomTime(19, 'minutes'),
                sent_date: getCustomDate(19, 'days', 'DD MMMM'),
                sent_by: 3
            },
            {
                id: "7514",
                message_type: 'text',
                message: 'btw, shall I download a new version from TestFlight?',
                sent_at: getCustomTime(17, 'minutes'),
                sent_date: getCustomDate(17, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 3
            },
            {
                id: "7515",
                message_type: 'text',
                message: 'Yes, you will need to do that :)',
                sent_at: getCustomTime(16, 'minutes'),
                sent_date: getCustomDate(16, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 1
            },
            {
                id: "7516",
                message_type: 'text',
                message: "Okay. I'm in.",
                sent_at: getCustomTime(15, 'minutes'),
                sent_date: getCustomDate(15, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 3
            },
            {
                id: "7517",
                message_type: 'text',
                message: 'Wow! this new animation on splash screen looks awesome.',
                sent_at: getCustomTime(14, 'minutes'),
                sent_date: getCustomDate(14, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 3,
            },
            {
                id: "7519",
                message_type: 'text',
                message: "Above are few feedback points but other than that all looks great.",
                sent_at: getCustomTime(11, 'minutes'),
                sent_date: getCustomDate(11, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 3
            },
            {
                id: "7520",
                message_type: 'text',
                message: 'Sure thing. I will go through with these and will get back to you tomorrow.',
                sent_at: getCustomTime(10, 'minutes'),
                sent_date: getCustomDate(1, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 1,
            },
        ]
    },
    {
        id: 6503,
        first_user_id: 4,
        second_user_id: 1,
        messages: [
            {
                id: "7521",
                message_type: 'text',
                message: 'Did you get a chance to work on new tasks I assigned yesterday?',
                sent_at: getCustomTime(9, 'minutes'),
                sent_date: getCustomDate(9, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 4,
            },
            {
                id: "7522",
                message_type: 'text',
                message: 'Yes, I worked on couple of those but still have a lot to work on today :)',
                sent_at: getCustomTime(8, 'minutes'),
                sent_date: getCustomDate(8, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 1
            },
            {
                id: "7523",
                message_type: 'text',
                message: 'Yeah I thought so. Hopefully, these all will be done by end of this week.',
                sent_at: getCustomTime(7, 'minutes'),
                sent_date: getCustomDate(7, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 4,
            },
            {
                id: "7524",
                message_type: 'text',
                unread: false,
                message: 'Yes, I believe so.',
                sent_at: getCustomTime(6, 'minutes'),
                sent_date: getCustomDate(6, 'days', 'DD MMMM'),
                sent_by: 1
            },
            {
                id: "7525",
                message_type: 'text',
                message: 'Okay then, I will get in touch with you at EOD.',
                sent_at: getCustomTime(5, 'minutes'),
                sent_date: getCustomDate(5, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 4
            },
            {
                id: "7526",
                message_type: 'text',
                message: 'Perfect! have a wonderful day ahead.',
                sent_at: getCustomTime(4, 'minutes'),
                sent_date: getCustomDate(4, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 4
            },
        ]
    },
    {
        id: 6504,
        first_user_id: 5,
        second_user_id: 1,
        messages: [
            {
                id: "7527",
                message_type: 'text',
                message: "Hey David! I'm about to connect with the marketing team in an hour.",
                sent_at: getCustomTime(3, 'minutes'),
                sent_date: getCustomDate(3, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 5,
            },
            {
                id: "7528",
                message_type: 'text',
                message: 'Is there anything for me to know before I head into the meeting?',
                sent_at: getCustomTime(2, 'minutes'),
                sent_date: getCustomDate(2, 'days', 'DD MMMM'),
                unread: true,
                sent_by: 5
            },
            {
                id: "7529",
                message_type: 'text',
                message: 'Hi, Nothing big but just a soft reminder to keep the new FAQ list we prepared to discuss with them.',
                sent_at: getCustomTime(1, 'minutes'),
                sent_date: getCustomDate(1, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 1,
            },
            {
                id: "7530",
                message_type: 'text',
                unread: false,
                message: 'Let me know if you want to review that list with me before the meeting?.',
                sent_at: getCustomTime(0, 'minutes'),
                sent_date: getCustomDate(0, 'days', 'DD MMMM'),
                sent_by: 1
            },
            {
                id: "7531",
                message_type: 'text',
                message: "No, I think I'm good with that.",
                sent_at: getCustomTime(2, 'minutes'),
                sent_date: getCustomDate(2, 'days', 'DD MMMM'),
                unread: false,
                sent_by: 5
            },
        ]
    }
];
