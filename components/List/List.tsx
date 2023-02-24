import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './List.module.css';
import { useContext } from 'react';
import { GlobalListContext } from '../../context/ListContext';

export default function List() {
  const {list, updateList} = useContext(GlobalListContext);

  return (
    <ul className={styles.list}>
      {list &&
        list.map((item, index) => {
          return <ListItem key={item.id} name={item.name} />;
        })}
    </ul>
  );
}
