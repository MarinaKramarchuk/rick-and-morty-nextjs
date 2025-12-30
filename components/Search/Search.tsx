'use client';

import styles from './Search.module.css';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_wrapper}>
        <span className={styles.search_icon}>🔍</span>
        <input
          type="text"
          placeholder="Search characters..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('name')?.toString()}
          className={styles.search_input}
        />
      </div>
    </div>
  );
}