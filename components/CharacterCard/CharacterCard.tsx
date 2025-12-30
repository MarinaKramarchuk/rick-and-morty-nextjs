import styles from "./CharacterCard.module.css";
import { Character } from "@/types/character";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={character.image}
          alt={character.name}
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        <span
          className={clsx(styles.status, {
            [styles.alive]: character.status === "Alive",
            [styles.dead]: character.status === "Dead",
            [styles.unknown]: character.status === "unknown",
          })}
        >
          {character.status}
        </span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.name}>{character.name}</h2>
        <p className={styles.location_header}>Last location</p>
        <p className={styles.location}>{character.location.name}</p>
      </div>
      
    </div>
  );
}
