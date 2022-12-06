import React from 'react';
import JumboRqSelectPopover from "@jumbo/components/JumboReactQuery/JumboRqSelectPopover";
import {mailServices} from "../../../../../services/mail-services";
import {IconButton, Tooltip} from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

const LabelsSelectControl = ({onDone}) => {
    return (
        <JumboRqSelectPopover
            service={mailServices.getLabels}
            queryOptions={{
                queryKey: "mail-assign-label",
                dataKey: "labels"
            }}
            primaryKey={"id"}
            labelKey={'name'}
            button={{
                component: IconButton,
                label: (
                    <Tooltip title={"Labels"}>
                        <LabelOutlinedIcon />
                    </Tooltip>
                )
            }}
            resetOnClose={true}
            onDone={onDone}
        />
    );
};
/* Todo onSave prop define */
export default LabelsSelectControl;
