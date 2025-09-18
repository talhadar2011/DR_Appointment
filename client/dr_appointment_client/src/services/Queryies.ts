import { useQuery } from "@tanstack/react-query"
import { getAllDoctors, getDoctorByID } from "./API"

export function useGetAllDoctors (){

    return useQuery({
        queryKey:["GetAllDocors"],
        queryFn:getAllDoctors
    })
}

export function useGetDoctorById(id:string){
    return useQuery({
        queryKey:["GetDoctorByID"],
        queryFn:()=>getDoctorByID(id)
    })

}