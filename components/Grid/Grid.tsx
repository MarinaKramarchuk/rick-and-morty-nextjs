import styles from './Grid.module.css';

export default function Grid({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className={styles.grid}>{children}</ul>;
}
