import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Nunito } from '@next/font/google';

import List from '../components/List/List';
import AddItem from '../components/AddItem/AddItem'
import ThemeSelector from '../components/ThemeSelector/ThemeSelector'

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {

  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name='description' content='Créez votre todo list avec plusieurs thèmes différents' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.main} ${nunito.className} ${theme}-theme`}>
        <ThemeSelector />
        <h1>Todo List</h1>
        <AddItem />
        <List />
      </main>
    </>
  );
}
