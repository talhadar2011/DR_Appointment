import React, { useState } from "react";
import { useGetDoctorById } from "../services/Queryies";

export default function DoctorDetail({ doctorId }: { doctorId: string }) {
  const { data: doctor, isLoading, isError } = useGetDoctorById(doctorId);

  const [appointmentSlots, setAppointmentSlots] = useState([]);
  const [appointmentDayIndex, setAppointmentDayIndex] = useState(0);
  const [appointmentTime, setAppointmentTime] = useState([]);

  // create slots once doctor data is available
  React.useEffect(() => {
    if (!doctor) return;

    const today = new Date();
    const workingSlots = [];
    let current = new Date(today);
    const slots: { Time: string; isBooked: boolean }[] = [];
    const startHour = 8;
    const endHour = 14;

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push({ Time: `${hour}:00`, isBooked: false });
    }
    setAppointmentTime(slots);

    while (workingSlots.length < 5) {
      current.setDate(current.getDate() + 1);
      const day = current.getDay();
      if (day !== 0 && day !== 6) {
        workingSlots.push({
          date: new Date(current).toDateString().slice(4, 10),
          time: slots,
        });
      }
    }
    setAppointmentSlots(workingSlots);
  }, [doctor]);

  const handleSelectedTime = (selectedTime: string, selectedDate: string) => {
    const updatedSlots = appointmentSlots.map((slot) => {
      if (slot.date === selectedDate) {
        return {
          ...slot,
          time: slot.time.map((t) =>
            t.Time === selectedTime ? { ...t, isBooked: true } : t
          ),
        };
      }
      return slot;
    });
    setAppointmentSlots(updatedSlots);
  };

  const handleAppointmentDayIndex = (index: number) => {
    setAppointmentDayIndex(index);
  };

  if (isLoading) return <p>Loading doctor...</p>;
  if (isError) return <p>Failed to load doctor.</p>;
  if (!doctor) return null;

  return (
    <div className="bg-cyan-800 rounded mt-10">
      <div className="flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-3/4 hidden dark:block"
          fetchPriority="high"
          src={doctor.image}
          alt="doctor"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {doctor.name}
          </h2>
          <p className="mb-6 font-bold text-gray-500 md:text-lg dark:text-white">
            {doctor.specialization}
          </p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">
            {doctor.degrees}
          </p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">
            Years of Experience: {doctor.yearsOfExperience}
          </p>
          <p className="mb-6 font-medium text-gray-500 md:text-lg dark:text-white">
            Ratings: {doctor.rating}
          </p>
        </div>
      </div>

      <div className="text-center pb-8 text-white">
        <h1 className="mb-4 text-2xl tracking-tight font-extrabold">
          Available Appointments
        </h1>
        <div className="flex justify-center gap-4 mb-10">
          {appointmentSlots.map((day, index) => (
            <button
              onClick={() => handleAppointmentDayIndex(index)}
              key={index}
              className={`${
                appointmentDayIndex === index ? "bg-white text-cyan-800" : ""
              } cursor-pointer w-16 h-16 rounded-lg border flex flex-col items-center justify-center hover:bg-cyan-500 hover:text-white`}
            >
              <span className="font-medium">{day.date}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {appointmentSlots.map((day, index) =>
            appointmentDayIndex === index
              ? day.time.map(
                  (slot, i) =>
                    !slot.isBooked && (
                      <button
                        onClick={() => handleSelectedTime(slot.Time, day.date)}
                        key={i}
                        className="cursor-pointer w-16 h-16 rounded-lg border flex flex-col items-center justify-center hover:bg-cyan-500 hover:text-white"
                      >
                        <span className="font-medium">{slot.Time}</span>
                      </button>
                    )
                )
              : null
          )}
        </div>
      </div>
    </div>
  );
}
