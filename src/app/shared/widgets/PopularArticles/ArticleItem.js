import React from 'react';
import {Chip, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Span from "@jumbo/shared/Span";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

const ArticleItem = ({article}) => {
    return (
        <ListItem alignItems='flex-start' sx={{p: theme => theme.spacing(1, 3)}}>
            <ListItemAvatar sx={{mr: 2, overflow: "hidden", borderRadius: 2}}>
                <img width={"140"} height={"105"} style={{verticalAlign: 'middle'}} alt={article.category}
                     src={article.thumb}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography component={"div"} mt={1}>
                        <Chip label={article.category} sx={{color: "text.secondary", mb: 1.25}} size={'small'}/>
                        <Typography variant="h5" sx={{lineHeight: 1.5}}>{article.title}</Typography>
                    </Typography>
                }
                secondary={
                    <Typography component={"div"}>
                        <Stack
                            direction="row"
                            divider={
                                <Divider orientation="vertical" flexItem sx={{height: 13, alignSelf: 'center'}}/>
                            }
                            spacing={1}
                        >
                            <Span sx={{color: 'text.secondary', fontSize: 12}}>{article.date}</Span>
                            <Span sx={{fontSize: 12}}>{article.views} <Span sx={{color: 'text.secondary'}}>views</Span></Span>
                        </Stack>
                    </Typography>
                }
            />
        </ListItem>
    );
};
/* Todo article prop define */
export default ArticleItem;
