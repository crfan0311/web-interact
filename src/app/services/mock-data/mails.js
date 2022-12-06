import React from 'react';
import {Archive, Delete, Drafts, LabelImportant, MoveToInbox, Report, Send, Star} from "@mui/icons-material";
import {ASSET_AVATARS} from "../../utils/constants/paths";
import {getAssetPath} from "../../utils/appHelpers";

export const foldersList = [
    {id: 1, name: 'Inbox', slug: 'inbox', icon: <MoveToInbox fontSize={"small"}/>},
    {id: 2, name: 'Sent', slug: 'sent', icon: <Send fontSize={"small"}/>},
    {id: 3, name: 'Drafts', slug: 'drafts', icon: <Drafts fontSize={"small"}/>},
    {id: 5, name: 'Spam', slug: 'spam', icon: <Report fontSize={"small"}/>},
    {id: 6, name: 'Trash', slug: 'trash', icon: <Delete fontSize={"small"}/>},
    {id: 7, name: 'Archived', slug: 'archived', icon: <Archive fontSize={"small"}/>}
];

export const filtersOptions = [
    {id: 1, name: 'Important', slug: 'important', icon: <LabelImportant fontSize={"small"}/>},
    {id: 2, name: 'Favorite', slug: 'favorite', icon: <Star fontSize={"small"}/>},
];

export const labelsList = [
    {id: 1, name: 'Banking', slug: 'banking', color: '#FF8C00'},
    {id: 2, name: 'Company', slug: 'company', color: '#00C4B4'},
];

export const connectionsList = [
    {
        id: 31,
        name: 'John Doe',
        profile_pic: 'https://via.placeholder.com/150x150',
        email: 'john@example.com',
        status: 0,
    },
    {
        id: 32,
        name: 'Jerome Taylor',
        profile_pic: 'https://via.placeholder.com/150x150',
        email: 'jerome@example.com',
        status: 1,
    },
    {
        id: 33,
        name: 'Brad Hayden',
        profile_pic: 'https://via.placeholder.com/150x150',
        email: 'brad@example.com',
        status: 1,
    },
];

export const mails = [
    {
        id: '330',
        from: {
            name: 'Domnic Harris',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"40x40"),
            email: 'domnicharris@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Fusce a libero pellentesque',
        message:
            'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta. Etiam nec dictum mauris. Ut imperdiet maximus orci vitae ornare. Nullam et libero sit amet tellus ultricies rutrum et sit amet nisl. Pellentesque condimentum diam sed hendrerit facilisis. Suspendisse bibendum convallis quam, sit amet rutrum nisi pulvinar et. Nunc placerat, diam at scelerisque viverra, mi velit auctor nibh, at rhoncus erat ex vitae felis. Integer sed ante eget est rutrum ultrices ut non ipsum.',
        read: false,
        favorite: false,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        date: '31 Jul, 2020, 05:30 pm',
        replyThread: [
            {
                id: 1,
                message: "Hello Jack"
            },
            {
                id: 2,
                message: "Let's see try !!"
            }
        ],
    },
    {
        id: '331',
        from: {
            name: 'Garry Sobars',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
            email: 'danielleobrien@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Nullam id ex at augue pharetra vestibulum eget id mauris.',
        message:
            'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
        date: '30 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: true,
        attachments: [],
        labels: [1, 2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '332',
        from: {
            name: 'Stella Brown',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
            email: 'stellgrown@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        date: '29 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '333',
        from: {
            name: 'Steve Jonson',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
            email: 'stevejonson@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Donec ut ante tristique, gravida justo vitae',
        message:
            'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa. Vestibulum tincidunt nisi neque, eu ullamcorper risus aliquet vel. Nunc ut lorem dapibus, interdum nulla vel, euismod elit. Fusce a mollis erat, non egestas dui. Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum iaculis. Morbi eget nibh ut nibh convallis fermentum vitae ac mauris. Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
        date: '29 Jul, 2020, 04:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '334',
        from: {
            name: 'Ira Shorter',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`,"40x40"),
            email: 'irashorter@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Commits that need to be pushed lorem ipsum dolor sit amet',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        date: '28 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '335',
        from: {
            name: 'Alex Dolgove',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
            email: 'alexdolgove@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Ut tincidunt massa non elementum fermentum..',
        message:
            'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quam nisi, pulvinar vitae nulla sed, blandit auctor lacus. Vestibulum et semper lorem. Suspendisse interdum est neque, ut tempus eros ultricies et. Proin ultricies elit ac est egestas pharetra. Praesent id mollis enim. Suspendisse quis arcu nec lacus molestie pharetra sit amet in mauris.',
        date: '27 Jul, 2020, 05:30 pm',
        read: false,
        favorite: false,
        important: true,
        attachments: [
            {
                id: 123,
                file: {
                    type: 'image',
                    name: 'Coin',
                    preview: 'https://via.placeholder.com/575x480',
                    url: '',
                    size: '1.1Mb',
                },
            },
            {
                id: 434343,
                file: {
                    type: 'image',
                    name: 'burgers',
                    preview: 'https://via.placeholder.com/575x480',
                    url: '',
                    size: '380kb',
                },
            },
        ],
        labels: [2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '336',
        from: {
            name: 'Domnic Brown',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar14.jpg`,"40x40"),
            email: 'domnicbrown@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum ',
        message:
            'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..',
        date: '26 Jul, 2020, 05:30 pm',
        read: false,
        favorite: false,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '337',
        from: {
            name: 'Brian Lara',
            profile_pic: '',
            email: 'brianlara@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '25 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '338',
        from: {
            name: 'Jeson Born',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar14.jpg`,"40x40"),
            email: 'jesonborn@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'The standard Lorem Ipsum passage',
        message:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
        date: '24 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: true,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '339',
        from: {
            name: 'Domnic White',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"40x40"),
            email: 'domnicwhite@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Cras bibendum tortor tortor.',
        message:
            'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
        date: '23 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '340',
        from: {
            name: 'Jimmy Jo',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`,"40x40"),
            email: 'jimmy.jo@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Contrary to popular belief. ',
        message:
            'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\n This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
        date: '22 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: true,
        attachments: [],
        labels: [2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '341',
        from: {
            name: 'John Smith',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`,"40x40"),
            email: 'johnsmith@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Ut elementum rhoncus nisl.',
        message:
            'Suspendisse congue ipsum tincidunt justo dictum, sit amet finibus lectus egestas. Proin fermentum nec risus vitae accumsan. Vivamus non ligula eu urna mattis feugiat.',
        date: '21 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '342',
        from: {
            name: 'Jonny Brown',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`,"40x40"),
            email: 'jonnnybrown@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Integer nec tempus eros.',
        message:
            'Vestibulum ornare orci hendrerit elit egestas, nec consectetur mi lobortis. Mauris porttitor dolor in neque aliquam, in sollicitudin enim consequat. Fusce pharetra venenatis fermentum.\n \n Maecenas semper nisi quis lectus dictum, vel fermentum purus malesuada. Nunc tincidunt sit amet nunc sit amet eleifend. Sed tellus risus, sagittis id magna in, commodo feugiat risus. Donec commodo pretium dolor non hendrerit. Nullam id leo et quam cursus vestibulum. Ut id aliquet diam, id varius libero. Ut et felis et est eleifend dignissim vitae condimentum ex. Ut a ullamcorper ante, ac laoreet erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        date: '20 Jul, 2020, 05:30 pm',
        read: true,
        favorite: true,
        important: true,
        attachments: [],
        labels: [1],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '343',
        from: {
            name: 'Rahim Kadir',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"40x40"),
            email: 'rahimkadir@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Praesent tortor odio, laoreet.',
        message:
            'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros sit amet lorem viverra tincidunt eget id dolor. Morbi egestas bibendum ipsum at efficitur. Suspendisse at mauris justo. Curabitur elementum ante et lacus blandit, quis faucibus lorem pellentesque. Duis et auctor quam, sed lacinia ante. Nam placerat lacus eu mollis lobortis. Sed placerat, ipsum eu vestibulum gravida, magna sapien feugiat felis, non varius leo mauris vitae ligula. Suspendisse tincidunt nec enim eu porttitor.',
        date: '19 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [1,2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '344',
        from: {
            name: 'Kadir',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"40x40"),
            email: 'kadirm@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Many desktop publishing packages',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a.  \n \n Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. \n \n In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        date: '18 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: true,
        attachments: [],
        labels: [2],
        folder: 'inbox',
        replyThread: [],
    },
    {
        id: '345',
        from: {
            name: 'Stella Johnson',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar14.jpg`,"40x40"),
            email: 'stella-johnson@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Section 1.10.32 of "de',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. \n \n Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        date: '17 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '346',
        from: {
            name: 'Steve Smith',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`,"40x40"),
            email: 'stevesmith@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Integer nec tempus eros.',
        message:
            'Curabitur id rutrum ex. Morbi tempus libero eget mauris ultricies venenatis. Curabitur eget pellentesque lorem. Morbi in tempor sem, vel posuere odio. Vivamus sit amet efficitur tortor. Fusce in tortor non lorem blandit eleifend quis eu risus. Donec lobortis ex justo, sed suscipit dolor posuere eget.',
        date: '16 Jul, 2020, 05:30 pm',
        read: true,
        favorite: false,
        important: true,
        attachments: [],
        labels: [],
            folder: 'inbox',
        replyThread: [],
    },
    {
        id: '348',
        from: {
            name: 'Martin',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`,"40x40"),
            email: 'martin@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '349',
        from: {
            name: 'Garry Sobars',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/garry-sobars.jpg`,"40x40"),
            email: 'garry@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '24 Jun, 2022, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '350',
        from: {
            name: 'Domnic Harris',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/domnic-harris.jpg`,"40x40"),
            email: 'domnic@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '351',
        from: {
            name: 'Jimmy Jo',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/jimmy-jo.jpg`,"40x40"),
            email: 'jimmy@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [1],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '352',
        from: {
            name: 'Martin',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`,"40x40"),
            email: 'martin@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '353',
        from: {
            name: 'Martin',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`, "40x40"),
            email: 'martin@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [1,2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '354',
        from: {
            name: 'Martin',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`, "40x40"),
            email: 'martin@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: true,
        important: false,
        attachments: [],
        labels: [1,2],
        folder: 'archived',
        replyThread: [],
    },
    {
        id: '355',
        from: {
            name: 'Martin',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`, "40x40"),
            email: 'martin@example.com',
        },
        to: [
            {
                name: 'me',
                email: 'robert.johnson@example.com',
            },
        ],
        subject: 'Quisque felis nisi, iaculis at lacinia et.',
        message:
            'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        date: '04 Jun, 2022, 05:30 pm',
        read: true,
        favorite: false,
        important: false,
        attachments: [],
        labels: [1,2],
        folder: 'archived',
        replyThread: [],
    }
];
