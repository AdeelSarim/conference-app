import React from "react";
import renderer from "react-test-renderer";
import AudioSegments from "../src/components/audio_segments/AudioSegments";
import NewAudioSegment from "../src/components/audio_segments/NewAudioSegment";
import TimeContribution from "../src/components/audio_segments/TimeContribution";
import NewParticipant from "../src/components/participants/NewParticipant";
import { users } from "../src/fixtures/participants";
import { audioSegments } from "../src/fixtures/audio_segments";
import Home from "../src/pages/Home";

it("Audio segments renders correctly", () => {
  const tree = renderer
    .create(<AudioSegments segments={audioSegments} participants={users} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Time contribution renders correctly", () => {
  const tree = renderer
    .create(<TimeContribution segments={audioSegments} participants={users} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("New participant Form renders correctly", () => {
  const tree = renderer
    .create(<NewParticipant participants={users} setParticipants={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("New audio segments Form renders correctly", () => {
  const tree = renderer
    .create(
      <NewAudioSegment
        participants={users}
        segments={audioSegments}
        setSegments={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Home renders correctly with all components", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
