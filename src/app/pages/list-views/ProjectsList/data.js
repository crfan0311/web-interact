import {ASSET_AVATARS, ASSET_LOGOS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const projects = [
    {
        id: 1234,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-1.png`, "52x52"),
        name: "Jumbo React Admin Template",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "24 Oct, 2021",
        progress: 57,
        deadline: "02 March, 2022",
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1235,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`, "52x52"),
        name: "Wieldy Admin Template",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "22 Oct, 2021",
        progress: 67,
        deadline: "03 March, 2022",
        status: {
            linear_color: "inherit",
            chip_color: "default",
            label: "Not Started"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1236,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`, "52x52"),
        name: "Mouldify",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "19 Oct, 2021",
        progress: 47,
        deadline: "05 March, 2022",
        status: {
            linear_color: "primary",
            chip_color: "primary",
            label: "Completed "
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1237,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-5.png`, "52x52"),
        name: "Jumbo React",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "9 Oct, 2021",
        progress: 80,
        deadline: "10 May, 2022",
        status: {
            linear_color: "warning",
            chip_color: "warning",
            label: "On Hold"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1238,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`, "52x52"),
        name: "Wieldy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2 Oct, 2021",
        progress: 85,
        deadline: "23 May, 2022",
        status: {
            linear_color: "inherit",
            chip_color: "default",
            label: "Not Started"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1239,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-7.png`, "52x52"),
        name: "Drift Angular",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "28 Sept, 2021",
        progress: 70,
        deadline: "24 May, 2022",
        status: {
            linear_color: "warning",
            chip_color: "warning",
            label: "On Hold"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Mickey Arthur",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1240,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-8.png`, "52x52"),
        name: "Wieldy React Admin Template",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "24 Sept, 2021",
        progress: 67,
        deadline: "10 Jun, 2022",
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Ruparam",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1241,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-10.png`, "52x52"),
        name: "Jumbo React",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "19 Sept, 2021",
        progress: 57,
        deadline: "18 Jun, 2022",
        status: {
            linear_color: "primary",
            chip_color: "primary",
            label: "Completed"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Ruparam",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
    {
        id: 1242,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`, "52x52"),
        name: "Wieldy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "12 Sept, 2021",
        progress: 72,
        deadline: "05 July, 2022",
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        team: [
            {
                name: "Julia Robert",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40"),
            },
            {
                name: "Joe Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "40x40"),
            },
            {
                name: "Chang Lee",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "40x40"),
            },
            {
                name: "Ruparam",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40"),
            }
        ],
    },
];
