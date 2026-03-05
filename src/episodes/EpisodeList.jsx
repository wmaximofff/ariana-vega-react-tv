/* 5. `<EpisodeList>` and `<EpisodeDetails>` are provided the correct props. Read the source code of these components to figure out what props they expect! */

import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <section className="episodes">
      <h2>{name}</h2>
      <ol>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            onClick={() => setSelectedEpisode(episode)}
            className={episode === selectedEpisode ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
