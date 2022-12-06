import axios from "./config";

const mailServices = {};

mailServices.getMails = async ({queryKey}) => {
    const {page, limit, queryParams} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/mails", {
        params: {
            page: page,
            limit: limit,
            ...queryParams
        }
    });
    return data;
};

mailServices.addMail = async (mail) => {
    const {data} = await axios.post("/mail/add", mail);
    return data;
}

mailServices.getLabels = async () => {
    const {data} = await axios.get("/mail/labels");
    return data;
};

mailServices.addLabel = async (label) => {
    const {data} = await axios.post('/mail/add-label', label);
    return data;
};

mailServices.updateLabel = async (label) => {
    const {data} = await axios.put('/mail/update-label', label);
    return data;
}

mailServices.deleteLabel = async (label) => {
    const {data} = await axios.delete("/mail/delete-label", {
        params: {id: label.id}
    });
    return data;
};

mailServices.deleteMultiple = async (selectedIDs) => {
    const {data} = await axios.put("/mails/bulk-delete", {
        mailIDs: selectedIDs
    });
    return data;
};

mailServices.multipleMoveSpam = async (selectedIDs) => {
    const {data} = await axios.put("/mails/bulk-spam", {
        mailIDs: selectedIDs
    });
    return data;
};

mailServices.assignLabel = async (params) => {
    const {data} = await axios.put("/mails/assign-label", {
        mailIDs: params?.mailIDs ?? [],
        labelIDs: params?.labelIDs ?? []
    });
    return data;
};

mailServices.getMailDetail = async (id) => {

    const {data} = await axios.get('/mail/detail', {
        id: id
    });
    return data;
};

mailServices.getConversationMessages = async ({queryKey}) => {
    const {queryParams} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/mail/conversation-messages", {
        id: queryParams.id
    });
    return data;
}

mailServices.mailConversation = async (mailConversation) => {
    const {data} = await axios.post("/mail/add-conversation", {
        mailID: mailConversation?.mailID,
        message: mailConversation?.message
    });
    return data;
};

mailServices.deleteMail = async (mailID) => {
    const {data} = await axios.put("/mail/delete", {
        mailID: mailID
    });
    return data;
};

mailServices.removeArchivedMail = async (mailID) => {
    const {data} = await axios.put('/mail/archived', {
        mailID: mailID
    });
    return data;
};

mailServices.mailMoveToSpam = async (mailID) => {
    const {data} = await axios.put('/mail/report-spam', {
        mailID: mailID
    });
    return data;
};

mailServices.removeFavoriteMail = async (mailID) => {
    const {data} = await axios.put('/mail/favorite', {
        mailID: mailID
    });
    return data;
};

export {mailServices};
