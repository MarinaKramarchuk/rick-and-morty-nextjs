import CharacterCard from "@/components/CharacterCard/CharacterCard";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";
import { getCharacters } from "@/lib/api/characters";
import Link from "next/link";
import { Character } from "@/types/character";
import Search from "@/components/Search/Search";
export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<{
    page?: string;
    name?: string;
    status?: string;
    gender?: string;
    species?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  
  const currentPage = params.page || "1";
  const name = params.name || "";
  const status = params.status || "";
  const gender = params.gender || "";
  const species = params.species || "";

  const data = await getCharacters(currentPage, name, status, gender, species);
  if (!data || !data.results) {
    return <div>Characters not found</div>;
  }

  return (
    <main>
      <h1>Characters</h1>
        <Search />

      <Grid>
        {data.results.map((char: Character) => (
          <li key={char.id}>
            <Link href={`/character/${char.id}`}>
              <CharacterCard character={char} />
            </Link>
          </li>
        ))}
      </Grid>

        <Pagination totalPages={data.info.pages} />
    </main>
  );
}