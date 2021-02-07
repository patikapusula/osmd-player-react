import React, { useState } from "react";

export default function PlayerController({ player }) {
  const [playing, setPlaying] = useState(false);

  // Play
  const handlePlay = () => {
    console.log("Play clicked");
    if (player.state === "STOPPED") {
      player.play();
      setPlaying(true);
    } else {
      console.log("Already PLAYING");
    }
  };
  //Stop
  const handleStop = () => {
    console.log("Stop clicked");
    if (player.state === "PLAYING") {
      player.stop();
      player.cursor.show();
      setPlaying(false);
    } else {
      console.log("Already STOPPED");
    }
  };

  return (
    <div className="controller-bar">
      <button disabled={playing} onClick={handlePlay} className="btn">
        {playing ? "PLAYING" : "PLAY"}
      </button>
      <button disabled={!playing} onClick={handleStop} className="btn">
        STOP
      </button>
    </div>
  );
}
