import React, { useState } from 'react';
import { listContext } from '@/types/types';
import { listObject } from '@/types/types';

export const GlobalListContext = React.createContext<listContext>({
  list: [],
  updateList: ([]) => {},
});

// @ts-ignore
export const GlobalListProvider = (props) => {
  const [list, setList] = useState<listObject[]>([]);

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
