import React from 'react'
import styles from './ListItem.module.css'
import { Nunito } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] })

export default function ListItem(props: {name:string}) {
  return (
    <li className={styles.listItem}><span>{props.name}</span><button className={nunito.className}>Supprimer</button></li>
  )
}
