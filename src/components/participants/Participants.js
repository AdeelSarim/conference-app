import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ParticipantRow from "./ParticipantRow";

export default function Participants({
  participants,
  segments,
  setParticipants,
  setSegments,
}) {
  const handleUserVisibility = (user_id) => {
    const updated = participants;
    const targetParticipant = participants.findIndex(
      (participant) => participant.participant_id === user_id
    );
    updated[targetParticipant].isVisible =
      !updated[targetParticipant].isVisible;
    setParticipants([...updated]);
    filterAudioSegments();
  };

  const filterAudioSegments = (user_id) => {
    const updated = segments;
    updated.filter((segment) => segment.participant_id !== user_id);
    setSegments(updated);
  };

  return (
    <TableContainer component={Paper} sx={{maxHeight: '45vh', overflow: 'scroll'}}>
      <Table sx={{ minWidth: 650 }} aria-label="participants table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Speak</TableCell>
            <TableCell align="center">Avg Speak Duration</TableCell>
            <TableCell align="center">Current Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map((participant) => (
            <ParticipantRow
              key={participant.participant_id}
              participant={participant}
              segments={segments}
              handleUserVisibility={(user_id) => handleUserVisibility(participant.participant_id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
