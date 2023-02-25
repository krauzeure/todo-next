import React, { useState, useEffect } from 'react';
import { listContext } from '@/types/types';
import { listObject } from '@/types/types';

export const GlobalListContext = React.createContext<listContext>({
  list: [],
  updateList: ([]) => {},
});

// @ts-ignore
export const GlobalListProvider = (props) => {
  const [list, setList] = useState<listObject[]>([]);

  useEffect(() => {
    const locatStorageString = window.localStorage.getItem('todoList');
    if (locatStorageString) {
        const localStorageObject = JSON.parse(locatStorageString)
        const list = localStorageObject.list
      setList(list);
    } 
  }, []);

  return (
    <GlobalListContext.Provider
      value={{
        list: list,
        updateList: setList,
      }}>
      {props.children}
    </GlobalListContext.Provider>
  );
};
