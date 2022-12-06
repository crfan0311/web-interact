import React from "react";
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LockResetIcon from '@mui/icons-material/LockReset';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import ListIcon from '@mui/icons-material/List';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GridViewIcon from '@mui/icons-material/GridView';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

const menus = [
    {
        label: 'sidebar.menu.home',
        type: "section",
        children: [
            {
                uri: "/dashboards/misc",
                label: 'sidebar.menuItem.misc',
                type: "nav-item",
                icon: <GraphicEqIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/crypto",
                label: 'sidebar.menuItem.crypto',
                type: "nav-item",
                icon: <CurrencyExchangeOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/listing",
                label: 'sidebar.menuItem.listing',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/crm",
                label: 'sidebar.menuItem.crm',
                type: "nav-item",
                icon: <SupportAgentOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/intranet",
                label: 'sidebar.menuItem.intranet',
                type: "nav-item",
                icon: <PieChartOutlineOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/ecommerce",
                label: 'sidebar.menuItem.eCommerce',
                type: "nav-item",
                icon: <ShoppingCartOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/dashboards/news",
                label: 'sidebar.menuItem.news',
                type: "nav-item",
                icon: <NewspaperIcon sx={{fontSize: 20}}/>
            }
        ]
    },

    {
        label: 'sidebar.menu.apps',
        type: "section",
        children: [
            {
                uri: "/app/chats",
                label: 'sidebar.menuItem.chat',
                type: "nav-item",
                icon: <ChatOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/app/contacts/all",
                label: 'sidebar.menuItem.contacts',
                type: "nav-item",
                icon: <ContactsOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/app/mails/inbox",
                label: 'sidebar.menuItem.mail',
                type: "nav-item",
                icon: <EmailOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'sidebar.menu.cards',
        type: "section",
        children: [
            {
                uri: "/widgets",
                label: 'sidebar.menuItem.widgets',
                type: "nav-item",
                icon: <WidgetsOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/metrics",
                label: 'sidebar.menuItem.metrics',
                type: "nav-item",
                icon: <LeaderboardOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'sidebar.menu.components',
        type: "section",
        children: [
            {
                label: 'sidebar.menuItem.mui',
                type: "collapsible",
                icon: <SourceOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/mui/accordions",
                        label: "sidebar.menuItem.accordions",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/alerts",
                        label: "sidebar.menuItem.alerts",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/autocomplete",
                        label: "sidebar.menuItem.autoComplete",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/avatars",
                        label: "sidebar.menuItem.avatars",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/backdrop",
                        label: "sidebar.menuItem.backdrops",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/badges",
                        label: "sidebar.menuItem.badges",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/bottom-navigation",
                        label: "sidebar.menuItem.bottomNavigations",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/breadcrumbs",
                        label: "sidebar.menuItem.breadcrumbs",
                        type: "nav-item",
                    },
                    {
                        uri: "/mui/button-group",
                        label: "sidebar.menuItem.buttonGroup",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/buttons",
                        label: "sidebar.menuItem.buttons",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/checkbox",
                        label: "sidebar.menuItem.checkboxes",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/chips",
                        label: "sidebar.menuItem.chip",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/click-away-listener",
                        label: "sidebar.menuItem.clickAwayListeners",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/container",
                        label: "sidebar.menuItem.container",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/dialogs",
                        label: "sidebar.menuItem.dialogs",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/dividers",
                        label: "sidebar.menuItem.dividers",
                        type: "nav-item",
                    },
                    {
                        uri: "/mui/grid",
                        label: "sidebar.menuItem.grids",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/images-list",
                        label: "sidebar.menuItem.imageList",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/links",
                        label: "sidebar.menuItem.links",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/lists",
                        label: "sidebar.menuItem.lists",
                        type: "nav-item",
                    },
                    {
                        uri: "/mui/masonry",
                        label: "sidebar.menuItem.masonry",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/menus",
                        label: "sidebar.menuItem.menus",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/modal",
                        label: "sidebar.menuItem.modal",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/paginations",
                        label: "sidebar.menuItem.pagination",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/papers",
                        label: "sidebar.menuItem.paper",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/pickers",
                        label: "sidebar.menuItem.pickers",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/popovers",
                        label: "sidebar.menuItem.popovers",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/poppers",
                        label: "sidebar.menuItem.popper",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/portals",
                        label: "sidebar.menuItem.portal",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/progress",
                        label: "sidebar.menuItem.progress",
                        type: "nav-item",
                    },
                    {
                        uri: "/mui/radio-buttons",
                        label: "sidebar.menuItem.radioButtons",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/rating",
                        label: "sidebar.menuItem.rating",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/selects",
                        label: "sidebar.menuItem.selects",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/skeletons",
                        label: "sidebar.menuItem.skeleton",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/slider",
                        label: "sidebar.menuItem.sliders",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/snackbars",
                        label: "sidebar.menuItem.snackbars",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/speed-dial",
                        label: "sidebar.menuItem.speedDial",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/stacks",
                        label: "sidebar.menuItem.stack",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/steppers",
                        label: "sidebar.menuItem.steppers",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/switches",
                        label: "sidebar.menuItem.switches",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/tabs",
                        label: "sidebar.menuItem.tabs",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/text-fields",
                        label: "sidebar.menuItem.textFields",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/textarea-autosize",
                        label: "sidebar.menuItem.textareaAutosize",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/timeline",
                        label: "sidebar.menuItem.timeline",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/toggle-buttons",
                        label: "sidebar.menuItem.toggleButtons",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/tooltips",
                        label: "sidebar.menuItem.tooltips",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/transfers-list",
                        label: "sidebar.menuItem.transferList",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/transitions",
                        label: "sidebar.menuItem.transitions",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/tree-view",
                        label: "sidebar.menuItem.treeViews",
                        type: "nav-item"
                    },
                    {
                        uri: "/mui/typography",
                        label: "sidebar.menuItem.typography",
                        type: "nav-item"
                    },
                ]
            },
        ]
    },
    {

        label: 'sidebar.menu.extensions',
        type: "section",
        children: [
            {
                label: 'sidebar.menu.editor',
                type: "collapsible",
                icon: <ModeEditOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/extensions/editors/ck",
                        label: 'sidebar.menuItem.ckEditor',
                        type: "nav-item"
                    },
                    {
                        uri: "/extensions/editors/wysiwyg",
                        label: 'sidebar.menuItem.wysiwygEditor',
                        type: "nav-item"
                    }
                ]
            },
            {
                uri: "/extensions/dnd",
                label: 'sidebar.menuItem.dnd',
                type: "nav-item",
                icon: <DragIndicatorIcon sx={{fontSize: 20}}/>,
            },
            {
                uri: "/extensions/dropzone",
                label: 'sidebar.menuItem.dropzone',
                type: "nav-item",
                icon: <BackupOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/extensions/sweet-alert",
                label: 'sidebar.menuItem.sweetAlerts',
                type: "nav-item",
                icon: <WarningAmberIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'sidebar.menu.modules',
        type: "section",
        children: [
            {
                label: 'sidebar.menu.calendar',
                type: "collapsible",
                icon: <EventNoteIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/modules/calendars/basic",
                        label: 'sidebar.menuItem.basic',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/calendars/culture",
                        label: 'sidebar.menuItem.cultures',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/calendars/popup",
                        label: 'sidebar.menuItem.popup',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/calendars/rendering",
                        label: 'sidebar.menuItem.rendering',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/calendars/selectable",
                        label: 'sidebar.menuItem.selectable',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/calendars/timeslot",
                        label: 'sidebar.menuItem.timeSlots',
                        type: "nav-item"
                    }
                ]
            },
            {
                label: 'sidebar.menu.charts',
                type: "collapsible",
                icon: <InsertChartOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/modules/charts/line",
                        label: 'sidebar.menuItem.line',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/bar",
                        label: 'sidebar.menuItem.bar',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/area",
                        label: 'sidebar.menuItem.area',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/composed",
                        label: 'sidebar.menuItem.composed',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/pie",
                        label: 'sidebar.menuItem.pie',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/scatter",
                        label: 'sidebar.menuItem.scatter',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/radial",
                        label: 'sidebar.menuItem.radial',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/radar",
                        label: 'sidebar.menuItem.radar',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/charts/treemap",
                        label: 'sidebar.menuItem.treeMap',
                        type: "nav-item"
                    }
                ]
            },
            {
                label: 'sidebar.menu.maps',
                type: "collapsible",
                icon: <MyLocationIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/modules/maps/simple",
                        label: 'sidebar.menuItem.simpleMap',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/styled",
                        label: 'sidebar.menuItem.styledMap',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/geo-location",
                        label: 'sidebar.menuItem.geoLocation',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/directions",
                        label: 'sidebar.menuItem.directional',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/overlay",
                        label: 'sidebar.menuItem.overlay',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/kml",
                        label: 'sidebar.menuItem.kmLayer',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/popup-info",
                        label: 'sidebar.menuItem.popupInfo',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/street-view",
                        label: 'sidebar.menuItem.streetView',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/drawing",
                        label: 'sidebar.menuItem.drawing',
                        type: "nav-item"
                    },
                    {
                        uri: "/modules/maps/clustering",
                        label: 'sidebar.menuItem.clustering',
                        type: "nav-item"
                    }
                ]
            }
        ]
    },
    {
        label: 'sidebar.menu.authPages',
        type: "section",
        children: [
            {
                label: 'sidebar.menu.login',
                type: "collapsible",
                icon: <LoginIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/auth-pages/login-1",
                        label: 'sidebar.menuItem.login1',
                        type: "nav-item",
                        target: "_blank"
                    },
                    {
                        uri: "/auth-pages/login-2",
                        label: 'sidebar.menuItem.login2',
                        type: "nav-item",
                        target: "_blank",
                    }
                ]
            },
            {
                label: 'sidebar.menu.signup',
                type: "collapsible",
                icon: <PersonAddAltIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri: "/auth-pages/signup-1",
                        label: 'sidebar.menuItem.signup1',
                        type: "nav-item",
                        target: "_blank"
                    },
                    {
                        uri: "/auth-pages/signup-2",
                        label: 'sidebar.menuItem.signup2',
                        type: "nav-item",
                        target: "_blank"
                    }
                ]
            },
            {
                uri: "/auth-pages/forgot-password",
                label: 'sidebar.menuItem.forgetPassword',
                type: "nav-item",
                icon: <PasswordOutlinedIcon sx={{fontSize: 20}}/>,
                target: "_blank"
            },
            {
                uri: "/auth-pages/reset-password",
                label: 'sidebar.menuItem.resetPassword',
                type: "nav-item",
                icon: <LockResetIcon sx={{fontSize: 20}}/>,
                target: "_blank"
            }
        ]
    },
    {
        label: 'sidebar.menu.extraPages',
        type: "section",
        children: [
            {
                uri: "/extra-pages/about-us",
                label: 'sidebar.menuItem.aboutUs',
                type: "nav-item",
                icon: <InfoOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
                uri: "/extra-pages/contact-us",
                label: 'sidebar.menuItem.contactUs',
                type: "nav-item",
                icon: <ContactPageOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
                uri: "/extra-pages/call-outs",
                label: 'sidebar.menuItem.callOuts',
                type: "nav-item",
                icon: <CallEndIcon sx={{fontSize: 20}}/>,
            },
            {
                uri: "/extra-pages/pricing-plan",
                label: 'sidebar.menuItem.pricePlan',
                type: "nav-item",
                icon: <CreditCardIcon sx={{fontSize: 20}}/>,
            },
            {
                uri: "/extra-pages/404",
                label: 'sidebar.menuItem.error400',
                type: "nav-item",
                icon: <ErrorOutlineIcon sx={{fontSize: 20}}/>,
                target: "_blank",
            },
            {
                uri: "/extra-pages/500",
                label: 'sidebar.menuItem.error500',
                type: "nav-item",
                icon: <RunningWithErrorsOutlinedIcon sx={{fontSize: 20}}/>,
                target: "_blank"
            },
            {
                uri: "/extra-pages/lock-screen",
                label: 'sidebar.menuItem.lockScreen',
                type: "nav-item",
                icon: <ScreenLockRotationIcon sx={{fontSize: 20}}/>,
                target: "_blank"
            },
        ]
    },
    {
        label: 'sidebar.menu.user',
        type: "section",
        children: [
            {
                uri: "/user/profile",
                label: 'sidebar.menuItem.profile',
                type: "nav-item",
                icon: <AccountBoxOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/user/social-wall",
                label: 'sidebar.menuItem.socialWall',
                type: "nav-item",
                icon: <StreamOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'sidebar.menu.listView',
        type: "section",
        children: [
            {

                uri: "/list-views/projects",
                label: 'sidebar.menuItem.projects',
                type: "nav-item",
                icon: <ViewListOutlinedIcon sx={{fontSize: 20}}/>
            },

            {
                uri: "/list-views/users",
                label: 'sidebar.menuItem.users',
                type: "nav-item",
                icon: <ListIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'sidebar.menu.gridView',
        type: "section",
        children: [
            {
                uri: "/grid-views/projects",
                label: 'sidebar.menuItem.projects',
                type: "nav-item",
                icon: <GridViewIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/grid-views/users",
                label: 'sidebar.menuItem.users',
                type: "nav-item",
                icon: <Grid3x3OutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    }
];

export default menus;
