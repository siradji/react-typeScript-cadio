import { createContext } from 'React';

interface Istate {
  string: string;
  welcomeMsg: string;
}
export const initialState = {
  string: 'test',
  welcomeMsg: 'HI welcom',
};
const AppContext = createContext<Istate>(initialState);

export default (
  <AppContext.Provider value={initialState}>{}</AppContext.Provider>
);
