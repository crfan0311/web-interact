import * as React from 'react';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/chip-array.txt";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const ChipsArray = () => {
    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Angular'},
        {key: 1, label: 'jQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'React'},
        {key: 4, label: 'Vue.js'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <JumboDemoCard title={"Chips Array"} demoCode={code}>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
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
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>
        </JumboDemoCard>
    );
};
export default ChipsArray;
