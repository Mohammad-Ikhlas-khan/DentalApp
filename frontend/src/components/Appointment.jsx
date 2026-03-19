import React from 'react'

function Appointment({appointment,index}) {
  return (
    <tr className="border-b">
        <td className='border border-gray-300 p-2'>{index + 1}</td>
        <td className='border border-gray-300 p-2'>{appointment.patient_name}</td>
        <td className='border border-gray-300 p-2'>{appointment.age}</td>
        <td className='border border-gray-300 p-2'>{appointment.gender}</td>
        <td className='border border-gray-300 p-2'>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
        <td className='border border-gray-300 p-2'>{appointment.dentist.name}</td>
        <td className='border border-gray-300 p-2'>{appointment.dentist.clinic_name}</td>
    </tr>
  )
}

export default Appointment