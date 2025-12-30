import { getCharacterById } from "@/lib/api/characters";
import Image from "next/image";
import styles from "./CharacterPage.module.css";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function CharacterPage({ params }: Props) {
  const { id } = await params;

  const character = await getCharacterById(id);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <Image 
            src={character.image} 
            alt={character.name} 
            width={300} 
            height={300} 
            priority
          />
        </div>
        
        <div className={styles.info}>
          <h1>{character.name}</h1>
          <div className={styles.details}>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Last location:</strong> {character.location.name}</p>
          </div>
        </div>
      </div>
    </main>
  );
}