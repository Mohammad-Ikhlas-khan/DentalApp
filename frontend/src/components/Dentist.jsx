import React from 'react'
import { Link } from 'react-router-dom'
import { useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import defaultImg from '../assets/default-avatar.jpg'

function Dentist({dentist}) {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white w-full max-w-md h-full shadow-md rounded-lg p-4 md:px-6 flex flex-col items-start gap-3  cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300">
        <img 
          src={dentist.image || defaultImg} 
          alt={dentist.name} 
          className="w-28 h-28 object-cover rounded-full mb-3 border-2 border-blue-500"
        />

        <div className="flex gap-1">
            <h1 className='text-gray-800 font-bold text-lg md:text-xl'>{dentist.name}</h1>
        </div>

        <div className="flex gap-1 items-center">
            <p className='text-lg font-semibold'>Qualification: </p>
            <p className='text-gray-600 '>{dentist.qualification}</p>
        </div>
        <div className="mt-2 text-sm text-gray-500 space-y-1">
            <p>Experience: {dentist.years_of_experience} years</p>
            <p>Clinic: {dentist.clinic_name}</p>
            <p>Address: {dentist.address} , {dentist.location}</p>
        </div>
        {user && user.accountType === "User" &&
        <Link to={`/book-appointment/${dentist._id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Book Appointment
            </button>
        </Link>
        }
    </div>
  )
}

export default Dentist;