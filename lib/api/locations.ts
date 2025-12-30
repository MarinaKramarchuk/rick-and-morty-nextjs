
export async function getLocationById(id: string) {
  if (!id || id === 'undefined' || isNaN(Number(id))) return null;

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      console.warn(`Location with ID ${id} not found or API error`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Network error while fetching location:", error);
    return null;
  }
}