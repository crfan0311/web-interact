import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Badge, Button, ButtonGroup, FormControlLabel, Stack, Switch} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail"
import code from "../Badges/demo-code/badge-visibility.txt";

const BadgesVisibility = () => {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    }
    return (
        <JumboDemoCard
            title={"Badge Visibility"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0, flexDirection: 'column'}}
        >
            <Stack direction={"row"} spacing={1.5} sx={{mb: 3}}>
                <Badge color="primary" badgeContent={count}>
                    <MailIcon/>
                </Badge>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                    >
                        <RemoveIcon fontSize="small"/>
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <AddIcon fontSize="small"/>
                    </Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"} spacing={0.5}>
                <Badge color="primary" variant="dot" invisible={invisible}>
                    <MailIcon/>
                </Badge>
                <FormControlLabel
                    sx={{color: 'text.primary'}}
                    control={<Switch checked={!invisible} onChange={handleBadgeVisibility}/>}
                    label="Show Badge"
                />
            </Stack>
        </JumboDemoCard>
    );
};

export default BadgesVisibility;
