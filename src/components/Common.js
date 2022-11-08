import { Stack, Typography } from "@mui/material";
import moment from "moment";

export const userSpeakTime = (user_id, segments) => {
  const userOccurrence = segments.filter(
    (segment) => segment.participant_id === user_id
  );
  let totalTimeSpeak = 0;
  userOccurrence.forEach((occurrence) => {
    let startTime = moment(new Date(occurrence.audio_start));
    let endTime = moment(new Date(occurrence.audio_end));
    let diff = endTime.diff(startTime);
    totalTimeSpeak += diff / 1000;
  });
  return totalTimeSpeak;
};

export const NoParticipantFound = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        backgroundColor: "#ffefd1",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="subtitle2">
        No participant included from list!
      </Typography>
    </Stack>
  );
};
