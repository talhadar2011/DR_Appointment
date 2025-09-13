import { createContext, type PropsWithChildren } from 'react';
import type { DoctorType } from '../type';

export {createContext, useContext} from 'react';
import doctors from '../data/DoctorData';
export const AppContext = createContext<DoctorType[]|null>(null!);

const AppContextProvider = ({children}:PropsWithChildren)=>{
    const value = doctors 

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;