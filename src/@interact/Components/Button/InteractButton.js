import { Button } from "@mui/material";

export default function InteractButton({
  onClick,
  children,
  sx,
  disabled,
  variant = "outlined",
}) {
  return (
    <Button
      disableElevation
      variant={variant}
      onClick={onClick}
      sx={{
        color: "primary.main",
        borderColor: "primary.main",
        textTransform: "none",
        borderRadius: "3px 12.69px",
        borderWidth: 1,
        ...sx,
      }}
      type="submit"
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
