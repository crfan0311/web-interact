import React from 'react';
import {mailServices} from "../../../../../services/mail-services";
import useMailsApp from "../../hooks/useMailsApp";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useQuery} from "react-query";
import {useNavigate} from "react-router-dom";

const LabelDropdown = () => {
    const navigate = useNavigate();
    const rqListRef = React.useRef();
    const [label, setLabel] = React.useState();
    const {refreshLabelsList, setLabelsListRefresh} = useMailsApp();

    React.useEffect(() => {
        if (rqListRef?.current && refreshLabelsList) {
            rqListRef.current.refresh();
        }
        if (refreshLabelsList)
            setLabelsListRefresh(false);
    }, [refreshLabelsList]);


    const {data: labelQuery} = useQuery("mail-label-list", mailServices.getLabels);
    return (
        <React.Fragment>
            <FormControl sx={{width: 120}} size={"small"}>
                <InputLabel>Label</InputLabel>
                <Select
                    value={label}
                    label="Label"
                    onChange={(event) => setLabel(event.target.value)}
                >
                    <MenuItem value="">
                        <em>Select Label</em>
                    </MenuItem>
                    {
                        labelQuery?.labels?.map((label, index) => (
                            <MenuItem
                                key={index}
                                value={label}
                                onClick={() => navigate(`/app/mails/label/${label?.id}`)}
                            >
                                {label?.name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </React.Fragment>
    );
};

export default LabelDropdown;
