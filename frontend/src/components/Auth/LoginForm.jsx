import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useContext} from "react"
import { AuthContext } from "../../context/AuthContext"


function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
   const { setUser } = useContext(AuthContext);
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  async function loginUser() {
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data = await response.json()
        localStorage.setItem("token",data.token)
        setUser(data.user);
        toast.success(data.message)
        navigate("/")
    }catch(error){
        console.error("Login error:", error)
        toast.error("An error occurred while logging in")
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-blue-300 p-4 mt-2">
     <h1 className="text-2xl font-bold mb-4">Login to Your Account</h1>
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4 justify-center max-width-[400px] padding-[30px] rounded-lg"
    >
      <label className="w-full max-w-100">
        <p className="mb-1 text-black-500  font-medium">
          Email Address <sup className="text-pink-300"> *</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder=" Enter email address"
          className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="w-full max-w-100">
        <p className="mb-1 text-black-500 font-medium">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder=" Enter Password"
          className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-lg bg-[#2563eb] py-2 px-3 font-medium text-white hover:bg-[#1e40af] cursor-pointer"
      >
        Sign In
      </button>
    </form>
    </div>
  )
}

export default LoginForm