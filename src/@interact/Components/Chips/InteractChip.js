import { Chip } from "@mui/material";

export default function InteractChip(props) {
  return (
    <Chip
      label={props.label}
      variant="outlined"
      sx={{
        borderRadius: "2px 8px",
        fontSize: 12,
        color: "primary.main",
        borderColor: "primary.main",
        backgroundColor: "transparent",
      }}
      {...props}
    />
  );
}
