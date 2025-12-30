'use client';

import styles from './EpisodeFilters.module.css';
import { useRouter } from 'next/navigation';

export default function EpisodeFilters() {
  const { replace } = useRouter();

  const handleEpisodeChange = (id: string) => {
  if (!id) return;

  replace(`/episodes/${id}`, { scroll: false });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <label className={styles.label}>Pick Episode</label>
        <select className={styles.select} onChange={(e) => handleEpisodeChange(e.target.value)}>
          <option value="">Choose episode</option>

          {Array.from({ length: 51 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}> Episode {num} </option>
          ))}
        </select>
      </div>
    </div>
  );
}