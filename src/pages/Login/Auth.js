import React from 'react'
import Login from './Login'
import { useLocation } from 'react-router-dom'
import SignUp from './SignUp'

export default function AuthLogin() {
  const url=useLocation()
  console.log(url)
  const isLogin=(url.pathname=='/login')
  console.log(isLogin)
  return (
    <div>
        {isLogin && <Login/>}
        {!isLogin && <SignUp/>}
    </div>
  )
}
