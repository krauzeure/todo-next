import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { listItem } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';
import styles from './List.module.css'

export default function List() {
  const [items, setItems] = useState<listItem[]>([]);

  return (
    <ul className={styles.list}>
      {items &&
        items.map((item, index) => {
          return <ListItem key={item.id} name={item.name}/>;
        })}
    </ul>
  );
}
