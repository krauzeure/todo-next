import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { listItem } from '@/types/types';
import { v4 as uuidv4 } from 'uuid'

export default function List() {

    const [items, setItems] = useState<listItem[]>([])
    useEffect(() => {
        setItems([{ name: "test", id:"lol"}])
        console.log(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(items)

  return (

    <ul>
        {items && items.map((item, index) => {
        return <ListItem key={item.id}/>})}
    </ul>

  );
}
