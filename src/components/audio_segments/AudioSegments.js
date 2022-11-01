import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

export default function AudioSegments({ segments, participants, setSegments }) {
  const getUserName = (user_id) => {
    const user = participants.find(
      (participant) => participant.participant_id === user_id
    );
    return user.name;
  };

  const getUserVisibilty = (user_id) => {
    const user = participants.find(
      (participant) => participant.participant_id === user_id
    );
    return user.isVisible;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="participants table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {segments.map((segment) => {
            return (
              getUserVisibilty(segment.participant_id) && (
                <TableRow
                  key={segment.audio_segment_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    {getUserName(segment.participant_id)}
                  </TableCell>
                  <TableCell align="center">
                    {moment.utc(segment.audio_start).format("hh:mm:ss")}
                  </TableCell>
                  <TableCell align="center">
                    {moment.utc(segment.audio_end).format("hh:mm:ss")}
                  </TableCell>
                </TableRow>
              )
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
