import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './List.module.css'
import { useContext } from "react";
import {GlobalListContext} from '../../Context/ListContext'

export default function List() {

    const listValue = useContext(GlobalListContext);
    console.log(listValue)

  return (
    <ul></ul>
    // <ul className={styles.list}>
    //   {items &&
    //     items.map((item, index) => {
    //       return <ListItem key={item.id} name={item.name} />;
    //     })}
    // </ul>
  );
}
