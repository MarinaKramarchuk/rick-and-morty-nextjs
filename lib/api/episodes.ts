
export async function getEpisodeById(id: string) {
  if (!id || id === 'undefined' || isNaN(Number(id))) return null;

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.warn(`Episode with ID ${id} not found or API error`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Network error while fetching episode:", error);
    return null;
  }
}