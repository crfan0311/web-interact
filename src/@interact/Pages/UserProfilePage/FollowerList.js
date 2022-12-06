import "./UserProfilePage.css";
import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactModal from "react-modal";
import InteractButton from "@interact/Components/Button/InteractButton";
import useCurrentUser from "@interact/Hooks/use-current-user";
import { FollowButton } from "../CampaignPage/Stats";
import { fetchUsersByIds } from "../../../firebase";

export default function FollowerList({ open, setOpen, followers = [] }) {
  // console.log("profilefollowers",followers);
  const [followerlist, setFollowerList] = useState([]);
  useEffect(async ()  => {
    if(followers.length > 0) {
      setFollowerList(await fetchUsersByIds(followers));
    }else {
      setFollowerList([]);
    }
    console.log("Followers",followerlist);
  }, [open])
  return (
    <ReactModal
      className="modal"
      isOpen={open}
      contentLabel="Minimal Modal Example"
      style={{ width: 100 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #000",
        }}
      >
        <div style={{ fontSize: 20 }}>Followers</div>
        <div onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
          X
        </div>
      </div>
      <div style={{ overflowY: "scroll", height: "calc(100% - 30px)" }}>
        {followerlist.map((x, i) => (
          <FollowerListItem key={i} data={x} />
        ))}
      </div>
    </ReactModal>
  );
}

function FollowerListItem(data) {
  const { user } = useCurrentUser();
  const defaultPhotoURL = "https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png";
  return (
    <div
      style={{
        display: "flex",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        borderBottom: "1px solid #aaa",
      }}
    >
      <img
        src={data?.data?.photoURL ? data?.data?.photoURL : defaultPhotoURL}
        style={{
          objectFit: "cover",
          width: 50,
          height: 50,
          borderRadius: 1000,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: 20 }}>
          <div style={{ fontSize: 20 }}>{data?.data?.name}</div>
          <div style={{ fontSize: 12, color: "#777" }}>
            {data?.data?.contributions ? `Contributed $${data.data.contributions} total` : ''}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FollowButton user={user} targetUser={data.data}/>
          <MoreVertIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}

export { FollowerListItem };
