import { InfoCircleOutlined } from "@ant-design/icons";

import {
  Button,
  Container,
  TextField,
  Input,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FAQAccordian from "./FAQAccordian";
import CustomEditor from "./CustomEditor";
import Scheduler from "../../Components/Scheduler/Scheduler";
import { ClassNames } from "@emotion/react";
import React from "react";

const defaultDescriptionText =
  "DEFAULT TEXT: I’d love to talk to, laugh together, & learn more about my most loyal fans—don’t miss out, this is your only opportunity for the next 3 months. Don’t regret it when you watch others appearing on stream/podcast/uploaded videos.";
const defaultEmailDescriptionText = "What are your thoughts?";
const subheaderUploadVideo = (
  <p>
    press anywhere to upload <br /> accepts *.mp4 *.wav and url
  </p>
);

const subheaderInteractCalculator = (
  <p>
    How much time every week, on average, would you like to spend connecting
    with fans? <br />
    We recommend at least 30 min., minimum of 15 min.
  </p>
);

const descriptionRaffle = "Minimum $2; we recommend < $5";
const descriptionAuction = "Minimum $10";
const subheaderYourSchedule = (
  <p>
    Your non-availability. <br /> Fans will select their general availabilities
    from Mon-Sun based on knowledge of your non-availability inputted here.
  </p>
);

export default function GridContents() {
  return (
    <div>
      <Grid sx={{ paddingTop: 5, paddingBottom: 5 }} container spacing={3}>
        <Grid spacing={0} alignItems="center" justify="center" item xs={12}>
          <Card sx={{ height: "15vh" }}>
            <CardHeader
              titleTypographyProps={{ fontWeight: 500, color: "#782FEE" }}
              subheaderTypographyProps={{ fontWeight: 400 }}
              title="Interact Calculator"
              subheader={subheaderInteractCalculator}
            />
            <CardContent align="right">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                type="number"
                label="Enter Quantity"
              />
              <br />
              Hours total: 16 hr 0 min
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid sx={{ paddingTop: 5 }} container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardHeader
              titleTypographyProps={{ fontWeight: 500, color: "#782FEE" }}
              title="Auction"
            />
            <CardContent>
              <Typography component="div" variant="p">
                No. of interactions to bid
              </Typography>
              <Typography align="right">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="number"
                  label="Enter Quantity"
                />
              </Typography>

              <Typography component="div" variant="p">
                Minimum bid price
                <Typography variant="subtitle2">
                  {descriptionAuction}
                </Typography>
              </Typography>
              <Typography align="right">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="number"
                  label="Enter Price"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader
              titleTypographyProps={{ fontWeight: 500, color: "#782FEE" }}
              title="Raffle"
            />
            <CardContent>
              <Typography component="div" variant="p">
                No. of interactions to draw
              </Typography>
              <Typography align="right">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="number"
                  label="Enter Quantity"
                />
              </Typography>

              <Typography component="div" variant="p">
                Raffle ticket price
                <br />
                <Typography variant="subtitle2">{descriptionRaffle}</Typography>
              </Typography>
              <Typography align="right">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="number"
                  label="Enter Price"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid sx={{ paddingTop: 5, paddingBottom: 5 }} container spacing={3}>
        <Grid spacing={0} alignItems="center" justify="center" item xs={12}>
          <Card sx={{ height: "15vh" }}>
            <CardHeader
              titleTypographyProps={{ fontWeight: 500, color: "#782FEE" }}
              subheaderTypographyProps={{ fontWeight: 400 }}
              align="center"
              title="Upload a video"
              subheader={subheaderUploadVideo}
            />
            <CardContent align="center">
              <Typography>Or youtube link:</Typography>
              <Input placeholder="youtube.com/y=ads43" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              titleTypographyProps={{
                fontWeight: 500,
                color: "#782FEE",
              }}
              subheaderTypographyProps={{ color: "gray", align: "center" }}
              title="Description"
              subheader=""
            />

            <Container>
              <TextField
                sx={{ pb: 2 }}
                fullWidth
                label="One line description"
                id="fullWidth"
                paddingBottom="10"
              />

              <CustomEditor descriptionText={defaultDescriptionText} />
              <br />
              <Button variant="contained">Comment</Button>
              {/* figure out how to make this border rounded */}
              {/* i tried to make this button purple in mui but it was a pain */}
            </Container>
            <br />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              titleTypographyProps={{
                fontWeight: 500,
                color: "#782FEE",
              }}
              subheaderTypographyProps={{ color: "gray", align: "center" }}
              title="Your Schedule"
              subheader=""
            />
            <Container>
              <Scheduler />
              <Typography align="justify" variant="h6">
                {subheaderYourSchedule}
              </Typography>
            </Container>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              titleTypographyProps={{
                fontWeight: 500,
                color: "#782FEE",
              }}
              subheaderTypographyProps={{ color: "gray" }}
              title="Email Snippet"
              subheader="(attached in every email sent to your followers &amp; fans)"
            />
            <Container>
              <CustomEditor descriptionText={defaultEmailDescriptionText} />
              <br />
              <Button variant="contained">Comment</Button>
            </Container>
            <br />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              titleTypographyProps={{
                fontWeight: 500,
                color: "#782FEE",
              }}
              subheaderTypographyProps={{ color: "gray", align: "center" }}
              title="FAQ"
              subheader="Please fill out your preselected FAQ that have not been answered"
            />
            <Container>
              <FAQAccordian />
            </Container>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
