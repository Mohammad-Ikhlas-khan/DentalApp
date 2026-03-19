import React from 'react'
import { useState,useEffect } from 'react';
import Appointment from '../components/Appointment'

function AdminPage() {
  const token = localStorage.getItem("token");
  const [appointments,setAppointments]=useState([]);
  async function fetchData(){
    try{
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setAppointments(data.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="w-full min-h-screen mx-auto my-auto p-6 rounded-lg shadow-md flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <table className="w-full text-left border-2 border-black rounded-lg border-collapse">
            <caption className="w-full  text-center font-bold mb-2">Appointments</caption>
            <thead className="bg-gray-200 border-b border-black">
                <tr>
                    <th className="border border-gray-300 p-2
                font-semibold text-indigo-700">S.No</th>
                    <th className="border border-gray-300 p-2
                font-semibold text-indigo-700">Patient Name</th>
                    <th className="border border-gray-300 p-2
                font-semibold text-indigo-700">Age</th>
                    <th className="border border-gray-300  p-2
                font-semibold text-indigo-700">Gender</th>
                    <th className="border border-gray-300 p-2
                font-semibold text-indigo-700">Appointment Date</th>
                    <th className="border border-gray-300 p-2
                font-semibold text-indigo-700">Dentist</th>
                    <th 
                    className="border border-gray-300 p-2 font-semibold text-indigo-700">
                    Clinic
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments?.map((appointment,index) => (
                   <Appointment key={appointment._id} appointment={appointment} index={index}/>
                 ))}
            </tbody>
        </table>
    </div>
  )
}

export default AdminPage