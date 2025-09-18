import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import type { DoctorType } from '../type';

export {createContext, useContext} from 'react';
import { useGetAllDoctors } from '../services/Queryies';
export const AppContext = createContext<DoctorType[]|null>(null!);

const AppContextProvider = ({children}:PropsWithChildren)=>{
     

   
    const {data,isError,isLoading}= useGetAllDoctors()
  
  

  console.log(data,"Data from API")
    return (
        <AppContext.Provider value={{data,isError,isLoading}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;