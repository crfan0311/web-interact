import mock from "../index";
import {contacts, labels} from "../mock-data/contacts";
import {idGenerator} from "@jumbo/utils";

const getContactLabels = (contactLabels) => {
    if (contactLabels) {
        return labels.filter(label => contactLabels.includes(label.id));
    }
    return [];
};

mock.onGet("/contacts").reply(request => {
    const params = request.params;
    let selectedContacts = [];

    if (params?.category || params?.keywords) {
        let filteredArray = [];
        if (params?.category === "starred") {
            filteredArray = contacts.filter(contact => {
                return (
                    params?.keywords
                        ? (contact.starred && contact.name.search(`/${params.keywords}/i`) !== -1)
                        : contact.starred
                )
            });
        } else if (params.category === "frequent") {
            filteredArray = contacts.filter(contact => {
                return (
                    params?.keywords
                        ? (contact?.frequent && contact.name.search(`/${params.keywords}/i`) !== -1)
                        : contact?.frequent
                );
            })
        } else if (params.category === "trash") {
            filteredArray = contacts.filter(contact => {
                return (
                    params?.keywords
                        ? (contact?.folder === "trash" && contact.name.search(`/${params.keywords}/i`) !== -1)
                        : contact?.folder === "trash"
                );

            });
        } else if (params.category === "label" && params?.id) {
            filteredArray = contacts.filter(contact => {
                    return (
                        params?.keywords
                            ? (!!contact?.labels?.includes(parseInt(params.id)) && contact.name.search(`/${params.keywords}/i`) !== -1)
                            : !!contact?.labels?.includes(parseInt(params.id))
                    );
                }
            )
        } else {
            filteredArray = params?.keywords ? contacts.filter(contact => contact.name.indexOf(`/${params.keywords}/i`) !== -1) : [...contacts];
        }
        selectedContacts.push(...filteredArray);
    }

    for (let count = 0; count < selectedContacts.length; count++) {
        selectedContacts[count] = {
            ...selectedContacts[count],
            labels: getContactLabels(selectedContacts[count].labels)
        };
    }

    if (params?.page >= 0) {
        if (params?.limit) {
            const from = params.page * params.limit;
            const to = params.page > 0 ? (params.limit + from) : params.limit;

            return [
                200,
                {
                    contacts: selectedContacts.slice(from, to),
                    count: selectedContacts.length,
                }
            ];
        }
    } else {
        return [
            200,
            {
                contacts: contacts,
                count: contacts.length,
            }
        ]
    }
});

mock.onGet("/contacts/labels").reply(request => {
    return [
        200, {
            labels: labels,
        }
    ];
});

mock.onPost('/contacts/add-contact').reply(request => {
    const contact = JSON.parse(request.data);
    const newContact = {
        id: idGenerator(),
        profile_pic: "",
        labels: [],
        email: "", // GB
        starred: false,
        frequent: false,
        name: '',
        phone: '',
        designation: '',
        company: '',
        folder: 'contacts',
        ...contact,
    };
    contacts.unshift(newContact);
    return [200, newContact];
});

mock.onPut('/contacts/update-contact').reply(request => {
    const contact = JSON.parse(request.data);
    const contactIndex = contacts.findIndex((item => contact.id === item.id));
    if (contactIndex >= 0) {
        contacts[contactIndex] = contact;
    }
    return [200, contact];
});

mock.onPut('/contacts/bulk-delete').reply(request => {
    const {contactIDs} = JSON.parse(request.data);
    if (contactIDs && Array.isArray(contactIDs)) {
        for (let count = 0; count < contactIDs.length; count++) {
            const contactIndex = contacts.findIndex(user => user.id === contactIDs[count]);
            if (contactIndex >= 0) {
                if (contacts[contactIndex].folder === 'trash') {
                    contacts.splice(contactIndex, 1);
                } else if (contacts[contactIndex].starred === true) {
                    contacts[contactIndex].starred = false;
                    contacts[contactIndex].folder = "trash";
                } else if (contacts[contactIndex].frequent === true) {
                    contacts[contactIndex].frequent = false;
                    contacts[contactIndex].folder = 'trash';
                } else {
                    contacts[contactIndex].folder = 'trash';
                }
            }
        }
    }
    return [200, contactIDs];
});

mock.onDelete('/contacts/delete-contact').reply(request => {
    const params = request.params;
    const contactIndex = contacts.findIndex(item => item?.id === params.id);
    if (contactIndex >= 0) {
        contacts.splice(contactIndex, 1);
    }
    return [200, params.id];
});

mock.onPost('/contacts/add-label').reply(request => {
    const label = JSON.parse(request.data);
    const newLabel = {
        id: idGenerator(),
        ...label,
    };
    labels.unshift(newLabel);
    return [200, newLabel];
});

mock.onPut('/contacts/update-label').reply(request => {
    const label = JSON.parse(request.data);

    const labelIndex = labels.findIndex((item => label.id === item.id));

    if (labelIndex >= 0) {
        labels[labelIndex] = label;
    }

    return [200, label];
});

mock.onDelete('/contacts/delete-label').reply(request => {
    const params = request.params;
    const labelIndex = labels.findIndex(item => item?.id === params.id);
    if (labelIndex >= 0) {
        labels.splice(labelIndex, 1);
        const updatedContacts = contacts.map(contact => {
            if (Array.isArray(contact?.labels)) {
                const labelIndex = contact?.label?.indexOf(params?.id);
                if (labelIndex !== -1) {
                    contact?.label?.slice(labelIndex, 1);
                }
            }
            return contact;
        });

        contacts.splice(0, contacts.length);
        contacts.push(...updatedContacts);
    }
    return [200, params.id];
});

mock.onPut('/contacts/assign-label').reply(request => {
    const {contactIDs, labelIDs} = JSON.parse(request.data);

    contacts.forEach(contact => {
        if (contactIDs.includes(contact.id)) {
            labelIDs.forEach(labelID => {
                if (!contact?.labels?.includes(labelID)) {
                    contact.labels.push(parseInt(labelID));
                }
            })
        }
    });
    return [200, contactIDs, labelIDs];
});
