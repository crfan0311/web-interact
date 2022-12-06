import mock from '../'
import {mails} from '../mock-data/mails';
import {getCustomDate} from "@jumbo/utils";
import {ASSET_AVATARS} from "../../utils/constants/paths";

const {idGenerator} = require("@jumbo/utils");
const {labelsList} = require("../mock-data/mails");

const getMailLabels = (mailLabels) => {
    if (mailLabels) {
        return labelsList.filter(label => mailLabels.includes(label.id));
    }
    return [];
};

mock.onGet("/mails").reply(request => {
    const params = request.params;

    let selectedMails = [];
    if (params?.category) {
        let filteredArray = [];
        if (params?.category) {
            filteredArray = mails.filter(mail => mail?.folder === params.category);
        }
        if (params?.category === 'favorite') {
            filteredArray = mails.filter(mail => mail?.favorite === true);
        }
        if (params?.category === 'important') {
            filteredArray = mails.filter(mail => mail?.important === true);
        }

        if (params?.category === 'label' && params?.id) {
            filteredArray = mails.filter(mail => {
                return (
                    params?.keywords
                        ? (!!mail?.labels?.includes(parseInt(params.id)) !== -1)
                        : !!mail?.labels?.includes(parseInt(params.id))
                );
            });
        }
        selectedMails.push(...filteredArray);
    }

    for (let count = 0; count < selectedMails.length; count++) {
        selectedMails[count] = {
            ...selectedMails[count],
            labels: getMailLabels(selectedMails[count].labels)
        }
    }
    if (params?.page >= 0) {
        if (params?.limit) {

            const from = params.page * params.limit;
            const to = params.page > 0 ? (params.limit + from) : params.limit;

            return [
                200, {
                    mailsList: selectedMails.slice(from, to),
                    count: selectedMails.length
                }
            ];
        }
    } else {
        return [
            200, {
                mailsList: mails,
                count: mails.length
            }
        ]
    }
});

mock.onPost("/mail/add").reply(request => {
    const mail = JSON.parse(request.data);
    const newMail = {
        id: idGenerator(),
        folder: "sent",
        labels: [],
        favorite: false,
        important: false,
        from: {
            name: "Domnic Harris",
            profile_pic: `${ASSET_AVATARS}/avatar4.jpg`,
            email: 'domnicharris@example.com',
        },
        replyThread: [],
        ...mail
    };
    mails.unshift(newMail);
    return [200, newMail];
});

mock.onGet("/mail/labels").reply(request => {
    return [
        200, {
            labels: labelsList
        }
    ]
});

mock.onPost('/mail/add-label').reply(request => {
    const label = JSON.parse(request.data);
    const newLabel = {
        id: idGenerator(),
        ...label
    };
    labelsList.unshift(newLabel)
    return [200, newLabel];
});

mock.onPut('/mail/update-label').reply(request => {
    const label = JSON.parse(request.data);

    const labelIndex = labelsList.findIndex(item => item.id === label.id);
    if (labelIndex >= 0) {
        labelsList[labelIndex] = label;
    }
    return [200, label];
});

mock.onDelete('/mail/delete-label').reply(request => {
    const params = request.params;
    const labelIndex = labelsList.findIndex(item => item?.id === params.id);
    if (labelIndex >= 0) {
        labelsList.splice(labelIndex, 1);
    }
    return [200, params.id];
});

mock.onPut('/mails/bulk-delete').reply(request => {
    const {mailIDs} = JSON.parse(request?.data);
    if (mailIDs && Array.isArray(mailIDs)) {
        for (let count = 0; count < mailIDs.length; count++) {
            const mailIndex = mails.findIndex(mail => mailIDs[count] === mail.id);
            if (mailIndex >= 0) {
                if (mails[mailIndex].folder === 'trash') {
                    mails.splice(mailIndex, 1);
                } else if (mails[mailIndex].favorite === true) {
                    mails[mailIndex].favorite = false;
                    mails[mailIndex].folder = 'trash';
                } else if (mails[mailIndex].important === true) {
                    mails[mailIndex].important = false;
                    mails[mailIndex].folder = 'trash';
                } else {
                    mails[mailIndex].folder = 'trash';
                }
            }
        }
    }
    return [200, mailIDs];
});

mock.onPut("/mails/bulk-spam").reply(request => {
    const {mailIDs} = JSON.parse(request?.data);
    if (mailIDs && Array.isArray(mailIDs)) {
        for (let count = 0; count < mailIDs.length; count++) {
            const mailIndex = mails.findIndex(mail => mailIDs.includes(mail.id));
            if (parseInt(mails[mailIndex].id) === parseInt(mailIDs[count])) {
                mails[mailIndex].folder = 'spam';
            }
        }
    }
    return [200, mailIDs];
});

mock.onPut('/mails/assign-label').reply(request => {
    const {mailIDs, labelIDs} = JSON.parse(request.data);
    mails.forEach(mail => {
        if (mailIDs.includes(mail.id)) {
            labelIDs.forEach(labelID => {
                if (!mail?.labels?.includes(labelID)) {
                    mail.labels.push(parseInt(labelID));
                }
            })
        }
    });
    return [
        200,
        mailIDs, labelIDs
    ]
});

mock.onGet('/mail/detail').reply(request => {
    if (request?.id) {
        const mailDetailIndex = mails.findIndex(mail => parseInt(mail.id) === parseInt(request.id));
        const mailDetail = mails[mailDetailIndex];
        return [
            200, {
                mailDetail: mailDetail
            }
        ];
    }
    return [
        200, {
            mailDetail: []
        }]
});

mock.onGet('/mail/conversation-messages').reply(request => {
    if (request?.id) {
        const mailConversationIndex = mails.findIndex(mail => parseInt(mail.id) === parseInt(request.id));
        const conversation = mails[mailConversationIndex];
        return [
            200, {
                replyThread: conversation.replyThread
            }
        ];
    }
    return [
        200, {
            replyThread: []
        }
    ];
});

mock.onPost('/mail/add-conversation').reply(request => {
    const conversationDetail = JSON.parse(request.data);

    if (conversationDetail.mailID) {
        const conversationIndex = mails.findIndex(mail => parseInt(mail.id) === parseInt(conversationDetail.mailID));
        const conversation = mails[conversationIndex];
        const conversationMessage = conversation.replyThread;
        const newMessage = {
            id: idGenerator(),
            message: conversationDetail.message,
            date: getCustomDate()
        }
        conversationMessage.push(newMessage);
        return [200, {newMessage: newMessage}];
    } else {
        return [200, {
            newMessage: {}
        }]
    }
});

mock.onPut('/mail/delete').reply(request => {
    const {mailID} = JSON.parse(request?.data);
    const mailIndex = mails.findIndex(mail => mailID === mail.id);
    if (mails[mailIndex].folder === 'trash') {
        mails.splice(mailIndex, 1);
    } else {
        if (parseInt(mails[mailIndex].id) === parseInt(mailID)) {
            mails[mailIndex].folder = 'trash';
        }
    }
    return [200, mailID];
});

mock.onPut('/mail/archived').reply(request => {
    const {mailID} = JSON.parse(request?.data);
    const mailIndex = mails.findIndex(mail => mail.id === mailID);
    if (parseInt(mails[mailIndex].id) === parseInt(mailID)) {
        mails[mailIndex].folder = 'archived'
    }
    return [200, mailID];
});

mock.onPut('/mail/report-spam').reply(request => {
    const {mailID} = JSON.parse(request?.data);
    const mailIndex = mails.findIndex(mail => mail.id === mailID);
    if (parseInt(mails[mailIndex].id) === parseInt(mailID)) {
        mails[mailIndex].folder = 'spam';
    }
    return [200, mailID]
});

mock.onPut('/mail/favorite').reply(request => {
    const {mailID} = JSON.parse(request?.data);
    const mailIndex = mails.findIndex(mail => mail.id === mailID);
    if (parseInt(mails[mailIndex].id) === parseInt(mailID)) {
        mails[mailIndex].favorite = true;
    }
    return [200, mailID];
});
