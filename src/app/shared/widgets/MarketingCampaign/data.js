import RefreshIcon from "@mui/icons-material/Refresh";
import ArticleIcon from "@mui/icons-material/Article";
import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const marketingCampaigns = [
    {
        id: 1,
        name: 'Facebook Ads',
        desc: '63 Likes, 387 Shares',
        icon: <FacebookOutlinedIcon/>,
        bgcolor: '#38529A',
        budget: 570,
        growth: 20,
    },

    {
        id: 2,
        name: 'Twitter Ads',
        desc: '43 Likes, 545 Shares',
        icon: <TwitterIcon/>,
        bgcolor: '#17A9FC',
        budget: 811,
        growth: -5,
    },

    {
        id: 3,
        name: 'Instagram',
        desc: '83 Follows, 79 Likes',
        icon: <InstagramIcon/>,
        bgcolor: '#CC4BB7',
        budget: 685,
        growth: 20,
    },

    {
        id: 4,
        name: 'Google Ads',
        desc: '63 Likes, 387 Shares',
        icon: <GoogleIcon />,
        bgcolor: '#4181ED',
        budget: 685,
        growth: 145,
    },
    {
        id: 5,
        name: 'Youtube',
        desc: '70 Likes, 1387 Shares',
        icon: <YouTubeIcon/>,
        bgcolor: '#C6171D',
        budget: 375,
        growth: 55,
    },
    {
        id: 6,
        name: 'Linked In',
        desc: '85 Likes, 581 Shares',
        icon: <LinkedInIcon/>,
        bgcolor: '#0073B1',
        budget: 410,
        growth: 70,
    },

];

export const menuItems = [
    {
        icon: <RefreshIcon size={20}/>,
        title: "Refresh",
        slug: "refresh"
    },
    {
        icon: <ArticleIcon size={20}/>,
        title: "All campaigns",
        slug: "articles",
    }
];
