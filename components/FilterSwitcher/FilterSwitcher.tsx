'use client';

import { usePathname } from 'next/navigation';
import CharacterFilters from '../Filters/CharacterFilters/CharacterFilters';
import EpisodeFilters from '../Filters/EpisodeFilter/EpisodeFilters';
import LocationFilters from '../Filters/LocationFilter/LocationFilters';

export default function FilterSwitcher() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.startsWith('/character')) {
    return <CharacterFilters />;
  }

  if (pathname.startsWith('/locations')) {
    return <LocationFilters />;
  }

  if (pathname.startsWith('/episodes')) {
    return <EpisodeFilters />;
  }

  return <p>Choose a category</p>;
}