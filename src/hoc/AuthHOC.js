import React from 'react'
import UnAuthenticated from './UnAuthenticated'

export default function AuthHOC(props) {
    const userId=localStorage.getItem("id")
    const token=localStorage.getItem("token")
   
    if(!userId || !token){
       return <UnAuthenticated/>
    }
  return (
    <div>
        {props.children}
    </div>
  )
}
