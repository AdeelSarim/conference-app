import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import React from "react";
import { userSpeakTime } from "../Common";

function ParticipantRow({ participant, segments, handleUserVisibility }) {
  const userSpeakCount = (user_id) => {
    const userOccurrence = segments.filter(
      (segment) => segment.participant_id === user_id
    );
    return userOccurrence.length;
  };

  const userAvgSpeakTime = (user_id) => {
    const totalTimeSpeak = userSpeakTime(user_id, segments);
    const userOccurrence = segments.filter(
      (segment) => segment.participant_id === user_id
    );
    if (totalTimeSpeak) {
      return moment
        .utc((totalTimeSpeak * 1000) / userOccurrence.length)
        .format("HH:mm:ss");
    } else {
      return 'Didnt participated yet'
    }
  };

  return (
    <TableRow
      key={participant.participant_id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{participant.name}</TableCell>
      <TableCell align="center">
        {userSpeakCount(participant.participant_id)} times
      </TableCell>
      <TableCell align="center">
        {userAvgSpeakTime(participant.participant_id)}
      </TableCell>
      <TableCell align="center">
        {participant?.isVisible ? "Included" : "Excluded"}
      </TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          onClick={() => handleUserVisibility(participant.participant_id)}
        >
          {participant.isVisible ? "Exclude" : "Include"}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ParticipantRow;
