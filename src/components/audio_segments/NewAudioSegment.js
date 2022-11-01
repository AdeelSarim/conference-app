import { Stack } from "@mui/material";
import React, { useState } from "react";
import DropDown from "../form/DropDown";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function NewAudioSegment({ participants, segments, setSegments }) {
  const audio_segment_id = uuidv4();
  const [participantID, setParticipantID] = useState("");
  const [audioStart, setAudioStart] = useState("");
  const [audioEnd, setAudioEnd] = useState("");

  const submitForm = () => {
    if(participantID && audioEnd && audioStart){
      const newAudioSegment = {
        participant_id: participantID,
        audio_segment_id: audio_segment_id,
        audio_start: moment(audioStart),
        audio_end: moment(audioEnd),
      };
      const updated = [...segments, newAudioSegment];
      setSegments(updated);
    } else {
      alert('Please fill out all details !');
    }
  };

  return (
    <Stack>
      <form>
        <DropDown
          options={participants}
          setParticipantID={setParticipantID}
          participantID={participantID}
        />
        <Input
          type="datetime-local"
          lable="Start Time"
          name="audio_start"
          value={audioStart}
          handleChange={setAudioStart}
        />
        <Input
          type="datetime-local"
          lable="End Time"
          name="audio_end"
          value={audioEnd}
          handleChange={setAudioEnd}
        />
        <SubmitButton handleOnClick={submitForm} />
      </form>
    </Stack>
  );
}

export default NewAudioSegment;
