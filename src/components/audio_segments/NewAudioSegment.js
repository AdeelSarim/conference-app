import { Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import DropDown from "../form/DropDown";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function NewAudioSegment({ participants, segments, setSegments }) {
  const TIME_NOW = moment().format("yyyy-MM-DDTHH:MM");
  const audio_segment_id = uuidv4();
  const [participantID, setParticipantID] = useState("");
  const [audioStart, setAudioStart] = useState(TIME_NOW);
  const [audioEnd, setAudioEnd] = useState(TIME_NOW);

  const submitForm = () => {
    if (participantID && audioEnd && audioStart) {
      if (audioStart > audioEnd) {
        alert("Start time must be smaller");
      } else {
        const newAudioSegment = {
          participant_id: participantID,
          audio_segment_id: audio_segment_id,
          audio_start: moment(new Date(audioStart).toISOString()),
          audio_end: moment(new Date(audioEnd).toISOString()),
        };
        const updated = [...segments, newAudioSegment];
        setSegments(updated);
        setParticipantID("");
        setAudioStart(TIME_NOW);
        setAudioEnd(TIME_NOW);
      }
    } else {
      alert("Please fill out all details !");
    }
  };

  return (
    <Stack style={{ gap: "4px" }} component={Paper}>
      <DropDown
        options={participants}
        setParticipantID={setParticipantID}
        participantID={participantID}
      />
      <Input
        type="datetime-local"
        lable="Audio Start"
        name="audioStart"
        value={audioStart}
        handleChange={setAudioStart}
      />

      <Input
        type="datetime-local"
        lable="Audio End"
        name="audioEnd"
        value={audioEnd}
        handleChange={setAudioEnd}
      />
      <SubmitButton handleOnClick={submitForm} />
    </Stack>
  );
}

export default NewAudioSegment;
