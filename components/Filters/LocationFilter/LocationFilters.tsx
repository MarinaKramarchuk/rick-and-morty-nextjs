'use client';

import styles from './LocationFilters.module.css';
import { useRouter } from 'next/navigation';

export default function LocationFilters() {
  const { replace } = useRouter();

  const handleLocationChange = (id: string) => {
  if (!id) return;

  replace(`/locations/${id}`, { scroll: false });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <label className={styles.label}>Pick Location</label>
        <select className={styles.select} onChange={(e) => handleLocationChange(e.target.value)}>
          <option value="">Choose location</option>

          {Array.from({ length: 126 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}> Location {num} </option>
          ))}
        </select>
      </div>
    </div>
  );
}