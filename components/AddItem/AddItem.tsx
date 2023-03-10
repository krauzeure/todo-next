import React, { useContext, useState } from 'react';
import styles from './AddItem.module.css';
import { Nunito } from '@next/font/google';
const nunito = Nunito({ subsets: ['latin'] });
import { v4 as uuidv4 } from 'uuid';

import { GlobalListContext } from '../../Context/ListContext';
import { ThemeContext } from '../../Context/ThemeContext';

export default function AddItem() {
  const { list, updateList } = useContext(GlobalListContext);
  const { theme } = useContext(ThemeContext);
  const [newItem, setNewItem] = useState<string>('');

  const addToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList = [...list, { name: newItem, id: uuidv4() }];
    updateList(newList);
    setNewItem('');
    window.localStorage.setItem(
      'todoList',
      JSON.stringify({ theme: theme, list: newList })
    );
  };

  return (
    <section className={styles.container}>
      <form onSubmit={(e) => addToList(e)} aria-label='Ajouter un item'>
        <label htmlFor='addItem'>Ajouter à la liste</label>
        <div>
          <input
            className={`${nunito.className} ${styles.textInput}`}
            type='text'
            id='addItem'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <input className={nunito.className} type='submit' value='Ajouter' />
        </div>
      </form>
    </section>
  );
}
