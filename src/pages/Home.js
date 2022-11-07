import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Participants from "../components/participants/Participants";
import { users } from "../fixtures/participants";
import { audioSegments } from "../fixtures/audio_segments";
import styled from "@emotion/styled";
import AudioSegments from "../components/audio_segments/AudioSegments";
import NewAudioSegment from "../components/audio_segments/NewAudioSegment";
import TimeContribution from "../components/audio_segments/TimeContribution";
import { NoParticipantFound } from "../components/Common";
import NewParticipant from "../components/participants/NewParticipant";

const ComponentHeading = styled(Typography)(() => ({
  textAlign: "center",
  padding: "20px",
  color: "slategrey",
}));

function Home() {
  const [participants, setParticipants] = useState(users);
  const visibleParticipants = participants.filter(
    (participant) => participant.isVisible
  );
  const [segments, setSegments] = useState(audioSegments);
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} style={{ gap: "8px" }}>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <ComponentHeading variant="h4">Participants</ComponentHeading>
          <Participants
            participants={participants}
            segments={segments}
            setParticipants={setParticipants}
            setSegments={setSegments}
          />
          <ComponentHeading variant="h4">Add New Participant</ComponentHeading>
          <NewParticipant
            participants={participants}
            setParticipants={setParticipants}
          />

          <ComponentHeading variant="h4">
            Most & Least contribution
          </ComponentHeading>
          {visibleParticipants.length > 0 ? (
            <TimeContribution segments={segments} participants={participants} />
          ) : (
            <NoParticipantFound />
          )}
        </Box>

        <Box width={{ xs: "100%", sm: "50%" }}>
          <ComponentHeading variant="h4">Add Audio Segment</ComponentHeading>
          {visibleParticipants.length > 0 ? (
            <NewAudioSegment
              participants={visibleParticipants}
              segments={segments}
              setSegments={setSegments}
            />
          ) : (
            <NoParticipantFound />
          )}
          <ComponentHeading variant="h4">Audio Segments</ComponentHeading>
          {visibleParticipants.length > 0 ? (
            <AudioSegments
              segments={segments}
              participants={visibleParticipants}
            />
          ) : (
            <NoParticipantFound />
          )}
        </Box>
      </Stack>
    </>
  );
}

export default Home;
