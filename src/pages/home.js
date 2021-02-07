import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { ScoreFiles } from "../data/scoreFilesDB";

export default function Home() {
  return (
    <div className="page">
      <h1>Scores</h1>
      <hr />
      <ul>
        {ScoreFiles.map((s, index) => (
          <React.Fragment key={index}>
            <li className="listItem">
              <Link className="listLink" to={`/score/${s.id}`}>
                {s.listTitle}
              </Link>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
