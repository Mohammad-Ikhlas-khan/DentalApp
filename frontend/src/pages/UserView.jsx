import React from 'react';
import { useState,useEffect } from 'react';
import  Dentist  from '../components/Dentist'

function UserView() {
  const [dentists,setDentists]=useState([]);
  async function fetchData(){
    try{
      const response=await fetch(`${import.meta.env.VITE_BASE_URL}/dentists`);
      if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
      }
      const data=await response.json();
      console.log(data.data);
      setDentists(data.data);
    }
    catch(error){
        console.error(error.message);
    }
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <div className="w-full min-h-screen mx-auto my-auto p-6 rounded-lg shadow-md gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
           {
            dentists.map((dentist)=>(
              <Dentist key={dentist._id} dentist={dentist}/>
            ))
           }
        </div>
    </div>
  )
}

export default UserView;