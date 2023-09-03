import React, { useContext } from 'react'
import { Authority } from '../Context/AuthProvider'
import { Outlet } from 'react-router-dom'



export default function PermissionRequired() {
    const { user } = useContext(Authority);

  return (
    <>
        {
            user.role === "Admin"
            ?
            <Outlet></Outlet>
            :
            <h3>Admin değilsin</h3>
        }
    </>
  )
}
