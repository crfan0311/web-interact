import React, { useEffect } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { auth, db, logout } from "@jumbo/services/auth/firebase/firebase";
import { query, collection, getDocs, where, startAt, endAt, orderBy } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { getDateFromTimestamp } from "app/utils";


const SearchGlobal = ({ sx }) => {
  let navigate = useNavigate();

  const [value, setValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState([]);
  
    useEffect(() => {

        const fetchData = setTimeout( async () => {
            if(value){
              const searchkey = value;
              const searchTerm = searchkey;
              const strlength = searchTerm.length;
              const strFrontCode = searchTerm.slice(0, strlength-1);
              const strEndCode = searchTerm.slice(strlength-1, searchTerm.length);
              const endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
              const q = query(collection(db, "users"), orderBy('name'), where("name", ">=", searchTerm), where("name", "<", endCode));
              const doc = await getDocs(q);
              let tempValues = []
              doc.docs.map((user) => {
                let obj = {
                  title: user.data().name,
                  description: user.data().email,
                  id: user.data().uid,
                  type:'profile'
                }
                tempValues.push(obj)
              })
  
              const searchTermCampaign = searchkey;
              const strlengthCampaign = searchTermCampaign.length;
              const strFrontCodeCampaign = searchTermCampaign.slice(0, strlengthCampaign-1);
              const strEndCodeCampaign = searchTermCampaign.slice(strlengthCampaign-1, searchTermCampaign.length);
              const endCodeCampaign = strFrontCodeCampaign + String.fromCharCode(strEndCodeCampaign.charCodeAt(0) + 1);
              const qCampaign = query(collection(db, "campaigns"), orderBy('header.title'), where("header.title", ">=", searchTermCampaign), where("header.title", "<", endCodeCampaign));
              const docCampaign = await getDocs(qCampaign);
              docCampaign.docs.map((campaing) => {
                let obj = {
                  title: campaing.data().header.title,
                  description: campaing.data().header.tagline1,
                  endDate: getDateFromTimestamp({
                    timestamp: campaing.data().endDate?.seconds
                  }),
                  goal:campaing.data().goal,
                  goalValue:campaing.data().goalValue,
                  username:campaing.data().person.name,
                  id: campaing.data().id,
                  type:'campaign'
                }
                tempValues.push(obj)
              })
              setSearchValue(tempValues)
              console.log(tempValues)
            }
            
        })

        return () => clearTimeout(fetchData)
        
    },[value])

    const changeSearch = (e) => {
      console.log('e', e)
      setValue(e.target.value)
    }

    return (
        <Search sx={sx}>
            <SearchIconWrapper>
                <SearchIcon sx={{marginLeft:"0px"}} />
            </SearchIconWrapper>

            <Autocomplete
                id="country-select-demo"
                sx={{ width: "100%" }}
                loading={true}
                options={searchValue}
                autoHighlight
                freeSolo
                onInputChange={(e) => changeSearch(e)}
                getOptionLabel={(option) => (option?.title)?option?.title:""}
                renderOption={(props, option) => (
                  <>
                  {(option.type === 'profile')?(
                    <Box component="li" {...props} onClick={() => (option.type == "profile")?navigate("/interact/user/"+option.id):"" }>
                      {/* <Link to={"/interact/user/"+option.id}> */}
                      <img
                        loading="lazy"
                        width="30"
                        src={`https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg`}
                        srcSet={`https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg 2x`}
                        alt=""
                      />
                      {" "+option.title}
                      {/* </Link> */}
                      </Box>
                  ):(
                    <Box component="li" {...props} onClick={() => (option.type == "campaign")?"":"" }>
                      {/* <Link to={"/interact/user/"+option.id}> */}
                      <img
                        loading="lazy"
                        width="30"
                        src={`https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg`}
                        srcSet={`https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg 2x`}
                        alt=""
                      />
                      {" "+option.title+" - "+option.endDate+" - "+option.goal+" - "+option.username}
                      </Box>
                  )}
                    </>
                )}
                renderInput={(params) => (
                    <TextField
                    sx={{height:30,padding:"12px 0px 12px 0px",paddingLeft:"0px",borderWidth:0}}
                        {...params}
                        label="Search"
                    />
                )}
            />
        </Search>
    );
};

export default SearchGlobal;
