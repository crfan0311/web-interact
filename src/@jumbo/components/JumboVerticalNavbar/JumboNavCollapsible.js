import React from 'react';
import {useLocation} from "react-router-dom";
import {isUrlInChildren} from "@jumbo/utils/urlHelpers";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import {ArrowWrapper} from "@jumbo/components/JumboVerticalNavbar/style";
import JumboNavIdentifier from "@jumbo/components/JumboVerticalNavbar/JumboNavIdentifier";
import {Popover} from "@mui/material";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import {SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useTranslation} from "react-i18next";

const menuBefore = {
    left: 0,
    top: 0,
    content: `''`,
    position: 'absolute',
    display: 'inline-block',
    width: '4px',
    height: '100%',
    backgroundColor: 'transparent'
};

const JumboNavCollapsible = ({item, translate}) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openPopover = Boolean(anchorEl);
    const {t} = useTranslation();

    const location = useLocation();
    const [previousPath, setPreviousPath] = React.useState(location.pathname);

    const {sidebarOptions} = useJumboLayoutSidebar();
    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    const handlePopoverOpen = React.useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handlePopoverClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    React.useEffect(() => {
        if (previousPath !== location.pathname) {
            setPreviousPath(location.pathname);
        }
    }, [item, location.pathname, previousPath]);

    React.useEffect(() => {
        setOpen(isUrlInChildren(item, previousPath));
    }, [item, previousPath]);

    const label = React.useMemo(() => {
        return translate ? t(item.label) : item.label;
    }, [item, translate, t]);

    if (!item)
        return null;

    const subMenus = (item.children && item.children.length > 0) ? item.children : null;

    return (
        <React.Fragment>
            <ListItemButton
                component={"li"}
                onClick={() => setOpen(!open)}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{
                    p: theme => !isMiniAndClosed ? theme.spacing(1, 3.75) : 0,
                    borderRadius: isMiniAndClosed ? '50%' : '0 24px 24px 0',
                    margin: isMiniAndClosed ? '0 auto' : '0',
                    ...(isMiniAndClosed) ? {width: 40, height: 40, justifyContent: 'center'} : {},
                    overflow: 'hidden',
                    '&:hover': {
                        color: theme => theme.palette.nav.action.hover,
                        backgroundColor: theme => theme.palette.nav.background.hover,
                        ...(!isMiniAndClosed) ? {'&::before': {
                                ...menuBefore,
                                backgroundColor: theme => theme.palette.nav.tick.hover,
                            }} : {}
                    },
                    ...(!isMiniAndClosed) ? {'&::before': menuBefore} : {},
                }}
            >
                {
                    !isMiniAndClosed &&
                    <ArrowWrapper>
                        {
                            open ? <ArrowDropDownIcon/> : <ArrowRightIcon/>
                        }
                    </ArrowWrapper>
                }
                {
                    item.icon &&
                    <ListItemIcon sx={{minWidth: isMiniAndClosed ? 20 : 32, color: 'inherit'}}>
                        {item.icon}
                    </ListItemIcon>
                }
                {
                    !isMiniAndClosed &&
                    <ListItemText
                        primary={label}
                        sx={{
                            m: 0,
                            '& .MuiTypography-root': {
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }
                        }}
                    />
                }
            </ListItemButton>
            {
                subMenus && !isMiniAndClosed &&
                <Collapse component={"li"} in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {
                            subMenus.map((child, index) => {
                                const eventKey = new Date().valueOf();
                                return <JumboNavIdentifier item={child} key={`${eventKey}${index}`} isNested={true}/>
                            })
                        }
                    </List>
                </Collapse>
            }
            {
                subMenus && isMiniAndClosed &&
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={openPopover}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <List disablePadding>
                        {
                            subMenus.map((child, index) => {
                                const eventKey = new Date().valueOf();
                                return <JumboNavIdentifier item={child} key={`${eventKey}${index}`} isNested={true}/>
                            })
                        }
                    </List>
                </Popover>
            }
        </React.Fragment>
    )
};

export default JumboNavCollapsible;
