export interface listContext {
  list: listObject[];
  updateList: Function;
}

export interface listObject {
  name: string;
  id: string;
}

export interface theme {
    name: string,
    primary: string,
    secondary: string,
    tertiary: string
}
