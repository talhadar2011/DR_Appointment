import { useQuery } from "@tanstack/react-query"
import { getAllDoctors, getDoctorByID } from "./API"

export function useGetAllDoctors (){

    return useQuery({
        queryKey:["GetAllDocors"],
        queryFn:getAllDoctors,
        staleTime: 1000 * 60*5 ,

    })
}

export function useGetDoctorById(id:string){
    return useQuery({
        queryKey:["GetDoctorByID",id],
        queryFn:()=>getDoctorByID(id),
        // check if we already have data in cache
      staleTime: 1000 * 60 *5,

    })
    
}