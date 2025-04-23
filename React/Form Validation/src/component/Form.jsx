import React, { useState } from 'react';

const Form = () => {
   const [name ,setName] = useState("")
   const [email ,setEmail] = useState("")
   const [password , setPassword] = useState("")
   const [gender , setGender] = useState("")

const handleSubmit = (e) =>{
   e.preventDefault()
   const userData = {name,email,password,gender}
   console.log(userData)
   setEmail("")
   setName("")
   setPassword("")
   setGender("")

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
      placeholder="Enter Your Name..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="email"
      placeholder="Enter Your Email Id..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Enter Your Password"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <select
      className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
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
