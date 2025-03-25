'use client';

import styles from '@/styles/Home.module.css';
import Search from "@/components/Search";
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className={ styles.root }>
      <Search />
      <Banner />
      <Footer />
    </div>
  );
}