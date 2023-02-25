import React from 'react';
import styles from './ListItem.module.css';
import { Nunito } from '@next/font/google';
const nunito = Nunito({ subsets: ['latin'] });

import { useContext } from 'react';
import { GlobalListContext } from '../../Context/ListContext';
import { ThemeContext } from '@/Context/ThemeContext';

export default function ListItem(props: { name: string; id: string }) {
  const { list, updateList } = useContext(GlobalListContext);
  const { theme } = useContext(ThemeContext);

  const deleteItem = () => {
    const newList = list.filter((item) => item.id != props.id);
    updateList(newList);
    window.localStorage.setItem(
      'todoList',
      JSON.stringify({ theme: theme, list: newList })
    );
  };

  return (
    <li className={styles.listItem} onClick={deleteItem}>
      <span>{props.name}</span>
      <button className={nunito.className}>Supprimer</button>
    </li>
  );
}
