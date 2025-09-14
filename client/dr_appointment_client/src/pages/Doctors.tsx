import React from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from '@tanstack/react-router'

export default function Doctors() {
  const doctors =  React.useContext(AppContext)
  
  const [selectedSpecialization, setSelectedSpecialization] = React.useState<string | null>(null)
  const selected_Specialization = (specialization: string) => {
    setSelectedSpecialization(specialization)
  }
  function FilterDoctor() {
    if (selectedSpecialization) {
      const filteredDoctors = doctors?.filter(doctor => doctor.specialization === selectedSpecialization)
      return filteredDoctors
    }

    return doctors
  }

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16  ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-cyan-800">Our Team Of Doctors</h2>
        </div>
        <div className="flex  flex-col sm:flex-row items-start gap-5 mt-5 ">
          <div className="w-full sm:w-[200px] bg-cyan-800 text-white flex flex-col gap-2 text-sm rounded-md p-2 sticky  top-17 sm:top-20 ">
            <p onClick={()=>selected_Specialization("Cardiologist")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              Cardiologist
            </p>
            <p  onClick={()=>selected_Specialization("Dermatologist")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              Dermatologist
            </p>
            <p  onClick={()=>selected_Specialization("Neurologist")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              Neurologist
            </p>
            <p  onClick={()=>selected_Specialization("Pediatrician")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              Pediatrician
            </p>
            <p  onClick={()=>selected_Specialization("Orthopedic")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              Orthopedic
            </p>
            <p  onClick={()=>selected_Specialization("")} className="w-full pl-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white hover:text-cyan-800">
              All
            </p>
          </div>
          <div className="grow grid gap-8 p-2 mb-6  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  ">

            {FilterDoctor()?.map((doctor, index) => (

              <div key={index} className=" rounded-lg  bg-cyan-800    ">
          
             <Link to="/doctor/$doctorId" params={{ doctorId: doctor.id }} >
                   <img
                  className="xl:w-xs  p-1 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Hero image"
                 
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {doctor.name}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-200">{doctor.specialization}</span>
                  <p className="mt-3 mb-4 font-light text-gray-0 dark:text-gray-200">{doctor.degrees}</p>

                </div>
               </Link>
               
              </div>

            ))}
          </div>

        </div>
      </div>

    </>)
}
