import React from 'react';
import FeedInvitation from "./FeedTypes/FeedInvitation";
import FeedPhotoUpload from "./FeedTypes/FeedPhotoUpload";
import FeedSharedPost from "./FeedTypes/FeedSharedPost";

const FeedComponents = {
    PROJECT_INVITATION: FeedInvitation,
    PHOTOS_UPLOADED: FeedPhotoUpload,
    SHARED_POST: FeedSharedPost
};
const FeedItem = ({feed}) => {
    const FeedComponent = FeedComponents[feed.type];
    return (
        <FeedComponent feed={feed}/>
    );
};
/* Todo feed prop define */
export default FeedItem;
