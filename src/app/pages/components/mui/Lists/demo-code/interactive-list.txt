import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {styled} from "@mui/material/styles";
import Div from "@jumbo/shared/Div";
import code from "../Lists/demo-code/interactive-list.txt";
import {
    Avatar,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const generate = (element) => {
    return [0, 1, 2, 3].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    )
};
const Demo = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const InteractiveList = () => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <JumboDemoCard title={"Interactive List"} demoCode={code}>
            <Div sx={{flexGrow: 1, maxWidth: 752}}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={(event) => setDense(event.target.checked)}
                            />
                        }
                        label="Enable dense"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={(event) => setSecondary(event.target.checked)}
                            />
                        }
                        label="Enable secondary text"
                    />
                </FormGroup>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{mt: 4, mb: 2}} variant="h5" component="div">
                            Text only
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{mt: 4, mb: 2}} variant="h5" component="div">
                            Icon with text
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{mt: 4, mb: 2}} variant="h5" component="div">
                            Avatar with text
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{mt: 4, mb: 2}} variant="h5" component="div">
                            Avatar with text and icon
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon/>
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};

export default InteractiveList;
