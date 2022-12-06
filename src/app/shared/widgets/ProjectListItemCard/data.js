import {ASSET_AVATARS, ASSET_LOGOS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const projects = [
    {
        logo: `${ASSET_LOGOS}/project-logo-1.png`,
        name: "Jumbo React Admin Template",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "24 Oct, 2021",
        progress: 57,
        deadline: "02 March, 2022",
        status: {
            color: "#232212",
            label: "Development"
        },
        team: [
            {
                name: "Joshua",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`),
            },
            {
                name: "Priyanka",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`),
            },
            {
                name: "Aparna",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`),
            },
            {
                name: "Ruparam",
                profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`),
            }
        ],
    },
];
