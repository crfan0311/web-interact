import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const CampaignCreatorFaqPage = () => {
  const faqList = [
    {
      question: 'How it works?',
      answer: (
        <>
          <p>💜 Content creators start a time-limited campaign (lasting 10 days, by default) with
            a goal, offering 1-on-1 interactions to fans (eg. play a game, chatting via Discord or Google
            Meet) that are scheduled in the 10 weeks (by default) after the campaign ends.</p>
          <p>💜 Fans try to be selected via the giveaway (with a free entry option) or the auction (be
            a top bidder on the leaderboard; pricier but a guaranteed interaction). Fans pay immediately
            for the giveaway; meanwhile in the auction, fans only pay if they win (charged at the end of
            the campaign).</p>
          <p>💜 When new fans try to enter the auction/giveaway, they have to create an account & input their
            general availability from Mon-Sun (editable on profile).</p>
          <p>💜 After the campaign ends, selected fans (winners) will have interactions assigned to them over
            the interaction window duration, 10 weeks by default (with auction winners having priority).</p>
          <p>💜 The content creator selects when they are available week-by-week (creators have to lock in their
            availability by Friday midnight (your timezone) for the next week, and can sync with their personal Google,
            Outlook or iCloud calendars); from this, with our matching algorithm, interactions are scheduled.
          </p>
        </>
      ),
      expand: true
    },
    
    {
      question: 'How much money can I make?',
      answer: (
        <>
          <p>💜 Maximize profits with Interact’s hybrid giveaway + auction campaign. Our special automated auction
            bidding allows affluent fans to support the creator much more & gives a 100% success-rate option to fans
            (for fairness’ sake); it's the premium option as auction interactions are scheduled to occur first.
            On the other hand, any fan can enter the giveaway for free or spare a few dollars to buy 1 VIP entry to
            the giveaway (VIP = 25x increased chance, max of 1 per user); </p>
          <p>💜 For a small-medium influencer who has 1000 fans willing to buy the VIP entry for $3 in the giveaway
            for a ~3.5% chance of winning an interaction (assuming 10,000 free entries & 50 interactions in the giveaway):
            $3K. Plus 50 interactions sold in the auction, which can add another $2K to $4K if each interaction sells for
            an average of $40 to $80, respectively. So that’s a total of <span style={{ backgroundColor: 'yellow' }}>$5K to $7K gross raised from one campaign
            selling 100 interactions with 1050 fans supporting you monetarily.</span> If the average interaction 30 minutes,
            that’s around 5 hours a week of fan interaction over 2 months (only one or two interactions a day or one
            evening per week); this is effectively being paid an extra $100 to $140 per hour while streaming/creating
            additional content while getting to meet & chill with your devoted fans. In a year, if a creator launches
            5 of these campaigns that reserve interactions for 2 months at a time (10 months of interactions), that’s{" "}
            <span style={{ backgroundColor: 'yellow' }}>an additional $25K to $35K gross revenue annually.</span>
          </p>
        </>
      ),
      expand: true
    },
    {
      question: 'What happens to fans who don’t get an interaction by the end of the interaction period?',
      answer: (
        <>
          <p>They will be automatically refunded from your connected bank account. This could happen if fans really can't match your available time slots. 
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'What happens if I miss a week during the interaction period?',
      answer: (
        <>
          <p>After the campaign, if you don't lock in your availability for a week, you will just have to complete more interactions per week for the remaining weeks in the interaction period. 
            If you miss the last week, then those fans who have not interacted will automatically be refunded (from your connected bank account).
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'Why interact with fans?',
      answer: (
        <>
          <p>💜 Form a closer bond with your fans who have been in your corner, cheering you on as you continue to
            grow as a creator & a human; everyone also gets to see the fan-interactions produced (or highlights)
            where they can learn more & see a different side to you.</p>
          <p>💜 Meeting your most loyal fans is fun & fulfilling. It’s a wonderful feeling to see their eyes light up.
            These aren’t tedious requests nor formal lessons; there are no restrictions—you have complete
            freedom & control to stop talking to users and kick them at your discretion. Just chill with your
            fans on your own schedule.</p>
          <p>💜 Do it all with minimal effort & complete control: our scheduling algorithm is focused on flexibility
            for the creator; one only has to input their specific availability week-by-week, 3 days in advance
            (on Friday at the latest, week starts on Monday).
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'Why do fans want personal interactions?',
      answer: (
        <>
          <p>
            💜 Most fans can only afford spending a few dollars (can’t afford expensive merch & shipping); but, they
            don’t have a compelling reason to give you some coffee money. Having a chance to personally interact & gain
            recognition from you is an attractive incentive (via the giveaway):
          </p>
          <ul>
            <li>
              Fans like you—as social platforms are so one-sided, fans give you attention weekly or even daily without being
              able to receive any meaningful attention or recognition back. They treat you as someone they trust and/or a relatable
              friend, but have never been able to fulfill that relationship. Thus, fans want to be recognized by you & build a relationship
              by showing off their talents (e.g. best X-main in this game, astute questions & insights in X, musical/artistic talent,
              athleticism, or comedic genius).
            </li>
            <li>
              Fans want to discuss & make their own viewpoints known on subjects they are deeply passionate about, where you’re one of the leaders
              in that subject/community (from anime to politics, from history to frontier tech, from reviews & tier lists to educational animations). 
            </li>
            <li>
              Fame—if a fan’s interaction was interesting, creators can post highlights of it or the interaction is part of a live-streaming/podcasting
              scenario where the fan is recognized by many fellow fans & viewers (react to content together, try not to laugh challenge, etc.
              even if you don’t create that type of content yet, expand your variety—fans love to watch drama & discourse, or just something new).
              Interacting with fans as part of your content is effective & appealing since other fans are envious & garners large popularity (Mr. Beast,
              fans who don’t make money are still ecstatic). Creating fresh content is one of the largest challenges we face, why not add some spice?
            </li>
          </ul>
        </>
      ),
      expand: false
    },
    {
      question: 'How’s Interact different from viewer games?',
      answer: (
        <>
          <p>💜 If you’ve tried viewer games before, it was probably spontaneous (pulling users from stream chat),
            benefiting only users who are paying attention in those few minutes & are able to play at that time.
            Interact helps you & your fans plan ahead, organizing interactions with flexible scheduling (smart algo matching);
            this greatly increases demand since all fans have the opportunity to vie for an interaction via our unique
            auction + giveaway campaigns (moreover, Interact creates FOMO with 5-20 day
            campaigns + incentive to support you with a fun goal).
          </p>
        </>
      ),
      expand: false
    },
    // {
    //   question: 'Basic',
    //   answer: (
    //     <>
    //       <p>💜 Be yourself and be true to your personality; fans want to talk to the real you and want to connect with you.</p>
    //       <p>💜 Drive hype & FOMO: it’s a fan’s only chance for a few months usually. If they miss out they’ll sit in
    //         envy of other lucky fans who get to interact with a content creator they love.</p>
    //     </>
    //   ),
    //   expand: false
    // },
    {
      question: 'When do fans interact?',
      answer: (
        <>
          <p>
            Fans have interactions assigned to them in the 10 weeks (by default, or the Interaction window duration
            of your choice) after the campaign ends, where auction winners have interactions generally scheduled first,
            with priority over giveaway winners. The only thing a fan can control is their own general availability,
            as they wait to get matched with the content creator who locks in their schedule week by week, at the latest
            by Friday midnight for the upcoming week.
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'How does scheduling work?',
      answer: (
        <>
          <p>💜 You can sync with your Google, Outlook or iCloud calendar, where your scheduled events will show up as
            unavailable timeslots automatically on your creator schedule tab (in your Interact profile page);
            after you lock in your availability for a week, your interactions with fans are scheduled
            and can be exported to your calendar.</p>
          <p>💜Fans can select their availability from Mon-Sun in general as long as they have an account, even before
            they've acquired any interactions (a minimum of 5 hours of the week have to be selected).
            Fans also select a preference for time of day (in their timezone), morning (6am to 10:30 am), noon (10:30 am to 1:30 pm),
            afternoon (1:30pm to 6pm), evening (6pm to 10:30pm), midnight (10:30pm to 1:30am), gremlin time (1:30 am to 6am).
          </p>
          <ul>
            <li>The first week after the campaign (starting Monday) is when interactions will start to be booked.</li>
            <li>
              When the campaign ends, creators are shown the availability of all of their fans continuously (shown X number of
              fans that are available for each time slot), and release a specific schedule week-by-week on Friday midnight (11:59 pm, your timezone)
              at the latest (except for the first week where creators have until Sunday midnight (11:59 pm, your timezone) to lock in a schedule for
              the next week starting Monday), with the ability to choose how many interactions to do that week. We then allocate the best
              fitting fans as soon as the creator locks in their schedule for each week.
            </li>
            <li>Fans & creators can reschedule. Rescheduled fans will be added back into the matching algorithm pool & matched accordingly once again.</li>
            <li>
              By the last week, fans that creators are not able to meet are refunded. This means that if a fan or creator reschedules
              an interaction in the last week, the fan is refunded.
            </li>
          </ul>
        </>
      ),
      expand: false
    },
    {
      question: 'How does the giveaway work?',
      answer: (
        <>
          <p>Anyone can join the giveaway with a free entry or support a creator with a few dollars for a VIP entry that increases your
            chances of winning by 25x (but first, you have to correctly answer a skill based math question). Users can upgrade from the
            free to VIP entry (only 1 entry is allowed per user). Winners are drawn at the end of the campaign. Each time a user loses,
            their next giveaway with the same creator will have DOUBLE the chances of winning, stacking twice, 4x loss multiplier
            (meaning up to a total 4x chance for a free entry or a total 100x chance if it is a VIP entry; this only resets on
            winning an interaction in the giveaway).
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'How do the auction & leaderboard work?',
      answer: (
        <>
          <p>Fans place a bid to be on the leaderboard. If the fan is still on the leaderboard when the campaign ends, they’ll win
            an interaction & pay (you only pay if you win). If a fan places in the top 3 on the leaderboard, their interaction will be longer in duration
            compared to a normal interaction.</p>
          <p>They can place a normal bid or make it easier for themselves, so they don't have to bid as many times, with our auto-bid function:</p>
          <ul>
            <li>
            "We'll automatically bid the lowest amount to stay at your 
					  desired rank on the leaderboard until your max bid is reached. If another bidder also 
            wants the same (or higher) rank, your rank could become higher than expected while still being within your max bid; or, if others 
					  bid higher than your max bid, your rank could be lowered."
            </li>
          </ul>
        </>
      ),
      expand: false
    },
    {
      question: 'Why giveaway + auction format?',
      answer: (
        <>
          <p>Both affluent & everyday fans have an opportunity to interact:</p>
          <ol>
            <li>
              The giveaway allows all of your fans—for free or for a few dollars—to support you & achieve the campaign goal
              while getting a chance to interact with a content creator they love.
            </li>
            <li>
              The auction makes it fair by giving your most loyal fans the option to get an interaction with 100% certainty;
              your most loyal fans who want to tell you, their favorite creator, about themselves will save up birthday money / holiday
              wishes for an interaction with you.
            </li>
          </ol>
        </>
      ),
      expand: false
    },
    {
      question: 'What activities can I do with a fan in an interaction?',
      answer: (
        <>
          <p>💜 Playing games (from competitive games like Valorant & Chess to…. GeoGuessr or Mini Putt in Discord activities).</p>
          <p>💜 Discussing topics fans are passionate about, commentating, and learning from each other (fans can screen share: they might
            show off their own creations, favorite clips of your content and ask for advice in your field of expertise… or just anime.
            You could also spice it up with a Try Not to Laugh challenge, watching funny YouTube videos via Discord activities).
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'How are interactions carried out?',
      answer: (
        <>
          <p>💜 Via Discord (fans link their Discord accounts; when it’s their turn to interact, fans join the creator’s server and
            are given a special role automatically) or Google Meet (unique Google Meet link).</p>
          <p>💜 You may also stream it live and/or record it (users have agreed to photo/video release in the terms & conditions.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'Goal',
      answer: (
        <>
          <p>💜 You must create a goal but the goal is non-binding, interactions are still carried out with those who have supported
            you even if the goal is not reached. The goal gives fans incentive to pledge more to help you reach
            your goal in this limited amount of time.<br />You can make the goal content that you already might plan to release soon.
            They can be casual or complex:
          </p>
          <ul>
            <li>I won’t have to sell my kidney to feed myself</li>
            <li>Get RTX 4090, upgrade streaming setup</li>
            <li>I will jump off a plane</li>
            <li>New video with behind-the-scenes & bloopers</li>
          </ul>
          <p>💜 Make a quick video explaining your Interact campaign to fans</p>
          <p>
            For example:<br />Do you want to play a game of Valorant with me, showing off your skills? You definitely deserve to be higher
            ranked but matchmaking has toyed with your heart. Talk to me about your troubles, or ask questions, and I’ll answer your concerns
            while probably roasting you. Get to know me, and let me get to know my awesome fans; it’ll be fun!<br />Of course you’re also getting
            us closer to the goal of $5,000 where I’ll eat a spoonful of Da Bomb; the spice definitely exaggerated, I’m not worried.
            This campaign ends on December 10th, so don’t miss out! These are the only interactions we’ll have for the next few months.
            Go to interact.vip/cool
          </p>
        </>
      ),
      expand: false
    },
    {
      question: 'How do fees work?',
      answer: (
        <>
          <p>💜 We only make money when you do. We’re not making money from any fees; we instead share costs with you;
            Interact only takes a cut after all of the referral, email, & payment processing fees.</p>
          <p>💜 We take our 17%-2% commission after sharing the fees (including payment processing of 2.9% + 0.30c, foreign exchange
            fees of 2%+ when fans pay with their local currency, etc.). Your commission rate is reduced drastically as you create
            more campaigns; if you have over $1000 in cumulative sales on Interact (each campaign adds to it), the rate is 16% (silver rank):
          </p>
          <ul>
            <li>Bronze, $0 = 17%</li>
            <li>Silver, $1K = 16%</li>
            <li>Gold, $10K = 14%</li>
            <li>Platinum, $100K = 10%</li>
            <li>Diamond, $1M = 2%.</li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='/images/pages/landing/all-creator-rank.png' width='300px' alt='' />
        </>
      ),
      expand: false
    },
    {
      question: 'When do you get paid?',
      answer: (
        <>
          <p>Within 3 business days after the campaign is completed.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'What URLs do old campaigns use when I launch a new campaign?',
      answer: (
        <>
          <p>If you launch a new campaign and you want to use the same URL as before,
          like <a href='https://www.interact.vip/pewdiepie'>www.interact.vip/pewdiepie</a> the old campaign will be assigned an URL consisting
          of your username and a number, like <a href='https://www.interact.vip/c/username_1'>www.interact.vip/c/username_1</a>, where the number
          denotes your 1st, 2nd, 3rd, etc. campaigns. You may only reserve 1 URL at a time.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'Protection against bots/abusers?',
      answer: (
        <>
          <p>💜 The creator can ban & unban (lifetime) any participant of their campaigns from their current and future campaigns.
            You can also delete any comment on your campaigns (with the ability to also ban the user who made that comment).
            A ban button is next to users on the ‘supporters’ tab of your campaign and also on the user profile page when you
            have scheduled interactions with a fan.</p>
          <p>💜 Users have to AUTHORIZE a payment method to bid or enter the giveaway (meaning their payment method is valid
            via a small void transaction usually).</p>
          <p>💜 Every fan has until the end of the drop to bid & enter the giveaway instead of a first-come-first-serve basis.</p>
        </>
      ),
      expand: false
    },
    {
      question: 'When can I start the next campaign?',
      answer: (
        <>
          <p>
            You can start a draft for your next campaign at any time.
            But you cannot put a scheduled start time sooner than the end time of any previously submitted campaigns' 
            interaction duration window end time (you have to finish up the interactions from previous campaigns first).
          </p>
        </>
      ),
      expand: false
    }
  ]

  return (
    <Stack maxWidth='821px' alignSelf='center'>
      <Stack flexDirection='column' sx={{ p: 4 }}>
        <Typography
          variant='h1'
          component='h2'
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
          FAQ for creators
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

export default CampaignCreatorFaqPage;