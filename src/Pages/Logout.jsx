import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
const details = localStorage.getItem("userInfo")
const redirect = useNavigate()
if(details){
    localStorage.removeItem("userInfo")
   
}
redirect("/")
    return (
    <>
      
    </>
  )
}
