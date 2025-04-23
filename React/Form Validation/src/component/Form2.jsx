import React, { useState } from 'react';

const Form = () => {
   // const [name ,setName] = useState("")
   // const [email ,setEmail] = useState("")
   // const [password , setPassword] = useState("")
   // const [gender , setGender] = useState("")

   const [data , setData] = useState({
      name : "",
      email : "",
      password : "",
      gender : "" ,
   })

const handleSubmit = (e) =>{
   e.preventDefault()
   // const userData = {name,email,password,gender}
   console.log(data)
   // setEmail("")
   // setName("")
   // setPassword("")
   // setGender("")

}

const handleChange = (e)=>{
// console.log(e.target.name, e.target.value);
const {name, value} = e.target;

setData({...data,[name]: value})


}

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form
    className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>

    <input
      type="text"
      name="name"
      placeholder="Enter Your Name..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={data.name}
      // onChange={(e) => setName(e.target.value)}
      onChange={handleChange}
    />

    <input
      type="email"
      name='email'
      placeholder="Enter Your Email Id..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={data.email}
      // onChange={(e) => setEmail(e.target.value)}
      onChange={handleChange}
    />

    <input
      type="password"
      name='password'
      placeholder="Enter Your Password"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={data.password}
      // onChange={(e) => setPassword(e.target.value
      onChange={handleChange}
    />

    <select
    name='gender'
      className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      value={data.gender}
      // onChange={(e) => setGender(e.target.value)}
      onChange={handleChange}
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="transgender">Transgender</option>
    </select>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Submit Form
    </button>
  </form>
</div>

  );
};

export default Form;
