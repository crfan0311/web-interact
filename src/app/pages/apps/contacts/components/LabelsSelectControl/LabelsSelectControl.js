import React from 'react';
import JumboRqSelectPopover from "@jumbo/components/JumboReactQuery/JumboRqSelectPopover";
import {contactService} from "../../../../../services/contact-services";
import {IconButton, Tooltip} from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

const LabelsSelectControl = ({onDone}) => {
    return (
        <JumboRqSelectPopover
            service={contactService.getLabels}
            queryOptions={{queryKey: "labels", dataKey: 'labels'}}
            primaryKey={"id"}
            labelKey={"name"}
            button={{
                component: IconButton,
                label: <Tooltip title={"Labels"}><LabelOutlinedIcon /></Tooltip>
            }}
            resetOnClose={true}
            onDone={onDone}
        />
    );
};
/* Todo onDone prop define */
export default LabelsSelectControl;
