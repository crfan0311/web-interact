import InteractChip from "@interact/Components/Chips/InteractChip";
import { Clear, Close, Delete, Remove } from "@mui/icons-material";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  useTheme,
} from "@mui/material";
import * as React from "react";

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

const CATEGORY_OPTIONS = [
  "Gaming",
  "Humor",
  "Just chatting, commentary",
  "News & politics",
  "Sports",
  "Academic/educational topics",
  "Films, shows & anime",
  "Animation",
  "Travel, vlogs & lifestyle",
];

export default function CampaignCategorySelect({
  data,
  setData,
  categories,
  setCategories,
}) {
  const handleChange = (event) => {
    const newCategories = [...categories, event.target.value];

    if (newCategories.length > 0 && newCategories.length <= 3) {
      setData({ categories: newCategories });
    }
    setCategories(newCategories);
  };

  const handleDelete = (e, value) => {
    e.preventDefault();

    const newCategories = categories.filter((category) => category !== value);
    if (newCategories.length > 0 && newCategories.length <= 3) {
      setData({ categories: newCategories });
    }
    setCategories(newCategories);
  };

  return (
    <Box sx={{ zIndex: 9999 }}>
      <FormControl sx={{ width: 400 }}>
        <Select
          id="campaign-categories"
          value={categories}
          error={categories?.length < 1}
          onChange={handleChange}
          SelectDisplayProps={{
            style: { overflowX: "scroll" },
          }}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Stack direction="row" mr={4} spacing={0.5}>
              {selected.map((value) => (
                <InteractChip
                  key={value}
                  label={value}
                  deleteIcon={<Close sx={{ color: "primary.main" }} />}
                  onDelete={(e) => handleDelete(e, value)}
                />
              ))}
            </Stack>
          )}
          MenuProps={MenuProps}
        >
          {CATEGORY_OPTIONS.map((category) => {
            return (
              <MenuItem
                key={category}
                disabled={categories.includes(category)}
                value={category}
              >
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
