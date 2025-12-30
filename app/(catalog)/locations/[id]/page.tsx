import CharacterCard from "@/components/CharacterCard/CharacterCard";
import Grid from "@/components/Grid/Grid";
import Link from "next/link";
import { Character } from "@/types/character";
import { getLocationById } from "@/lib/api/locations";
import { getCharacterById } from "@/lib/api/characters";
import styles from "./LocationsPage.module.css";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function EpisodePage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const location = await getLocationById(id);

  const characterIds = location.residents
    .map((url: string) => url.split("/").pop())
    .join(",");

  
  const charactersData = await getCharacterById(characterIds);
  const rawCharacters = Array.isArray(charactersData) ? charactersData : [charactersData];

  const characters = rawCharacters.filter(Boolean);

  return (
    <main>
      <h1> Location: {location.name} </h1>
      <p className={styles.airDate}>
        <span>Dimension:</span> {location.dimension} <span className={styles.separator}>|</span> {location.type}
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