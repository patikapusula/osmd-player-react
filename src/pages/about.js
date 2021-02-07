import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>no styling implemented</p>
      <p>score files are fetch from "opensheetmusicdisplay" repo</p>
      <h4>Packages used;</h4>
      <ul>
        <li>
          <a
            href="https://github.com/facebook/react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react
          </a>
        </li>
        <li>
          <a
            href="https://github.com/opensheetmusicdisplay/opensheetmusicdisplay"
            target="_blank"
            rel="noopener noreferrer"
          >
            opensheetmusicdisplay
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jimutt/osmd-audio-player"
            target="_blank"
            rel="noopener noreferrer"
          >
            osmd-audio-player
          </a>
        </li>
      </ul>
    </div>
  );
}
