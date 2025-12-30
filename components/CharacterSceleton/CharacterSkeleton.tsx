import styles from './CharacterSkeleton.module.css';

export default function CharacterSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine} style={{ width: '80%', height: '20px' }} />
        <div className={styles.skeletonLine} style={{ width: '40%' }} />
        <div className={styles.skeletonLine} style={{ width: '60%' }} />
      </div>
    </div>
  );
}