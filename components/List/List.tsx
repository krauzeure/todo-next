import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { listItem } from '@/types/types';

export default function List() {

    const [items, setItems] = useState<listItem[]>()
    useEffect(() => {
        setItems([{ name: "test", id:"lol"}])
        console.log(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <ul>
      <ListItem />
    </ul>
  );
}
