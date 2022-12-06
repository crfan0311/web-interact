import "./Faq.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq({ campaignData }) {
  const FAQs = campaignData?.info?.faq;

  return (
    <Box>
      <Typography variant="h2">FAQ</Typography>
      {FAQs?.map((faq,i) => (
        <FaqElem key={i} faq={faq} />
      ))}
    </Box>
  );
}

export default Faq;

function FaqElem({ faq }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {faq.q}
      </AccordionSummary>
      <AccordionDetails>{faq.a}</AccordionDetails>
    </Accordion>
  );
}
