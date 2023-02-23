import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Nunito } from '@next/font/google'

import List from '../components/List/List'
import AddItem from '@/components/AddItem/AddItem'

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${nunito.className}`}>
        <h1>Todo List</h1>
        <AddItem />
        <List />
      </main>
    </>
  )
}
