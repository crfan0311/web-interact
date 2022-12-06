import React from "react";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

export const notificationIcons = {
    POSTING: <RateReviewOutlinedIcon fontSize="small"  sx={{ color: '#836AFF' }} />,
    SHARED_POST: <ShareOutlinedIcon fontSize="small" sx={{ color: '#0795F4' }} />,
    INVITATION: <MarkEmailUnreadOutlinedIcon fontSize="small" sx={{ color: '#00C4B4' }} />,
    BIRTHDAY: <CakeOutlinedIcon fontSize="small" sx={{ color: '#EF933C' }} />,
};
