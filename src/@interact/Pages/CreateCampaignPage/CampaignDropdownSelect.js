import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useAutosaveCampaign from "@interact/Hooks/use-autosave-campaign";
import { FormHelperText } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CampaignDropdownSelect({
  items,
  placeholder,
  defaultValue,
  setData,
}) {
  const [selectedItem, setSelectedItem] = React.useState(defaultValue);
  const handleChange = (event) => {
    setData({ currency: event.target.value });
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 400 }}>
        <Select
          disabled={true} // DISABLED FOR NOW, ADD IN NEAR FUTURE
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          placeholder={placeholder}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          We will be supporting additional currencies in the near future.
        </FormHelperText>
      </FormControl>
    </div>
  );
}
