import moment from "moment";

export const userSpeakTime = (user_id, segments) => {
  const userOccurrence = segments.filter(
    (segment) => segment.participant_id === user_id
  );
  let totalTimeSpeak = 0;
  userOccurrence.forEach((occurrence) => {
    let startTime = moment(occurrence.audio_start);
    let endTime = moment(occurrence.audio_end);
    let diff = endTime.diff(startTime);
    totalTimeSpeak += diff / 1000;
  });
  return totalTimeSpeak;
};
