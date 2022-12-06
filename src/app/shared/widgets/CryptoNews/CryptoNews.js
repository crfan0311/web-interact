import React from 'react';
import {Chip, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import JumboRqTabs from "@jumbo/components/JumboReactQuery/JumboRqTabs";
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import NewsItem from "./NewsItem";
import {cryptoNewsService} from "../../../services/cryptonews-services";
import {useTranslation} from "react-i18next";
import {useJumboTheme} from "@jumbo/hooks";
import {Settings} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CryptoNews = () => {
    const {t} = useTranslation();
    const {theme} = useJumboTheme();

    const renderNewsItem = React.useCallback((news) => {
        return <NewsItem item={news}/>
    });
    const [queryOptions, setQueryOptions] = React.useState({
        queryKey: "news",
        queryParams: {category: {id: 1, name: 'All', slug: 'all'}},
        dataKey: "cryptoNews"
    });
    const handleCategory = (category) => {
        setQueryOptions(state => ({...state, queryParams: {category: category}}))
    }
    return (
        <JumboCardQuick
            title={
                <Typography
                    component={"div"}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        [theme.breakpoints.down('md')]: {
                            flexWrap: 'wrap'
                        }
                    }}
                >
                    <Typography
                        variant={"h4"}
                        mb={0}
                        sx={{
                            minWidth: 245,
                            [theme.breakpoints.down('md')]: {
                                minWidth: '100%',
                                marginBottom: 2
                            }
                        }}
                    >
                        {t("widgets.title.cryptoNews")} <Chip size={"small"} label={"20"} color="primary"/>
                    </Typography>

                    <JumboRqTabs
                        service={cryptoNewsService.getNewsCategories}
                        queryOptions={{
                            queryKey: "news-category",
                            dataKey: "newsCategories",
                        }}
                        map={{label: 'name'}}
                        primaryKey={"id"}
                        onChange={handleCategory}
                    />
                </Typography>
            }
            action={
                <JumboDdMenu
                    menuItems={[
                        {icon: <Settings size={20}/>, title: "Setting"},
                        {icon: <VisibilityIcon size={20}/>, title: "See all"}
                    ]}
                />
            }
            headerSx={{
                borderBottom: 1,
                borderBottomColor: 'divider',
                '& .MuiCardHeader-action': {
                    my: -.75
                }
            }}
            wrapperSx={{
                p: 0,
                '&:last-child': {
                    pb: 2
                },
                '& .MuiCollapse-entered:last-child': {
                    '& .MuiListItemButton-root': {
                        borderBottom: 0,
                        borderBottomColor: 'transparent',
                    }
                }
            }}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={585}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <JumboRqList
                    queryOptions={queryOptions}
                    primaryKey={"id"}
                    service={cryptoNewsService.getNews}
                    primary={"id"}
                    renderItem={renderNewsItem}
                    componentElement={"div"}
                    wrapperSx={{pb: 1}}
                />
            </JumboScrollbar>
        </JumboCardQuick>
    );
};

export default CryptoNews;
