import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Chip, Stack, TextField } from "@mui/material";

export default function FAQAccordian({
  data,
  setData,
  FAQAnswers,
  setFAQAnswers,
  shouldAllowEdit = true,
}) {
  function handleEditFAQ(e, FAQNumber) {
    const nextValue = e.target.value;

    const nextObj = { ...FAQAnswers, [FAQNumber]: nextValue };
    setFAQAnswers(nextObj);

    if (nextValue?.length > 0) {
      setData({ FAQAnswers: { ...FAQAnswers, [FAQNumber]: nextValue } });
    }
  }

  const FAQs = [
    {
      question: "How long is each interaction?",
      answer: (
        <span>
          All interactions are {data?.interactionDurationTime} minutes except
          for the top 3 on the leaderboard (from the auction) which get longer{" "}
          {data?.interactionTopDurationTime} minute interactions.
        </span>
      ),
    },
    {
      question: "How do I get an interaction?",
      answer: (
        <span>
          2 options: auction or giveaway. A max of 2 interactions*** per user can 
          be acquired from every campaign, one from the auction & one from the 
          giveaway.
          <br></br>💜 Auction: place a bid to be on the leaderboard; if you are
          still on the leaderboard when the campaign ends, you will acquire an
          interaction & pay (you only pay if you win). If you place in the top 3 on the leaderboard, your
          interaction will be longer in duration compared to a normal
          interaction.
          <br></br>💜 Giveaway: Anyone can join the giveaway with a free entry or
          support a creator with a few dollars for a VIP entry that increases
          your chances of winning by 25x.
          <br></br>*** Only 1 interaction is actually carried out, except the 
          duration is longer than a normal interaction (duration becomes
          the sum of the 2 interactions won, meaning if you place in the top 3 
          in the auction & you win in the giveaway, you get a super duper long & epic
          interaction). 
        </span>
      ),
    },
    {
      question: "How does the giveaway work?",
      answer: (
        <span>
          Anyone can join the giveaway with a free entry or support a creator
          with a few dollars for a VIP entry that increases your chances of
          winning by 25x (but first, you have to correctly answer a skill based
          math question). Users can upgrade from the free to VIP entry (only 1
          entry is allowed per user). Winners are drawn at the end of the
          campaign. Each time a user loses, their next giveaway with the same
          creator will have DOUBLE the chances of winning, stacking twice, 4x
          loss multiplier (meaning up to a total 4x chance for a free entry or a
          total 100x chance if it is a VIP entry; this only resets on winning an
          interaction in the giveaway).
        </span>
      ),
    },
    {
      question: "How do the auction & leaderboard work?",
      answer: (
        <span>
          💜 Place a bid to be on the leaderboard or, save time by placing an auto-bid: we'll automatically bid the lowest amount to stay at your 
					  desired rank on the leaderboard until your max bid is reached. If another bidder also 
            wants the same (or higher) rank, your rank could become higher than expected while still being within your max bid; or, if others 
					  bid higher than your max bid, your rank could be lowered.
          <br></br>💜 If you are still on the leaderboard when
          the campaign ends, you will acquire an interaction & pay (you only pay if you win). If you place in
          the top 3 on the leaderboard, your interaction will be 2x or more in
          duration compared to a normal interaction. Only 1 bid is live at a
          time, each new bid replaces your previous one (meaning you can only
          acquire 1 interaction from the auction).
        </span>
      ),
    },
    {
      question: "When can I interact?",
      answer: (
        <span>
          Your interaction will be assigned in the {data?.interactionWindow}{" "}
          weeks after the campaign ends, where auction winners have interactions
          generally scheduled first, with priority over giveaway winners. You
          will be matched with the content creator’s weekly availability, which
          is usually released week-by-week. The only thing a fan can control is
          their own availability. You will be notified if you have an
          interaction during the next week at the latest by midnight on Friday.
        </span>
      ),
    },
    {
      question: "How does scheduling work?",
      answer: (
        <span>
          💜 Your interactions can occur during any week during the date range of 
          interactions, where auction winners have interactions generally scheduled 
          first, with priority over giveaway winners. You will be matched with the 
          content creator’s schedule, which is usually released week-by-week.
          <br></br>💜 Fans can select their availability from Mon-Sun in general 
          as long as they have an account, even before they've acquired any 
          interactions (a minimum of 5 hours of the week have to be selected). 
          Fans also select a preference for time of day (in their timezone), 
          morning (6am to 10:30 am), noon (10:30 am to 1:30 pm), afternoon 
          (1:30pm to 6pm), evening (6pm to 10:30pm), midnight (10:30pm to 1:30am), 
          gremlin time (1:30 am to 6am).
          <br></br>💜 The first week after the campaign (starting Monday) is when 
          interactions will start to be booked.
          <br></br>💜 When the campaign ends, creators are shown the availability 
          of all of their fans continuously (shown X number of fans that are available 
          for each time slot), and release a specific schedule week-by-week on Friday 
          midnight at the latest (except for the first week where creators 
          have until Sunday midnight to lock in a schedule for the next 
          week starting Monday), with the ability to choose how many interactions to do 
          that week. We then allocate the best fitting fans as soon as the creator 
          locks in their schedule for each week.
          <br></br>💜 Fans & creators can reschedule. Rescheduled fans will be added 
          back into the matching algorithm pool & matched accordingly once again.
          <br></br>💜 By the last week, fans that creators are not able to meet are 
          refunded. This means that if a fan or creator reschedules an interaction 
          in the last week, the fan is refunded.
        </span>
      ),
    },
  ];

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Accordion sx={{ flex: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>How it works</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          💜 Content creators start a time-limited campaign (lasting 10 days, by default) with a goal, 
          offering 1-on-1 interactions to fans (eg. play a game, chatting via Discord or Google Meet) 
          that are scheduled in the 10 weeks (by default) after the campaign ends.
          <br></br>💜 Fans try to be selected via the giveaway (with a free entry option) or the 
          auction (be a top bidder on the leaderboard; pricier but a guaranteed interaction). Fans 
          pay immediately for the giveaway; meanwhile in the auction, fans only pay if they win 
          (charged at the end of the campaign).
          <br></br>💜 When new fans try to enter the auction/giveaway, they have to create an account 
          & input their general availability from Mon-Sun (editable on profile).
          <br></br>💜 After the campaign ends, selected fans (winners) will have interactions 
          assigned to them over the interaction window duration, 10 weeks by default (with auction 
          winners having priority)
          <br></br>💜 The content creator selects when they are available week-by-week (creators 
          have to lock in their availability by Friday midnight (your timezone) for the next week, and can 
          sync with their personal Google, Outlook or iCloud calendars); from this, with our 
          matching algorithm, interactions are scheduled.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ flex: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>What can we do in an interaction?</Typography>
            {shouldAllowEdit ? (
              <Chip sx={{ color: "red" }} label="Required" />
            ) : (
              false
            )}
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {shouldAllowEdit ? (
              <TextField
                fullWidth
                multiline
                error={!FAQAnswers[0]?.length}
                value={FAQAnswers[0]}
                onChange={(e) => handleEditFAQ(e, 0)}
                variant="standard"
                InputProps={{ readOnly: !shouldAllowEdit }}
              />
            ) : (
              FAQAnswers[0]
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>How are interactions carried out?</Typography>
            {shouldAllowEdit ? (
              <Chip sx={{ color: "red" }} label="Required" />
            ) : (
              false
            )}
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {shouldAllowEdit ? (
              <TextField
                fullWidth
                multiline
                value={FAQAnswers[1]}
                onChange={(e) => handleEditFAQ(e, 1)}
                variant="standard"
                InputProps={{ readOnly: !shouldAllowEdit }}
              />
            ) : (
              FAQAnswers[1]
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {FAQs?.map((item, key) => {
        return (
          <Accordion sx={{ flex: 1 }} key={key}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>{item.question}</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
