import "./Socials.css";
import {
  Facebook,
  Instagram,
  Link,
  Reddit,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

function Socials({ type }) {
  // console.log(type)
  let logo = "iconoir:youtube";
  let link = "youtube.com";
  switch (type) {
    case "youtube":
      logo = "iconoir:youtube";
      link = "https://www.youtube.com/";
      break;
    case "twitch":
      logo = "iconoir:twitch";
      link = "https://www.twitch.com";
      break;
    case "discord":
      logo = "iconoir:discord";
      link = "https://www.discord.com";
      break;
    case "tiktok":
      logo = "iconoir:tiktok";
      link = "https://www.tiktok.com";
      break;
    case "twitter":
      logo = "iconoir:twitter";
      link = "https://www.twitter.com";
      break;
    case "instagram":
      logo = "iconoir:instagram";
      link = "https://www.instagram.com";
      break;
    case "facebook":
      logo = "iconoir:facebook";
      link = "https://www.facebook.com";
      break;
    case "hyperlink":
      logo = "iconoir:link";
      link = "https://www.google.com";
      break;
    case "reddit":
      logo = "iconoir:reddit";
      link = "https://www.reddit.com";
      break;
    default:
      logo = "iconoir:link";
      link = "https://www.youtube.com";
      break;
  }

  return (
    <IconButton
      elevation={1}
      sx={{ color: "primary.light", ml: 0.5 }}
      onClick={() => {
        window.open(link);
      }}
    >
      <Icon icon={logo} />
    </IconButton>
  );
}

export default Socials;
