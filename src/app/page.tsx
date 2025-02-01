import styles from '@/styles/Home.module.css';

import Search from "@/components/Search";

export default function Home() {
  return (
    <div className={ styles.root }>
      <Search />
    </div>
  );
}