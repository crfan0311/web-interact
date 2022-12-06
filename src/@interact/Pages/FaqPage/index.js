import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FaqPage = () => {
  const faqList = [
    {
      question: 'How it works?',
      answer: (
        <>
          <p>💜 Content creators start a time-limited campaign (lasting 10 days,
            by default) with a goal, offering 1-on-1 interactions to fans (eg. play a
            game, chatting via Discord or Google Meet) that are scheduled in the 10 weeks
            (by default) after the campaign ends.</p>
          <p>💜 Fans try to be selected via the giveaway (with a free entry option) or the
            auction (be a top bidder on the leaderboard; pricier but a guaranteed interaction).
            Fans pay immediately for the giveaway; meanwhile in the auction, fans only pay if
            they win (charged at the end of the campaign).</p>
          <p>💜 When new fans try to enter the auction/giveaway, they have to create an
            account & input their general availability from Mon-Sun (editable on profile).</p>
          <p>💜 After the campaign ends, selected fans (winners) will have interactions assigned
            to them over the interaction window duration, 10 weeks by default (with auction
            winners having priority)</p>
          <p>💜 The content creator selects when they are available week-by-week (creators have
            to lock in their availability by Friday midnight (in your timezone) for the next week, and can sync
            with their personal Google, Outlook or iCloud calendars); from this, with our matching
            algorithm, interactions are scheduled.</p>
        </>
      ),
      expand: true
    },
    {
      question: 'What can we do in an interaction?',
      answer: (
        <>
          <p>💜 Playing games (from competitive games like Valorant & Chess to…. GeoGuessr
            or Mini Putt in Discord activities)</p>
          <p>💜 Discussing topics fans are passionate about, commentating, and learning from
            each other (fans can screen share: they might show off their own creations, favorite
            clips of your content and ask for advice in your field of expertise… or just anime.
            You could also spice it up with a Try Not to Laugh challenge, watching funny YouTube
            videos via Discord activities).</p>
        </>
      ),
      expand: false
    },
    {
      question: 'How are interactions carried out?',
      answer: (
        <>
          <p>💜 The creator chooses, either via Discord (fans link their Discord accounts;
            when it’s their turn to interact, fans join the creator’s server and are given
            a special role automatically) or Google Meet (unique Google Meet link).</p>
          <p>💜 The content creator may stream the interaction live and/or record it.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'How long is each interaction?',
      answer: (
        <p>It’s decided by the creator of the campaign. All interactions are X minutes except for the
          top 3 on the leaderboard (from the auction) which get longer Y minutes interactions.</p>
      ),
      expand: false
    },
    {
      question: 'How do I get an interaction?',
      answer: (
        <>
          <p><strong>2 options:</strong> auction or giveaway. A max of 2 interactions per user can be
          acquired from every campaign, one from the auction & one from the giveaway; only 1 interaction
          is actually carried out, except the duration is longer than a normal interaction (duration
          would become the sum of the 2 interactions won, meaning if you place in the top 3 in the
          auction & you win in the giveaway, you get a super duper long interaction).</p>
          <p>💜 <strong>Auction:</strong> place a bid to be on the leaderboard or use auto-bid (select a max bid and
            your preferred ranking); if you are still on the leaderboard when the campaign ends, you
            will acquire an interaction. If you place in the top 3 on the leaderboard, your interaction
            will be 2x or more in duration compared to a normal interaction. Only 1 bid is live at a
            time, each new bid replaces your previous one (meaning you can only acquire 1 interaction
            from the auction).</p>
          <p>💜 <strong>Giveaway:</strong> Anyone can join the giveaway with a free entry or support a creator
          with a few dollars for a VIP entry that increases your chances of winning by 25x (but first, you
          have to correctly answer a skill based math question). Users can upgrade from the free to VIP entry
          (only 1 entry is allowed per user). Winners are drawn at the end of the campaign. Each time a user loses,
          their next giveaway with the same creator will have DOUBLE the chances of winning, stacking twice (up to
          4x chance or a total of 100x chance if it is a VIP entry; this only resets on winning an interaction in the giveaway).</p>
        </>
      ),
      expand: false
    },
    {
      question: 'How does the giveaway work?',
      answer: (
        <p>Anyone can join the giveaway with a free entry or support a creator with a few dollars
          for a VIP entry that increases your chances of winning by 25x (but first, you have to
          correctly answer a skill based math question). Users can upgrade from the free to VIP entry
          (only 1 entry is allowed per user). Winners are drawn at the end of the campaign. Each time
          a user loses, their next giveaway with the same creator will have DOUBLE the chances of winning,
          stacking twice, 4x loss multiplier (meaning up to a total 4x chance for a free entry or a total
          100x chance if it is a VIP entry; this only resets on winning an interaction in the giveaway).</p>
      ),
      expand: false
    },
    {
      question: 'How do the auction & leaderboard work?',
      answer: (
        <>
          <p>💜 Place a bid to be on the leaderboard or auto-bid. WWe'll automatically bid the lowest amount to stay at your 
					  desired rank on the leaderboard until your max bid is reached. If another bidder also 
            wants the same (or higher) rank, your rank could become higher than expected while still being within your max bid; or, if others 
					  bid higher than your max bid, your rank could be lowered.</p>
            <p>💜 If you are still on the leaderboard when the campaign ends, you will acquire an
              interaction & your previously selected payment method will be charged. If you place in
              the top 3 on the leaderboard, your interaction will be 2x or more in duration compared
              to a normal interaction. Only 1 bid is live at a time, each new bid replaces your
              previous one (meaning you can only acquire 1 interaction from the auction).</p>
        </>
      ),
      expand: false
    },
    {
      question: 'When can I interact?',
      answer: (
        <>
          <p>Your interaction will be assigned in the 10 weeks after the campaign ends (by default),
            where auction winners have interactions generally scheduled first, with priority over
            giveaway winners. You will be matched with the content creator’s weekly availability,
            which is usually released week-by-week. The only thing a fan can control is their own availability.
            You will be notified if you have an interaction during the next week at the latest by midnight on Friday.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'How does scheduling work?',
      answer: (
        <>
          <p>💜 Your interactions can occur during any week during the date range of interactions,
            where auction winners have interactions generally scheduled first, with priority over giveaway winners.
            You will be matched with the content creator’s schedule, which is usually released week-by-week.</p>
          <p>💜 Fans can select their availability from Mon-Sun in general as long as they have an account,
            even before they've acquired any interactions (a minimum of 5 hours of the week have to be selected).
            Fans also select a preference for time of day (in their timezone), morning (6am to 10:30 am),
            noon (10:30 am to 1:30 pm), afternoon (1:30pm to 6pm), evening (6pm to 10:30pm), midnight
            (10:30pm to 1:30am), gremlin time (1:30 am to 6am).</p>
          <p>💜 The first week after the campaign (starting Monday) is when interactions will start to be booked.</p>
          <p>💜 When the campaign ends, creators are shown the availability of all of their fans continuously
            (shown X number of fans that are available for each time slot), and release a specific schedule week-by-week
            on Friday midnight (11:59 pm, in your timezone) at the latest (except for the first week where creators have until Sunday
            midnight (11:59 pm) to lock in a schedule for the next week starting Monday), with the ability to choose
            how many interactions to do that week. We then allocate the best fitting fans as soon as the creator
            locks in their schedule for each week.</p>
          <p>💜 Fans & creators can reschedule. Rescheduled fans will be added back into the matching
            algorithm pool & matched accordingly once again.</p>
          <p>💜 By the last week, fans that creators are not able to meet are refunded. This means that if a fan or
            creator reschedules an interaction in the last week, the fan is refunded.</p>
        </>
      ),
      expand: false
    },
  ]
  return (
    <Stack maxWidth='821px' alignSelf='center'>
      <Stack flexDirection='column' sx={{ p: 4 }}>
        <Typography
          variant='h1'
          component='h2'
          fontSize='21px'
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '30px',
            letterSpacing: '4px',
            fontWeight: 400,
            color: '#37373C',
            fontFamily: 'Jost, Arial',
            mb: '50px'
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          {faqList?.map((faq, key) => (
            <SpecialAccordion
              key={key}
              question={faq.question}
              answer={faq.answer}
              defaultExpanded={faq.expand}
            />
          ))}
        </Box>
        <br></br>
      </Stack>
    </Stack>
  )
}

const SpecialAccordion = ({ question, answer, defaultExpanded }) => {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        sx={{
          background:
            "linear-gradient(90.32deg, #782FEE -8.69%, #DD00FF 109.93%)",
          color: "primary.contrastText",
          fontWeight: 400,
          fontSize: '18px',
          mt: 1
        }}
        expandIcon={<ExpandMore sx={{ color: "primary.contrastText" }} />}
      >
        {question}
      </AccordionSummary>
      <AccordionDetails>{answer}</AccordionDetails>
    </Accordion>
  );
}

export default FaqPage;