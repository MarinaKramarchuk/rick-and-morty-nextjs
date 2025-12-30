'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.css';
import clsx from 'clsx';

type Props = {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const getVisiblePages = () => {
    const delta = 2; 
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const handlePageChange = (page: number | string) => {
    if (page === '...') return;
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={styles.navButton}
      >
        &lt; Prev
      </button>

      <div className={styles.pages}>
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={clsx(styles.pageButton, {
              [styles.active]: currentPage === page,
              [styles.dots]: page === '...',
            })}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={styles.navButton}
      >
        Next &gt;
      </button>
    </div>
  );
}