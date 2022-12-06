import React from 'react';
import {Card, CardContent, CardHeader, CircularProgress, Stack, Tooltip, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {useMutation, useQuery} from "react-query";
import {mailServices} from "../../../../../services/mail-services";
import ConversationDetail from "./ConversationDetail";
import IconButton from "@mui/material/IconButton";
import LabelsSelectControl from "../LabelsSelectControl";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, useParams} from "react-router-dom";
import Div from "@jumbo/shared/Div";
import moment from 'moment';
import Chip from "@mui/material/Chip";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import useMailsApp from "../../hooks/useMailsApp";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Span from "@jumbo/shared/Span";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import {useSnackbar} from "notistack";

const MailDetail = ({mailID}) => {
    const {setMailsListRefresh, selectedMails} = useMailsApp();
    const {hideDialog} = useJumboDialog();
    const {enqueueSnackbar} = useSnackbar();
    const {category, id} = useParams();
    const navigate = useNavigate();

    const deleteMailMutation = useMutation(mailServices.deleteMail);

    const mailMoveToTrash = React.useCallback((mailID) => {
        deleteMailMutation.mutate(mailID);
        setMailsListRefresh(true);
        navigate(`/app/mails/${category}`);
    }, []);

    const assignLabelMutation = useMutation(mailServices.assignLabel, {
        onSuccess: () => {
            hideDialog();
            setMailsListRefresh(true);
            enqueueSnackbar('Labels have been applied successfully.', {
                variant: "success"
            });
        }
    });
    const applyLabels = React.useCallback((selectedLabels) => {
        assignLabelMutation.mutate({
            mailIDs: mailID,
            labelIDs: selectedLabels.map(label => label?.id)
        });
        setMailsListRefresh(true);
        navigate(`/app/mails/${category}`);
    }, [selectedMails]);

    const moveArchiveMailMutation = useMutation(mailServices.removeArchivedMail);

    const mailMoveToArchived = React.useCallback((mailID) => {
        moveArchiveMailMutation.mutate(mailID);
        setMailsListRefresh(true);
        navigate(`/app/mails/${category}`);
    }, [setMailsListRefresh]);

    const moveSpamMailMutation = useMutation(mailServices.mailMoveToSpam);
    const mailMoveToSpam = React.useCallback((mailID) => {
        moveSpamMailMutation.mutate(mailID);
        setMailsListRefresh(true);
        navigate(`/app/mails/${category}`);
    }, [setMailsListRefresh]);

    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery(["mailDetail", mailID], () => mailServices.getMailDetail(mailID));
    if (isLoading) {
        return (
            <Div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: theme => theme.spacing(3),
                    m: 'auto',
                }}
            >
                <CircularProgress/>
                <Typography variant={'h6'} color={'text.secondary'} mt={2}>Loading...</Typography>
            </Div>
        )
    }
    if (isError) {
        return error.message;
    }
    const handleNavigateItem = () => {
        if (category && id)
            return navigate(`/app/mails/${category}/${id}`)
        return navigate(`/app/mails/${category}`)
    }
    return (
        <Card>
            <CardHeader
                title={
                    <IconButton onClick={handleNavigateItem} sx={{ml: -1.25}}>
                        <ArrowBackIcon/>
                    </IconButton>
                }
                action={
                    <Stack direction={"row"} sx={{backgroundColor: 'transparent'}}>
                        <Tooltip title={"Report Spam"}>
                            <IconButton onClick={() => mailMoveToSpam(mailID)}>
                                <ReportGmailerrorredIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Archive"}>
                            <IconButton onClick={() => mailMoveToArchived(mailID)}>
                                <ArchiveOutlinedIcon/>
                            </IconButton>
                        </Tooltip>
                        <LabelsSelectControl onDone={applyLabels}/>
                        <Tooltip title={"Delete"}>
                            <IconButton onClick={() => mailMoveToTrash(mailID)}>
                                <DeleteOutlineIcon/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                }
            />
            <CardContent sx={{p: 0}}>
                <JumboScrollbar
                    style={{minHeight: 380}}
                    autoHide autoHideDuration={200}
                    autoHideTimeout={500}
                    autoHeightMin={30}
                >
                    <Div
                        sx={{
                            px: 3,
                            display: 'flex',
                            minHeight: '100%',
                            flexDirection: 'column',
                            minWidth: 0,
                        }}
                    >
                        <Div sx={{mb: 1}}>
                            <Typography variant={"h2"} mb={2}>{data?.mailDetail?.subject}</Typography>
                            <Div
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Avatar src={data?.mailDetail?.from.profile_pic} sx={{width: 44, height: 44}}/>
                                <Div sx={{ml: 2, flex: 1}}>
                                    <Typography
                                        variant={'body1'}
                                        fontSize={16}
                                        sx={{
                                            display: 'flex',
                                            minWidth: 0,
                                            alignItems: 'center'
                                        }}
                                    >
                                        {data?.mailDetail?.from.name}
                                        <Span sx={{ml: 1, fontSize: 13, color: "text.secondary"}}>
                                            {`<${data?.mailDetail?.from.email}>`}
                                        </Span>
                                    </Typography>

                                    <Typography sx={{color: "text.secondary"}}>to me</Typography>
                                </Div>
                            </Div>
                        </Div>
                        <Div sx={{flex: 1}}>
                            <Div
                                sx={{
                                    position: 'relative',
                                    textAlign: 'center',
                                    mb: 2,
                                    '&:after': {
                                        display: 'inline-block',
                                        content: "''",
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'divider',
                                    },
                                }}
                            >
                                <Chip
                                    label={moment(data?.mailDetail?.date).format("DD MMMM")}
                                    variant="outlined"
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        bgcolor: theme => theme.palette.background.paper,
                                        borderColor: 'divider',
                                        borderRadius: 2
                                    }}
                                />
                            </Div>
                            <Typography>{data?.mailDetail?.message}</Typography>
                        </Div>
                        <Div sx={{mt: 1}}>
                            <ConversationDetail conversation={data?.mailDetail}/>
                        </Div>
                    </Div>
                </JumboScrollbar>
            </CardContent>
        </Card>
    );
};

export default MailDetail;
