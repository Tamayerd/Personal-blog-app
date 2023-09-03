import React, { useContext } from 'react'
import { Authority } from '../Context/AuthProvider'
import { Outlet } from 'react-router-dom'



export default function LoginRequired() {
    const { user } = useContext(Authority)



  return (
    <>
      {
        user !== null
    ?
    <Outlet></Outlet>
    :
    <h1>Burayı görebilmen için giriş yap</h1> 
      }
    </>
  )
}
