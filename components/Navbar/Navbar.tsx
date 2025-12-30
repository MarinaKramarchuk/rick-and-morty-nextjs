'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="Multiverse portal" width={40} height={40} />
        <span>Rick and Morty Wiki</span>
      </Link>

      <button
        className={styles.burger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>


      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
        <li>
          <Link 
            href="/" 
            onClick={() => setOpen(false)}
            className={clsx(styles.link, { [styles.isActive]: pathname === '/' || pathname.startsWith('/character') })}
          >Characters
          </Link>
        </li>
        <li>
          <Link 
            href="/episodes" 
            onClick={() => setOpen(false)}
            className={clsx(styles.link, { [styles.isActive]: pathname.startsWith('/episodes') })}
          >Episodes
          </Link>
        </li>
        <li>
          <Link 
            href="/locations" 
            onClick={() => setOpen(false)}
            className={clsx(styles.link, { [styles.isActive]: pathname.startsWith('/locations') })}
          >Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}
