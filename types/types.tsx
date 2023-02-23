export interface listContext {
  list: listObject[];
  updateList: Function;
}

export interface listObject {
  name: string;
  id: string;
}
