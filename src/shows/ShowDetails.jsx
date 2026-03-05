/* 1. `<ShowDetails>` takes a `show` as a prop.
2. `<ShowDetails>` keeps the selected episode in a state variable.
3. If no show is provided, `<ShowDetails>` renders a message encouraging the user to select a show.
4. If a show is provided, `<ShowDetails>` renders `<EpisodeList>` and `<EpisodeDetails>`. */

import { useState } from "react"
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails( {show}) {

  const [selectedEpisode, setSelectedEpisode] = useState(null);
  
    if (!show) 
  return <div className="show-details">Select a show.</div>;
}

return (
  <div className="show-details">
    <EpisodeList
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
    />
    
    <EpisodeDetails episode={selectedEpisode} />
  </div>
);