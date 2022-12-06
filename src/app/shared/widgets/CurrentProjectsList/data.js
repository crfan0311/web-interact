import {ASSET_LOGOS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const projects = [
    {
        id: 21,
        name: 'Jumbo React',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`,`40x40`),
        dueDate: 'July 30, 2020',
        isDelayed: false,
        progress: 70,
        team: [1, 2, 5, 6, 8, 9],
        category: {
            name: "Development",
            color: "#7352C7"
        }
    },
    {
        id: 22,
        name: 'Wieldy',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-1.png`,`40x40`),
        dueDate: 'July 25, 2020',
        isDelayed: false,
        progress: 60,
        team: [1, 2, 3, 5],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 24,
        name: 'Mouldify',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-5.png`,`40x40`),
        dueDate: 'July 09, 2020',
        isDelayed: true,
        progress: 90,
        team: [2, 6, 9, 10],
        category: {
            name: "Marketing",
            color: "#E73145"
        }
    },
    {
        id: 28,
        name: 'Jumbo React Admin',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 20,
        team: [2, 3, 4, 5, 6, 8],
        category: {
            name: "Development",
            color: "#7352C7"
        }
    },
    {
        id: 29,
        name: 'Drift Angular',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-7.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 40,
        team: [1, 2, 3, 5, 6, 8, 9, 10],
        category: {
            name: "Marketing",
            color: "#E73145"
        }
    },
    {
        id: 30,
        name: 'Jumbo React',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-10.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 70,
        team: [2, 3, 5, 6, 7, 8],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 32,
        name: 'Wieldy',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-8.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 60,
        team: [1, 2, 3, 6, 9],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 34,
        name: 'Mouldify',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: true,
        progress: 90,
        team: [5, 6, 7],
        category: {
            name: "Marketing",
            color: "#E73145"
        }
    },
    {
        id: 38,
        name: 'Jumbo React Admin',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 20,
        team: [1, 2, 5, 6, 7, 8],
        category: {
            name: "Development",
            color: "#7352C7"
        }
    },
    {
        id: 39,
        name: 'Drift Angular',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-7.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 40,
        team: [1, 2, 3, 4, 5, 6],
        category: {
            name: "Development",
            color: "#7352C7"
        }
    },
    {
        id: 41,
        name: 'Jumbo React',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-5.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 70,
        team: [4, 5, 8, 9],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 42,
        name: 'Wieldy',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`,`40x40`),
        dueDate: '06-25-2020',
        isDelayed: false,
        progress: 60,
        team: [4, 5, 6, 2, 3],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 44,
        name: 'Mouldify',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-10.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: true,
        progress: 90,
        team: [1, 5, 9],
        category: {
            name: "Designing",
            color: "#3BD2A2"
        }
    },
    {
        id: 48,
        name: 'Jumbo React Admin',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 20,
        team: [1, 2, 4, 5],
        category: {
            name: "Development",
            color: "#7352C7"
        }
    },
    {
        id: 49,
        name: 'Drift Angular',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`,`40x40`),
        dueDate: 'July 15, 2020',
        isDelayed: false,
        progress: 40,
        team: [1, 2, 3, 4, 5, 6, 8, 9],
        category: {
            name: "Marketing",
            color: "#E73145"
        }
    },
];

export const menuItems = [
    {
        title: "Scrum board",
        slug: "scrum board"
    },
    {
        title: "Team",
        slug: "team",
    },
    {
        title: "Reports",
        slug: "reports"
    }
];
