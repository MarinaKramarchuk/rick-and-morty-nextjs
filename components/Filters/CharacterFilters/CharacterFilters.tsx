'use client';

import styles from './CharacterFilters.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CharacterFilters() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (value) params.set(key, value);
    else params.delete(key);
    replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <label className={styles.label}>Status</label>
        <select 
          className={styles.select}
          onChange={(e) => updateParams('status', e.target.value)}
          value={searchParams.get('status') || ""}
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={styles.group}>
        <label className={styles.label}>Species</label>
        <select 
          className={styles.select}
          onChange={(e) => updateParams('species', e.target.value)}
          value={searchParams.get('species') || ""}
        >
          <option value="">All Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="humanoid">Humanoid</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="mythological">Mythological</option>
          <option value="robot">Robot</option>
          <option value="animal">Animal</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="disease">Disease</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={styles.group}>
        <label className={styles.label}>Gender</label>
        <select 
          className={styles.select}
          onChange={(e) => updateParams('gender', e.target.value)}
          value={searchParams.get('gender') || ""}
        >
          <option value="">All Genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button className={styles.reset_button} onClick={() => replace('/')}>
        Reset Filters
      </button>
    </div>
  );
}