import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserView from './pages/UserView'
import Form from './components/Form'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoute from './components/Auth/PrivateRoute'
import OpenRoute from './components/Auth/OpenRoute'
import AddDentist from './components/AddDentist'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center  px-4 py-6">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" 
              element={
                <OpenRoute>
                   <Login/>
                </OpenRoute>
              }/>
            <Route path="/signup" 
            element={
                <OpenRoute>
                   <Signup/>
                </OpenRoute>
              }/>
            <Route path="/dentists" element={<PrivateRoute><UserView/></PrivateRoute>}/>
            <Route path="/book-appointment/:id" element={<PrivateRoute><Form/></PrivateRoute>}/>
            {user && user.accountType === "Admin" && (
              <>
                <Route path="/appointments" element={<AdminPage/>}/>
              <Route path="/add-dentist" element={<AddDentist/>}/>
              </>
              
            )}
        </Routes>
    </div>
  )
}

export default App
