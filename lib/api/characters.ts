export async function getCharacters(
  page: string = "1", 
  name: string = "", 
  status: string = "", 
  gender: string = "", 
  species: string = ""
) {
  const query = new URLSearchParams({
    page,
    ...(name && { name }),
    ...(status && { status }),
    ...(gender && { gender }),
    ...(species && { species }),
  });

  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?${query.toString()}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return { info: { pages: 0 }, results: [] };
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { info: { pages: 0 }, results: [] };
  }
}

export async function getCharacterById(id: string) {
  if (!id || id === 'undefined') return null;

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.warn(`Character ${id} not found`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching character ${id}:`, error);
    return null;
  }
}