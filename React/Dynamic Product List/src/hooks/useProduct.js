import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useProduct = () => {
  const [product , setProduct] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
  const fetchData = async()=>{
  try {
   const response  = await axios.get("/product.json")
   console.log(response.data)
   setProduct(response.data)
   setLoading(false)
  } catch (error) {
   console.log("Something Went Wrong" , error)
   setLoading(false)
  }
  }
  fetchData()
  },[])
  return {product ,loading ,setProduct }
}

export default useProduct
