import CharacterSkeleton from "@/components/CharacterSceleton/CharacterSkeleton";
import Grid from "@/components/Grid/Grid";

export default function Loading() {
  const skeletons = Array.from({ length: 20 });

  return (
    <main style={{ padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', opacity: 0.5 }}>
        Loading characters...
      </h1>
      
      <Grid>
        {skeletons.map((_, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <CharacterSkeleton />
          </li>
        ))}
      </Grid>
    </main>
  );
}