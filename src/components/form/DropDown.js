import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function DropDown({ options, setParticipantID, participantID }) {
  const handleChange = (event) => {
    setParticipantID(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-participant">Select Participant</InputLabel>
        <Select
          labelId="select-participant"
          id="select-participant"
          value={participantID}
          label="Select Participant"
          onChange={handleChange}
        >
          {options.map(option => (
            <MenuItem key={option.participant_id} value={option.participant_id}>{option.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown;
