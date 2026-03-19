import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Form() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    patient_name:"",
    age:"",
    gender:"",
    appointment_date:"",
    dentistId:id
  });

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/addAppointment`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        setFormData({
            patient_name:"",
            age:"",
            gender:"",
            appointment_date:"",
            dentistId:id
        });
        if(!response.ok){
            const errorData = await response.json();
            toast.error(errorData.message || "Failed to book appointment");
            return;
        }
        toast.success("Appointment booked successfully");
        navigate("/");
    }catch(error){
        console.error("Error booking appointment:", error);
        toast.error("Failed to book appointment");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-120 from-indigo-900 to-purple-900 p-4">
        <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-900 p-6 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-indigo-300 text-sm  font-bold mb-2" htmlFor="patient_name">
                    Patient Name
                    <sup className="text-red-500"> *</sup>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="patient_name"
                    required
                    type="text"
                    placeholder="Patient Name"
                    value={formData.patient_name}
                    onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block text-indigo-300 text-sm font-bold mb-2" htmlFor="age">
                    Age
                    <sup className="text-red-500"> *</sup>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="age"
                    required
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block text-indigo-300 text-sm font-bold mb-2" htmlFor="gender">
                    Gender
                    <sup className="text-red-500"> *</sup>
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-indigo-300 text-sm font-bold mb-2" htmlFor="appointment_date">
                    Appointment Date
                    <sup className="text-red-500"> *</sup>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="appointment_date"
                    required
                    type="date"
                    value={formData.appointment_date}
                    onChange={(e) => setFormData({...formData, appointment_date: e.target.value})}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Book Appointment
                </button>
            </div>
        </form>

    </div>
  )
}

export default Form