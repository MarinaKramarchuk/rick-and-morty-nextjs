import CharacterCard from "@/components/CharacterCard/CharacterCard";
import Grid from "@/components/Grid/Grid";
import Link from "next/link";
import { Character } from "@/types/character";
import { getEpisodeById } from "@/lib/api/episodes";
import { getCharacterById } from "@/lib/api/characters";
import styles from "./EpisodesPage.module.css";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function EpisodePage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const episode = await getEpisodeById(id);

  const characterIds = episode.characters
    .map((url: string) => url.split("/").pop())
    .join(",");

  const charactersData = await getCharacterById(characterIds);
  const characters = Array.isArray(charactersData) ? charactersData : [charactersData];

  return (
    <main>
      <h1> Episode: {episode.name} </h1>
      <p className={styles.airDate}>
        <span>Released:</span> {episode.air_date} <span className={styles.separator}>|</span> {episode.episode}
      </p>
      
      <Grid>
        {characters.map((char: Character) => (
          <li key={char.id} style={{ listStyle: 'none' }}>
            <Link href={`/character/${char.id}`}>
              <CharacterCard character={char} />
            </Link>
          </li>
        ))}
      </Grid>
    </main>
  );
}