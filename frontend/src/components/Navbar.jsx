import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'; 
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { user } = useContext(AuthContext);
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    }
  
  return (
    <div className="flex w-full justify-between items-center bg-gray-700 text-white py-4 px-6 gap-2">
      <div className="flex justify-center items-center gap-4">
         <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Dentist Appointment</h1>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-300 font-bold text-lg md:text-xl lg:text-2xl" 
          : "text-white font-bold text-lg md:text-xl lg:text-2xl"}>
            Home
          </NavLink>
      </div>
      
      <div className="flex gap-4 justify-center items-center">
         {!user ? (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-gray-300" : "text-white"}>
              Login
            </NavLink>
            <NavLink to="/signup" className={({ isActive }) => isActive ? "text-gray-300" : "text-white"}>
              Signup
            </NavLink>
          </>
         ) : (
          <>
            <button  onClick={logoutHandler} className="text-gray-300 hover:text-white cursor-pointer">
              Logout
            </button>
          </>
         )}
        <NavLink to="/dentists" className={({ isActive }) => isActive ? "text-gray-300" : "text-white"}>
              Dentists
        </NavLink>
        {user && user?.accountType === "Admin" && (
          <div className="flex gap-4 justify-center items-center">
                <NavLink to='/appointments' className={({ isActive }) => isActive ? "text-gray-300" : "text-white"}>
                    Appointments
                </NavLink>
                <NavLink to="/add-dentist" className={({ isActive }) => isActive ? "text-gray-300" : "text-white"}>
                    <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Dentist
                    </button>
                </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar