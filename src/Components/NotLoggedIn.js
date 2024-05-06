import React from 'react'

const NotLoggedIn = ({loggedIn,setLoggedIn}) => {
  return (
   <>
   <h1>Please enter valid credentials</h1>
   <button onClick={()=>{setLoggedIn(!loggedIn)}}>Login</button>
   </>

    )
}

export default NotLoggedIn