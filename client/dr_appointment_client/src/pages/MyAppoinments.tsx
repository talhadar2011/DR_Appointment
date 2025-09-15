import React from 'react'

export default function MyAppoinments() {
  return (
    <div>
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
    <div className="flex items-center gap-4 border-b pb-4 mb-4">
      <img src="https://via.placeholder.com/80" alt="Doctor"
        className="w-20 h-20 rounded-full object-cover"/>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Dr. Sarah Johnson</h2>
        <p className="text-gray-500 text-sm">Cardiologist • City Hospital</p>
        <p className="text-gray-400 text-sm">10 years experience</p>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">Select a Date</h3>
      <div className="grid grid-cols-5 gap-2">
        <button className="p-2 rounded-lg border text-center hover:bg-blue-500 hover:text-white">
          Mon <br/> 15
        </button>
        <button className="p-2 rounded-lg border text-center bg-blue-500 text-white">
          Tue <br/> 16
        </button>
        <button className="p-2 rounded-lg border text-center hover:bg-blue-500 hover:text-white">
          Wed <br/> 17
        </button>
        <button className="p-2 rounded-lg border text-center hover:bg-blue-500 hover:text-white">
          Thu <br/> 18
        </button>
        <button className="p-2 rounded-lg border text-center hover:bg-blue-500 hover:text-white">
          Fri <br/> 19
        </button>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-700 mb-2">Available Time Slots</h3>
      <div className="grid grid-cols-3 gap-2">
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">9:00 AM</button>
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">9:30 AM</button>
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">10:00 AM</button>
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">10:30 AM</button>
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">11:00 AM</button>
        <button className="p-2 rounded-lg border hover:bg-blue-500 hover:text-white">11:30 AM</button>
      </div>
    </div>

    <div className="mt-6">
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
        Confirm Appointment
      </button>
    </div>
  </div>

    </div>
  )
}
