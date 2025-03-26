'use client';

import styles from '@/styles/Home.module.css';
import Search from "@/components/Search";
import { Banner } from '@/components/Banner';

export default function Home() {
  return (
    <div className={ styles.root }>
      <Search />
      <Banner />
    </div>
  );
}