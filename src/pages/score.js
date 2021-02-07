import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";
import OsmdPlayer from "osmd-audio-player";

import { ScoreFiles } from "../data/scoreFilesDB";
import PlayerController from "../components/PlayerController";

// TODO Move this to .env
const BASE_URL = "https://opensheetmusicdisplay.github.io/demo/sheets/";

export default function Score() {
  const refContainer = useRef();
  const [scoreId] = useState(useParams().id);
  const [selectedScore, setSelectedScore] = useState(null);
  const [player] = useState(new OsmdPlayer());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const selected = ScoreFiles.find((s) => s.id === scoreId);
    setSelectedScore(selected);
    const selectedScoreFile = BASE_URL + selected.filename;

    // OSMD: a couple of useful options...
    const OSMDoptions = {
      autoResize: true,
      followCursor: true,
      disableCursor: false,
      drawComposer: true,
      drawCredits: true,
      measureNumberInterval: 1,
      drawingParameters: "compacttight",
      drawMetronomeMarks: true,
      //renderSingleHorizontalStaffline: true,
    };

    // OSMD: loading...
    const osmd = new OSMD(refContainer.current, OSMDoptions);
    osmd
      .load(selectedScoreFile)
      .then(() => {
        console.log("score file LOADED");
        osmd.render();
        console.log("score file RENDERED");
        osmd.cursor.show();
        setLoaded(true);
      })
      .then(() => {
        player.loadScore(osmd);
        console.log("Score file LOADED to Player");
      })
      .catch((e) => {
        console.log("OSMD loading ERROR occured...", e);
      });
  }, [scoreId, player]);

  const scoreInfo = (s) => {
    return (
      <>
        <h4>Score Info</h4>
        <ul>
          <li>
            <span style={{ fontWeight: 600 }}>#</span> {s.id}
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>Title:</span>{" "}
            {selectedScore.listTitle}
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>Filename : </span>
            {s.filename}
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>Category: </span>
            {s.category}
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="page">
        {selectedScore !== null && scoreInfo(selectedScore)}
        {loaded && <PlayerController player={player} />}
        <div ref={refContainer} />
      </div>
    </>
  );
}
