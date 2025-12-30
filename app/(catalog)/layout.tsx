import FilterSwitcher from '@/components/FilterSwitcher/FilterSwitcher';
import styles from './layout.module.css';

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <FilterSwitcher />
      </aside>

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
