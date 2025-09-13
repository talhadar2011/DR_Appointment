import React from "react";
import { AppContext } from "../context/AppContext";

export default function DoctorDetail({ doctorId }: number) {
  console.log(doctorId, "props in DoctorDetail");
  const doctors = React.useContext(AppContext)
  const doctor = doctors?.find(doc => doc.id == doctorId)
  console.log(doctor, "doctor in DoctorDetail");
  return (
    <div className=" bg-cyan-800">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full hidden dark:block" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{doctor?.name}</h2>
          <p className="mb-6 font-bold text-gray-500 md:text-lg dark:text-white">{doctor?.specialization}</p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">{doctor?.degrees}</p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">Years of Experience: {doctor?.yearsOfExperience}</p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">Ratings: {doctor?.rating}</p>
          <a className="inline-flex items-center cursor-pointer text-cyan-800 bg-white hover:bg-cyan-50 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-cyan-900">
            Book Appointment
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
