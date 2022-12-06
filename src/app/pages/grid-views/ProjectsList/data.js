import {ASSET_AVATARS, ASSET_LOGOS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const projectData = [
    {
        id: 111,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-1.png`, "72x72"),
        title: "Jumbo React Admin Template",
        progress: 57,
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        task: "26/30 tasks",
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
        id: 112,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`, "72x72"),
        title: "Wieldy Admin Template",
        progress: 67,
        status: {
            linear_color: "inherit",
            chip_color: "default",
            label: "Not Started"
        },
        task: "26/30 tasks",
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
        id: 113,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`, "72x72"),
        title: "Mouldify",
        progress: 47,
        status: {
            linear_color: "warning",
            chip_color: "warning",
            label: "On Hold"
        },
        task: "26/30 tasks",
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
        id: 114,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-5.png`, "72x72"),
        title: "Jumbo React",
        progress: 80,
        status: {
            linear_color: "primary",
            chip_color: "primary",
            label: "Completed"
        },
        task: "26/30 tasks",
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
                profilePic: `${ASSET_AVATARS}/avatar6.jpg`,
            }
        ],
    },
    {
        id: 115,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`, "72x72"),
        title: "Wieldy",
        progress: 85,
        status: {
            linear_color: "warning",
            chip_color: "warning",
            label: "On Hold"
        },
        task: "26/30 tasks",
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
        id: 116,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-7.png`, "72x72"),
        title: "Drift Angular",
        progress: 70,
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        task: "26/30 tasks",
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
        id: 117,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-8.png`, "72x72"),
        title: "Wieldy React Admin",
        progress: 80,
        status: {
            linear_color: "warning",
            chip_color: "warning",
            label: "On Hold"
        },
        task: "26/30 tasks",
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
        id: 118,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-10.png`, "72x72"),
        title: "Jumbo React",
        progress: 67,
        status: {
            linear_color: "primary",
            chip_color: "primary",
            label: "Completed"
        },
        task: "26/30 tasks",
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
        id: 119,
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`, "72x72"),
        title: "Wieldy",
        progress: 57,
        status: {
            linear_color: "success",
            chip_color: "success",
            label: "In Progress"
        },
        task: "26/30 tasks",
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

];
export default projectData;
