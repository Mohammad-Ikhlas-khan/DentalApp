import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ACCOUNT_TYPE } from "../../utils/constants"

function SignupForm() {
  const navigate = useNavigate()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.USER)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })


  const { name, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }
    
    // API call to register user
    fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message)
          // Reset
        setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        })
        setAccountType(ACCOUNT_TYPE.USER)
        navigate("/login")
        } else {
          toast.error(data.message)
        }
        });
  }

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-blue-300 p-4 mt-2">
      <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
      <form onSubmit={handleOnSubmit} 
         className="flex w-full flex-col gap-y-4 justify-center  max-width-[400px] padding-[30px] rounded-lg">
        <div>
           <label className="w-full max-w-100">
                <p className="mb-1 text-black-500 font-medium">
                Account Type <sup className="text-pink-200">*</sup>
               </p>
                <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                >
                <option value={ACCOUNT_TYPE.USER}>User</option>
                <option value={ACCOUNT_TYPE.ADMIN}>Admin</option>
                </select>
           </label>
        </div>
        <div className="flex gap-x-4">
          <label className="w-full max-w-100">
            <p className="mb-1 text-black-500 font-medium">
              Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter name"
              className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <label className="w-full max-w-100">
          <p className="mb-1 text-black-500 font-medium">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="w-full max-w-100">  
            <p className="mb-1 text-black-500 font-medium">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="w-full max-w-100">
            <p className="mb-1 text-black-500 font-medium">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full border border-gray-300 rounded-md py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 rounded-lg bg-yellow-50 py-2 px-3 font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm