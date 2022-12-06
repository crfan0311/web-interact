import ScheduleSelector from "react-schedule-selector";
import { useState } from "react";
import MeetingBlocks from "./MeetingBlocks";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { InfoCircleOutlined } from "@ant-design/icons";
import TimezoneSelect from "react-timezone-select";
import InteractButton from "@interact/Components/Button/InteractButton";
export default function CreatorSchedules() {
  const [schedule, setSchedule] = useState([]);
  const handleChange = (newSchedule) => {
    setSchedule(newSchedule);
  };

  const test = 1;
  let interactions = [];

  return (
    <div>
      Up Next
      <div
        className="horizontalScroll"
        style={{
          display: "flex",
          overflowX: "scroll",
          padding: 20,
          marginLeft: -120,
          paddingLeft: 140,
          marginRight: -20,
        }}
      >
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
        <MeetingBlocks />
      </div>
      <br /> <br />
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 20 }}>Book upcoming interactions</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid #ccc",
            paddingTop: 30,
          }}
        >
          <div style={{ width: "50%" }}>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                marginTop: -10,
                paddingBottom: 15,
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <ChevronLeftIcon fontSize="large" />
              <div>Aug 16 - Aug 22</div>
              <ChevronRightIcon fontSize="large" />
            </div>
            <ScheduleSelector
              selection={schedule}
              renderDateLabel={(date) => {
                return (
                  <div>
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        date.getDay()
                      ]
                    }
                  </div>
                );
              }}
              startDate={new Date("15 August 2022")}
              numDays={7}
              minTime={0}
              maxTime={24}
              rowGap="1px"
              columnGap="1px"
              hourlyChunks={4}
              onChange={handleChange}
              unselectedColor="#ddd"
              renderTimeLabel={(time) => {
                const hour = time.getHours();
                const timestring = (
                  hour == 0 ? "12" : (((hour - 1) % 12) + 1).toString()
                ).concat(hour < 11 ? "am" : "pm");
                return <div>{time.getMinutes() == 0 ? timestring : null}</div>;
              }}
              renderDateCell={(datetime, selected, refSetter) => {
                // check datetime in user dates
                return (
                  <div
                    ref={refSetter}
                    style={
                      selected
                        ? { backgroundColor: "#782fee" }
                        : { backgroundColor: "#ddd" }
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {test}
                    </div>
                  </div>
                );
              }}
              selectedColor="#782fee"
            />
          </div>

          <div style={{ padding: 20, paddingLeft: 40, width: "50%" }}>
            <div style={{ maxWidth: 300, paddingTop: 20, paddingBottom: 20 }}>
              Time zone:
              <TimezoneSelect value={0} onChange={0} />
            </div>

            <div style={{ fontSize: 17, fontWeight: "bold" }}>
              Schedule upcomimg interactions by selecting times you are
              available on the left
            </div>
            <div style={{ fontSize: 15 }}>
              Our algorithm will automatically figure out the maximum number of
              interactions you can do in those times. Then, press confirm below
              and we will send out the interactions for you!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <InfoCircleOutlined style={{ fontSize: 15, color: "gray" }} />
              <div style={{ fontSize: 12, paddingLeft: 10, color: "#777" }}>
                There might be less interactions scheduled than expected because
                some fans will not be available for a full interaction even if
                they're available for a lesser period of time (e.g. a fan is
                available from 2:15-2:30 but their interaction is 30 minutes).
                {/* If multiple parties bid the same price, the ones who bid first will have higher rankings */}
              </div>
            </div>

            <br />
            <div
              style={{
                paddingBottom: 25,
                fontSize: 20,
                paddingTop: 0,
                textDecoration: "underline",
              }}
            >
              <span style={{ color: "#782fee", fontWeight: "bold" }}>4</span>{" "}
              interactions can be scheduled at the times you've selected
            </div>
            <div style={{}}>
              <div>
                <div>Time selected: Monday August 16 2022, 5:00pm - 7:00pm</div>
                <div style={{ color: "#f54295" }}>
                  * no meetings can be scheduled in this period
                </div>
              </div>
              <div>
                <div>Time selected: Monday August 17 2022, 5:00pm - 7:00pm</div>
                <lu>
                  <li>5:00pm - 5:30pm &#8211; meeting with Thomas Hanson</li>
                  <li>5:30pm - 6:00pm &#8211; meeting with Mary leson </li>
                  <li>6:30pm - 7:00pm &#8211; meeting with leila Mayson</li>
                </lu>
              </div>
              <div>
                <div>Time selected: Monday August 18 2022, 5:00pm - 7:00pm</div>
                <lu>
                  <li>6:45pm - 7:1pm &#8211; meeting with Jonathan Hon </li>
                </lu>
              </div>
            </div>
            <br />
            <InteractButton>Confirm</InteractButton>
          </div>
        </div>
      </div>
    </div>
  );
}
