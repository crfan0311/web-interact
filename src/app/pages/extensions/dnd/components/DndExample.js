import React, {useState} from 'react';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';
import contactsList from './data';
import ContactCell from "./ContactCell";
import {Table, TableBody} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import TableContainer from "@mui/material/TableContainer";
import code from "../demo-code/dnd.txt";

const Contacts = SortableContainer(({contacts}) => {

    return (
        <TableContainer>
            <Table sx={{minWidth: 650}}>
                <TableBody>
                    {contacts.map((contact, index) => (
                        <ContactCell key={index} index={index} contact={contact}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

const DndExample = () => {
    const [contacts, setContacts] = useState(contactsList);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setContacts(arrayMove(contacts, oldIndex, newIndex));
    };

    return (
        <JumboDemoCard
            title={"Drag and drop"}
            demoCode={code}
            wrapperSx={{
                p: 0,
                backgroundColor: 'background.paper',

                '&:last-child': {
                    pb: 0
                }
            }}
        >
            <Contacts contacts={contacts} onSortEnd={onSortEnd} useDragHandle={true}/>
        </JumboDemoCard>
    );
};

export default DndExample;
