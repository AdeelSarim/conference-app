import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { userSpeakTime } from "../Common";

function TimeContribution({ segments, participants }) {
  const calculateTimeContribution = () => {
    let times = [];
    participants.map((participant) =>
      participant.isVisible
        ? times.push({
            name: participant.name,
            time: userSpeakTime(participant.participant_id, segments),
          })
        : ""
    );

    times.sort((objA, objB) => Number(objB.time) - Number(objA.time));

    var mostContributionBy = times[0].name;
    var leastContributionBy = times[times.length - 1].name;
    return { mostContributionBy, leastContributionBy };
  };

  return (
    <Stack component={Paper} style={{ padding: "24px" }}>
      <Typography variant="subtitle1">
        Most contribution by: {calculateTimeContribution().mostContributionBy}
      </Typography>
      <Typography variant="subtitle1">
        Least contribution by: {calculateTimeContribution().leastContributionBy}
      </Typography>
    </Stack>
  );
}

export default TimeContribution;
