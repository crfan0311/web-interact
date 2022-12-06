import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import {
  Stack,
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LandingPage.css";
import { useJumboLayoutSidebar, useJumboLayoutHeader } from "@jumbo/hooks";

const GradientRoundedBox = styled(Box)`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 27px 7px rgba(120, 47, 238, 0.2169);
  border-radius: ${(props) => props.radius ?? "45px"};
  overflow: hidden;
`;

const RoundedBox = styled(Box)`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 27px 7px rgba(120, 47, 238, 0.2169);
  overflow: hidden;
`;

const VideoContainer = styled(RoundedBox)`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 56.4%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Image = styled("img")`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const Card = styled(GradientRoundedBox)`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    background: ${(props) =>
      props.reverse
        ? "linear-gradient(130deg, transparent 0% 33%, #DD00FF 66%, #782FEE 83.5%, #DD00FF 100%)"
        : "linear-gradient(130deg, transparent 0% 33%, #782FEE 66%, #DD00FF 83.5%, #782FEE 100%)"};
    background-position: 0% 0%;
    transition: background-position 350ms ease;
    background-size: 300% 300%;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;
  }
  &:hover:before {
    background-position: 100% 100%;
    transform: scale(1.08, 1.03);
  }
  &:hover {
    .landing-gradient-text {
      background: transparent;
      color: white;
      -webkit-text-fill-color: white;
    }
    .landing-subtitle {
      visibility: visible;
      opacity: 1;
    }
    .landing-orange-text {
      color: #ffd700;
    }
    .landing-white-heart {
      opacity: 1;
    }
  }
  & > div {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  ${({ animated }) =>
    animated &&
    `
    animation: glow 3.21s linear infinite;
  `}
  @keyframes glow {
    0% {
      box-shadow: 0px 0px 8px 2px rgba(120, 47, 238, 0.2169);
    }
    50% {
      box-shadow: 0px 0px 47px 17px rgba(120, 47, 238, 0.2169);
    }
    100% {
      box-shadow: 0px 0px 8px 2px rgba(120, 47, 238, 0.2169);
    }
  }
`;
/*
const FeatureCard = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={4} data-aos={data?.aos}>
      <GradientRoundedBox sx={{ alignItems: "center", p: 4, height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '175px', '& > img': { maxWidth: '95px' } }}>
          <img src={data?.icon} alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: "27px",
            fontWeight: 600,
            color: "#4D4657",
            textAlign: "center",
            lineHeight: '120%',
            minHeight: '97px'
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: "21px",
            fontWeight: 400,
            textAlign: "center",
            color: '#70677E',
            lineHeight: "120%"
          }}
        >
          {data.description}
        </Typography>
      </GradientRoundedBox>
    </Grid>
  )
};
*/
const AnimateCard = ({ radius, padding, children, reverse, animated }) => {
  return (
    <Card
      radius={radius ?? "0px"}
      sx={{ padding: padding ?? "10px" }}
      reverse={reverse}
      animated={animated}
    >
      <Box>{children}</Box>
    </Card>
  );
};

const CampaignButtonGroup = ({ title, goToPage }) => {
  return (
    <Stack direction="column" alignItems="center">
      <InteractFlashyButton
        radius={"3px 17px"}
        aos="fade-up"
        onClick={() => goToPage()}
      >
        <Typography
          sx={{
            fontSize: "19.69px",
            py: 0,
            px: 2,
            fontWeight: 500,
            lineHeight: "151.02%",
            color: "#FFEDF8",
          }}
        >
          {title}
        </Typography>
      </InteractFlashyButton>
      <Typography
        sx={{
          mt: 2.69,
          mb: 0,
          fontSize: "15px",
          textAlign: "center",
          color: "#A79BBB",
          lineHeight: "23px",
          maxWidth: "369px",
          "& > a": {
            color: "#782FEE",
            transition: "color 0.2s linear",
          },
          "& > a:hover": {
            color: "#DD00FF",
          },
        }}
      >
        Get started for free, create a campaign in 15 minutes;{" "}
        <a href="mailto:andrew@interact.vip?Subject=Help me set things up on Interact">
          send us an email
        </a>
        &nbsp;with your social media link & we’ll be&nbsp;happy to personally
        help you set things up
      </Typography>
    </Stack>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    //CheckSideBar(),
    <Stack maxWidth={"1115.69px"} alignSelf="center">
      <Stack direction="column" alignItems="center" width={"100%"}>
        <Stack width={"100%"} sx={{ mt: 9.269 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4} md={4}>
              <AnimateCard
                padding="52.69px"
                radius="5px 27px"
                data-aos="fade-up"
                animated="true"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-orange-text"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#FF5C00",
                        lineHeight: "120%",
                      }}
                    >
                      Delight&nbsp;
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-gradient-text"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        lineHeight: "120%",
                      }}
                    >
                      your fans with 1-on-1 interactions.
                    </Typography>
                    <Box sx={{ mt: 1.69 }} className="landing-subtitle">
                      <Typography
                        className="landing-gradient-text"
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        Interact makes it easy to offer your fans what they want
                        most: to
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        game{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        /
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        chat{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        & finally be
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        recognized
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        —forming a 2-way relationship.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ "& img": { width: "50px" }, display: "flex" }}>
                    <img src="images/icons/logo.png" alt="" />
                  </Box>
                </Box>
              </AnimateCard>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <GradientRoundedBox sx={{ display: "flex" }} radius="5px 27px">
                <Image src="images/pages/landing/delight.jpg" alt="" />
              </GradientRoundedBox>
            </Grid>
          </Grid>
        </Stack>

        <Stack sx={{ mt: 8.69, mb: 10 }}>
          <CampaignButtonGroup
            title="Start a campaign"
            goToPage={() => navigate("/a/what-is-interact")}
          />
        </Stack>
        <GradientRoundedBox
          width={"100%"}
          sx={{ mt: -2 }}
          radius="27px"
          data-aos="zoom-out-left"
        >
          <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Image src="images/pages/landing/reward-left.jpeg" alt="" />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <AnimateCard padding="52.69px" radius="0px" reverse="true">
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-gradient-text"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        lineHeight: "120%",
                      }}
                    >
                      Your time is scarce; make it
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#FF5C00",
                        lineHeight: "120%",
                      }}
                      className="landing-orange-text"
                    >
                      {" "}
                      worthwhile
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-gradient-text"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        lineHeight: "120%",
                      }}
                    >
                      .
                    </Typography>

                    <Box sx={{ mt: 2 }} className="landing-subtitle">
                      <Typography
                        className="landing-gradient-text"
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        Tap into this
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        rising demand{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        &{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        maximize your income
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        . Ex: offer 50 thirty minute interactions in a 10 day
                        campaign, earning
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        $5K-$7K{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        with 1000 fans mostly spending a few $; then interact
                        with the winners for
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        3 hours a week{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        over 2 months.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3.69, width: "57px", position: "relative" }}>
                    <img
                      src="images/pages/landing/heart-round.png"
                      alt=""
                      className="landing-heart"
                    />
                    <img
                      src="images/pages/landing/white-heart-round.png"
                      alt=""
                      className="landing-white-heart"
                    />
                  </Box>
                </Box>
              </AnimateCard>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Image src="images/pages/landing/reward-right.jpg" alt="" />
            </Grid>
          </Grid>
        </GradientRoundedBox>

        <Stack width={"100%"} sx={{ mt: 10 }}>
          <Grid container spacing={6} data-aos="fade-right">
            <Grid item xs={12} sm={8} md={8}>
              <GradientRoundedBox sx={{ display: "flex" }} radius="5px 27px">
                <Image src="images/pages/landing/loyal-fans.jpg" alt="" />
              </GradientRoundedBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4} data-aos="fade-down">
              <AnimateCard padding="52.69px" radius="27px 5px">
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    pl: "3px",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "right",
                    }}
                    className="landing-title"
                  >
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-gradient-text"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        lineHeight: "120%",
                      }}
                    >
                      Total control &{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        fontSize: "21px",
                        fontWeight: 800,
                        color: "#FF5C00",
                        lineHeight: "169%",
                      }}
                      className="landing-orange-text"
                    >
                      intuitive{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      className="landing-gradient-text"
                      sx={{
                        fontSize: "21px",
                        fontWeight: 800,
                        lineHeight: "120%",
                      }}
                    >
                      scheduling.
                    </Typography>
                    <Box sx={{ mt: 1 }} className="landing-subtitle">
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        After the campaign, choose your availability every week
                        (we'll automatically match fans).
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        Seamlessly mesh with your schedule
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        with 2-way calendar sync (Google, Apple, iCloud). +You
                        can
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        delete comments
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        &
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FFD700",
                          lineHeight: "115%",
                        }}
                      >
                        {" "}
                        ban&nbsp;users
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className="landing-gradient-text"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "115%",
                        }}
                      >
                        .
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      "& img": { width: "47.69px" },
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    <img
                      src="/images/pages/landing/calendar-icon.png"
                      alt=""
                      className="landing-heart"
                    />
                    <img
                      src="/images/pages/landing/white-calendar-icon.png"
                      alt=""
                      className="landing-white-heart"
                    />
                  </Box>
                </Box>
              </AnimateCard>
            </Grid>
          </Grid>
        </Stack>

        <Box sx={{ width: "76.9%" }}>
          <VideoContainer mt={12} mb={10}>
            <iframe
              title="youtube"
              src="https://www.youtube-nocookie.com/embed/sIeYrczzcvc?rel=0"
              allowFullScreen
            />
          </VideoContainer>
        </Box>

        <Stack width={"100%"}>
          <Grid container spacing={4.469}>
            <Grid item xs={12} sm={6} md={4} data-aos={"flip-left"}>
              <GradientRoundedBox
                sx={{
                  alignItems: "center",
                  p: 4.5,
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "175px",
                    "& > img": { maxWidth: "90px" },
                  }}
                >
                  <img src={"images/pages/landing/heart-book.svg"} alt="" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#4D4657",
                    lineHeight: "110%",
                    minHeight: "65px",
                  }}
                  component="label"
                >
                  You’re a
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#782FEE",
                      lineHeight: "110%",
                    }}
                    component="span"
                  >
                    {" "}
                    key part of{" "}
                  </Typography>
                  their weekly/daily
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#782FEE",
                      lineHeight: "110%",
                    }}
                    component="span"
                  >
                    {" "}
                    routine
                  </Typography>
                  .
                </Typography>
                <Typography
                  sx={{
                    mt: 0,
                    fontSize: "15px",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "#70677E",
                    lineHeight: "120%",
                  }}
                >
                  Show some love to these fans who have
                  <Typography
                    sx={{
                      mt: 0,
                      fontSize: "15px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "#782FEE",
                      lineHeight: "120%",
                    }}
                    component="span"
                  >
                    {" "}
                    grown with you not only as a creator, but as a person
                  </Typography>
                  . Meanwhile, you’re getting fresh content with new people to
                  spice things up.
                </Typography>
              </GradientRoundedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={4} data-aos={"flip-right"}>
              <GradientRoundedBox
                sx={{ alignItems: "center", p: 4.5, height: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "175px",
                    "& > img": { maxWidth: "100px" },
                  }}
                >
                  <img
                    width="175"
                    height="175"
                    src={"images/pages/landing/gavel.svg"}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#4D4657",
                    textAlign: "center",
                    lineHeight: "110%",
                    minHeight: "65px",
                  }}
                  component="label"
                >
                  Auction: the
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#782FEE",
                      textAlign: "center",
                      lineHeight: "110%",
                    }}
                    component="span"
                  >
                    {" "}
                    top bidders{" "}
                  </Typography>
                  on the leaderboard win.
                </Typography>
                <Typography
                  sx={{
                    mt: 0,
                    fontSize: "15px",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "#70677E",
                    lineHeight: "120%",
                  }}
                >
                  at the end of the campaign. If you choose to offer 20
                  interactions, the top 20 bidders win. Thus,
                  <Typography
                    sx={{
                      mt: 0,
                      fontSize: "15px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "#782FEE",
                      lineHeight: "120%",
                    }}
                    component="span"
                  >
                    {" "}
                    more affluent fans{" "}
                  </Typography>
                  can bid for a
                  <Typography
                    sx={{
                      mt: 0,
                      fontSize: "15px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "#782FEE",
                      lineHeight: "120%",
                    }}
                    component="span"
                  >
                    {" "}
                    guaranteed interaction.
                  </Typography>
                </Typography>
              </GradientRoundedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={4} data-aos={"flip-left"}>
              <GradientRoundedBox
                sx={{ alignItems: "center", p: 4.5, height: "100%", pb: 8 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "175px",
                    "& > img": { maxWidth: "100px" },
                  }}
                >
                  <img
                    width="175"
                    height="175"
                    src={"images/pages/landing/giftbox.svg"}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#4D4657",
                    textAlign: "center",
                    lineHeight: "110%",
                    minHeight: "65px",
                  }}
                  component="label"
                >
                  Giveaway: fans can enter for
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#782FEE",
                      textAlign: "center",
                      lineHeight: "110%",
                    }}
                    component="span"
                  >
                    {" "}
                    free/a few $
                  </Typography>
                  .
                </Typography>
                <Typography
                  sx={{
                    mt: 0,
                    fontSize: "15px",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "#70677E",
                    lineHeight: "120%",
                  }}
                  component="label"
                >
                  All fans can get a chance to interact: they can enter the
                  giveaway for free, or
                  <Typography
                    sx={{
                      mt: 0,
                      fontSize: "15px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "#782FEE",
                      lineHeight: "120%",
                    }}
                    component="span"
                  >
                    {" "}
                    spare some pocket change{" "}
                  </Typography>
                  for a
                  <Typography
                    sx={{
                      mt: 0,
                      fontSize: "15px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "#782FEE",
                      lineHeight: "120%",
                    }}
                    component="span"
                  >
                    {" "}
                    VIP entry{" "}
                  </Typography>
                  (a couple dollars for a 25x increased chance).
                </Typography>
              </GradientRoundedBox>
            </Grid>
          </Grid>
        </Stack>

        <Stack sx={{ mb: 10, mt: 10 }}>
          <CampaignButtonGroup
            title="Create a campaign now!"
            goToPage={() => navigate("/a/what-is-interact")}
          />
        </Stack>

        <Stack width={"100%"} sx={{ mt: 0 }}>
          <Grid container spacing={10.3}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: "21px",
                  color: "#4D4657",
                  lineHeight: "17px",
                }}
              >
                Together, you can:
                <Box className="landing-game-border" sx={{ pl: 4, mt: 4 }}>
                  <Box data-aos="fade-right" data-aos-duration="1000">
                    <Typography
                      fontSize={"17px"}
                      color={"#70677E"}
                      fontWeight={"400"}
                      sx={{
                        "& > :not(.MuiTypography-body1)": {
                          fontWeight: 700,
                          color: "#782FEE",
                        },
                      }}
                    >
                      <span>Play games: </span>
                      <Typography
                        variant="body1"
                        component="span"
                        fontSize={"17px"}
                        color={"#3D3649"}
                        fontWeight={"400"}
                      >
                        F
                      </Typography>
                      rom competitive games like Valorant & Chess to....
                      GeoGuessr or mini putt in Discord activities
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "12px" }} data-aos="fade-left">
                    <Typography
                      fontSize={"17px"}
                      color={"#70677E"}
                      fontWeight={"400"}
                      sx={{ "& > span": { fontWeight: 700, color: "#782FEE" } }}
                    >
                      <span>Have interesting discussions: </span>
                      Discussing topics fans are passionate about, commentating,
                      and learning from each other (fans can screen share: they
                      might show off their own creations, favorite clips of your
                      content and ask for advice in your field of expertise… or
                      just anime. You could also spice it up with a Try Not to
                      Laugh challenge, watching funny YouTube videos via Discord
                      activities)
                    </Typography>
                  </Box>

                  <Box sx={{ mt: "12px" }} data-aos="fade-down">
                    <Typography
                      fontSize={"17px"}
                      color={"#70677E"}
                      fontWeight={"700"}
                      sx={{
                        backgroundcolor: "primary",
                        backgroundImage: `linear-gradient(90.29deg, #782FEE 0.11%, #DD00FF 9.16%)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      No more 1-way parasocial weirdness, get to know each other
                      & have fun!
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={5.3269}
              sx={{
                display: "flex",
                alignItems: "center",
                "& img": {
                  boxShadow: "0px 0px 27px 7px rgba(120, 47, 238, 0.2769)",
                  borderRadius: "45px",
                },
              }}
            >
              <img
                src="images/pages/landing/together.png"
                alt=""
                loading="lazy"
                className="landing-w-100"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </Grid>
          </Grid>
        </Stack>

        <Stack width={"100%"} sx={{ mt: 12 }}>
          <Accordion
            className="landing-accordion"
            sx={{
              px: 4,
              py: 3,
              boxShadow: "0px 0px 27px 7px rgba(120, 47, 238, 0.2169)",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={
                <ArrowDropUpRoundedIcon
                  color="primary"
                  sx={{ fontSize: "45px" }}
                />
              }
            >
              <Typography
                fontSize={"27px"}
                color={"#782FEE"}
                fontWeight={"700"}
              >
                How it works
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box sx={{ width: { sm: "45%" } }}>
                  <Typography
                    fontSize={"16px"}
                    sx={{ "& > span": { fontWeight: 700 } }}
                  >
                    💜&nbsp;Content creators{" "}
                    <span>start a time-limited campaign </span>
                    (lasting 10 days, by default) with a goal, offering{" "}
                    <span>1 on 1 interactions to fans </span>(eg. play a game,
                    chatting <span>via Discord or Google Meet</span>) that are{" "}
                    <span>
                      scheduled in the 10 weeks (by default) after the campaign
                      ends.
                    </span>
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    sx={{ "& > span": { fontWeight: 700 } }}
                  >
                    💜&nbsp;Fans try to be selected via the{" "}
                    <span>giveaway </span>(with a<span> free entry option</span>
                    ) or the <span>auction </span>(be a top bidder on the
                    leaderboard; pricier but a guaranteed interaction). Fans pay
                    immediately for the giveaway; meanwhile in the auction, fans
                    only pay if they win (charged at the end of the campaign).
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography fontSize={"16px"}>
                    💜&nbsp;When new fans try to enter the auction/giveaway,
                    they have to create an account & input their general
                    availability from Mon-Sun (editable on profile).
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    sx={{ "& > span": { fontWeight: 700 } }}
                  >
                    💜&nbsp;After the campaign ends,
                    <span>
                      {" "}
                      selected fans (winners) will have interactions assigned to
                      them over the interaction window duration,{" "}
                    </span>
                    10 weeks by default (with auction winners having priority).
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    sx={{ "& > span": { fontWeight: 700 } }}
                  >
                    💜&nbsp;The content creator
                    <span> selects when they are available week-by-week </span>
                    (creators have to lock in their availability by Friday
                    midnight for the next week, and can
                    <span>
                      {" "}
                      sync with their personal Google, Outlook or iCloud
                      calendars
                    </span>
                    ); from this,
                    <span>
                      with our matching algorithm, interactions are scheduled.
                    </span>
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <GradientRoundedBox
          sx={{ mt: 10, mb: 10, display: "flex", overflow: "hidden" }}
        >
          <Box
            sx={{
              position: "relative",
              width: "41.69%",
              "& img": {
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
              },
            }}
          >
            <img
              src="images/pages/landing/interactearn.jpeg"
              alt=""
              className="landing-h-100"
            />
          </Box>
          <Box sx={{ p: 6, flex: 1 }}>
            <Typography fontSize={"27px"} color={"#782FEE"} fontWeight={"700"}>
              What can you earn with interact?
            </Typography>
            <Typography
              mt="23px"
              fontSize={"19px"}
              fontWeight={"400"}
              color={"#4D4657"}
              data-aos="fade-down"
              sx={{ "& > span": { fontWeight: 600 } }}
            >
              Earn<span> $5K to $7K per campaign </span>
              with 1000 fans who mostly spend a few dollars, while you offer ~50
              hours of interactions.
            </Typography>
            <Typography
              mt={1}
              fontSize={"17px"}
              color={"#70677E"}
              fontWeight={"400"}
              data-aos="fade-down"
              sx={{ "& > span": { fontWeight: 500 } }}
            >
              Campaigns reserve interactions for 2 months usually (a few hours
              of getting to know fans each week), so 5 campaigns = 10 months of
              interactions, generating
              <span> $25K to $35K</span> annually.
            </Typography>
            <Typography
              mt={4}
              fontSize={"19px"}
              fontWeight={"500"}
              color={"#4D4657"}
              data-aos="fade-up-left"
              sx={{
                "& > span": { textDecoration: "underline", fontWeight: 700 },
              }}
            >
              <span>Extra income</span> with&nbsp;
              <span>no opportunity cost</span>
            </Typography>
            <Typography
              mt={1}
              mb={1.21}
              fontSize={"17px"}
              color={"#70677E"}
              data-aos="fade-down"
            >
              You’ll get fresh content for your stream, and your streaming
              schedule can stay the same without additional hours. You can even
              make use of highlights from interactions to spice up new videos.
            </Typography>
          </Box>
        </GradientRoundedBox>

        <Stack sx={{ pt: 0, mb: 9 }}>
          <CampaignButtonGroup
            title="o(*￣▽￣*)ブ&nbsp; Create a draft"
            goToPage={() => navigate("/a/what-is-interact")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
