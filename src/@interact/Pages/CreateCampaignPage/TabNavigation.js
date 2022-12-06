import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import InteractLogo from "@interact/Images/logo.png";

export function TabNavigation({
  selectedTabIndex,
  setSelectedTabIndex,
  disableNext,
  customErrorMessage,
  MAX_TABS
}) {
  const navigate = useNavigate();
  const Swal = useSwalWrapper();
  const { campaignId } = useParams();

  function handleNextButtonClick() {

    if (disableNext) {
      if (selectedTabIndex === 6) {
        Swal.fire({
          icon: "error",
          text:
            customErrorMessage ||
            "You must link a bank account first.",
        });
      }
      else {
        Swal.fire({
          icon: "error",
          text:
            customErrorMessage ||
            "All form fields are required.",
        });
      }
      return;
    }

    
    setSelectedTabIndex(selectedTabIndex + 1);
    
  }

  function handleBackButtonClick() {
    if (selectedTabIndex > 0) {
      setSelectedTabIndex(selectedTabIndex - 1);
    } else {
      return;
    }
  }

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "flex-end",
        justifySelf: "flex-end",
        my: 4,
        bottom: 20,
      }}
    >
      {selectedTabIndex > 0 ? (
        <InteractFlashyButton onClick={handleBackButtonClick}>
          ← Back
        </InteractFlashyButton>
      ) : null}
      <img alt="logo" src={InteractLogo} width={120} height={"100%"} />
      <InteractFlashyButton onClick={handleNextButtonClick}>
        Next →
      </InteractFlashyButton>
    </Box>
  );
}
