import axios from "./config";

const contactService = {};

contactService.getContacts = async ({queryKey}) => {
    const {page, limit, queryParams} = queryKey[queryKey.length-1];
    const { data } = await axios.get("/contacts", {
        params: {
            page: page,
            limit: limit,
            ...queryParams,
        }
    });
    return data;
};

contactService.getLabels = async () => {
    const { data } = await axios.get("/contacts/labels");
    return data;
};

contactService.add = async (contact) => {
    const {data} = await axios.post("/contacts/add-contact", contact);
    return data;
};

contactService.update = async (contact) => {
    const {data} = await axios.put("/contacts/update-contact", contact);
    return data;
};

contactService.delete = async (contact) => {
    const {data} = await axios.delete("/contacts/delete-contact", {
        params: {id: contact.id}
    });
    return data;
};

contactService.deleteMultiple = async (selectedIDs) => {
    const {data} = await axios.put("/contacts/bulk-delete", {
        contactIDs: selectedIDs
    });
    return data;
};

contactService.addLabel = async (label) => {
    const {data} = await axios.post("/contacts/add-label", label);
    return data;
};

contactService.updateLabel = async (label) => {
    const {data} = await axios.put("/contacts/update-label", label);
    return data;
};

contactService.deleteLabel = async (label) => {
    const {data} = await axios.delete("/contacts/delete-label", {
        params: {id: label.id}
    });
    return data;
};

contactService.assignLabel = async (params) => {
    const {data} = await axios.put("/contacts/assign-label", {
        contactIDs: params?.contactIDs ?? [],
        labelIDs: params?.labelIDs ?? []
    });
    return data;
};

export {contactService};
