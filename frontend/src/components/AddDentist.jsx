import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddDentist() {
    const [formData, setFormData] = useState({
        image: null,
        name: "",
        qualification: "",
        years_of_experience: "",
        clinic_name: "",
        address: "",
        location: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("image", formData.image);
            formDataToSend.append("name", formData.name);
            formDataToSend.append("qualification", formData.qualification);
            formDataToSend.append("years_of_experience", formData.years_of_experience);
            formDataToSend.append("clinic_name", formData.clinic_name);
            formDataToSend.append("address", formData.address);
            formDataToSend.append("location", formData.location);
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/addDentist`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formDataToSend
            });

            if (response.ok) {
                const result = await response.json();
                toast.success(result.message);
                navigate("/dentists");
            } else {
                toast.error("Failed to add dentist");
            }
        } catch (error) {
            console.error("Error adding dentist:", error);
            toast.error("An error occurred while adding the dentist");
        }
    };


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add New Dentist</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                        <p className='text-gray-700'>Photo</p>
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        <p className='text-gray-700'>Name<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="qualification">
                        <p className='text-gray-700'>Qualification<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="years_of_experience">
                        <p className='text-gray-700'>Years of Experience<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="number"
                        id="years_of_experience"
                        name="years_of_experience"
                        value={formData.years_of_experience}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="clinic_name">
                        <p className='text-gray-700'>Clinic Name<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="text"
                        id="clinic_name"
                        name="clinic_name"
                        value={formData.clinic_name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                        <p className='text-gray-700'>Address<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                        <p className='text-gray-700'>Location<sup className='text-red-500'> *</sup></p>
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Dentist
                </button>
            </form>
        </div>
    );
}

export default AddDentist;