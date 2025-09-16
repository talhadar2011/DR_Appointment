import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import type { DoctorType } from '../type';

export {createContext, useContext} from 'react';
import doctors from '../data/DoctorData';
export const AppContext = createContext<DoctorType[]|null>(null!);

const AppContextProvider = ({children}:PropsWithChildren)=>{
     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/doctor/getDoctors"); // Replace with your backend URL
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        console.log(json,"json")
        setData(json.Doctors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data,"Data from API")
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;