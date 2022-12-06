import React from 'react';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {TextField} from "@mui/material";
import code from "../Chips/demo-code/chip-add-remove.txt";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const ChipsAddRemove = () => {
    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Angular'},
        {key: 1, label: 'jQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'React'},
        {key: 4, label: 'Vue.js'},
    ]);
    const [item, setItem] = React.useState("");

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const addChipItem = (event) => {
        const message = event.target.value.trim();
        if (event.key === 'Enter' && message) {
            const newItem = chipData.concat({
                key: Math.floor(Math.random() * 100),
                label: item
            });
            setChipData(newItem);
            setItem("");
        }
    }
    return (
        <JumboDemoCard title={"Chips Implementation With Input Box"} demoCode={code}>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    alignItems: 'center',
                    p: 1,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    let icon;
                    if (data.label === 'React') {
                        icon = <TagFacesIcon/>;
                    }
                    return (
                        <ListItem key={data.key}>
                            <Chip
                                icon={icon}
                                variant={"outlined"}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
                <TextField
                    variant={"standard"}
                    label={"add more user"}
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    onKeyPress={addChipItem}
                    component="li"
                    sx={{
                        mx: 1
                    }}
                />
            </Paper>
        </JumboDemoCard>
    );
};
export default ChipsAddRemove;
