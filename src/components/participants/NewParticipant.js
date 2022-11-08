import { Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import Input from "../form/Input";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "../form/SubmitButton";

function NewParticipant({ participants, setParticipants }) {
  const [name, setName] = useState("");
  const participant_id = uuidv4();
  const submitForm = () => {
    if (name) {
      const updated = [
        ...participants,
        {
          participant_id: participant_id,
          name: name,
          isVisible: true,
        },
      ];
      setParticipants(updated);
      setName("");
    } else {
      alert("Add participant name");
    }
  };

  return (
    <Stack style={{ gap: "4px" }} component={Paper}>
      <Input
        type="text"
        lable="Participant Name"
        name="name"
        value={name}
        handleChange={setName}
      />
      <SubmitButton handleOnClick={submitForm} />
    </Stack>
  );
}

export default NewParticipant;
