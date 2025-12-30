import FilterSwitcher from '@/components/FilterSwitcher/FilterSwitcher';
import styles from './layout.module.css';
import { Suspense } from 'react';

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterSwitcher />
        </Suspense>
      </aside>

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
