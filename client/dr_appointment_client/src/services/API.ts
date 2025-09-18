import axios from "axios";


const Base_URL="http://localhost:5000"
const axiosInstance= axios.create({baseURL:Base_URL})

export const getAllDoctors= async ()=>{
    return((await axiosInstance.get("api/doctor/getDoctors")).data.Doctors)
}



export const getDoctorByID= async (id:string)=>{
    return((await axiosInstance.get(`api/doctor/getDoctor/${id}`)).data)
}
