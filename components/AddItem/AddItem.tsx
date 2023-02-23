import React from 'react';
import styles from './AddItem.module.css';
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function AddItem() {
  return (
    <section className={styles.container}>
      <form>
        <label htmlFor='addItem'>Ajouter à la liste</label>
        <div>
          <input type='text' value='' id='addItem' />
          <input className={nunito.className} type='submit' value='Ajouter' />
        </div>
      </form>
    </section>
  );
}
