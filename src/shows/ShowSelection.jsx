/* 6. `<ShowSelection>` takes two props: a list of `shows` and a function to `setSelectedShow`.
7. Within the `<nav>`, each show is rendered as `<a class="show">` with the name of the show as both the key and the text of the anchor.
8. When a show is clicked, the selected show is updated in state to the show that was clicked. */

import { useState } from "react"
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
