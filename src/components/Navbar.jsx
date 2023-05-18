import React, {useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from './../Context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);


  return (
    <div className='navbar'>
      <span className='logo'>Chat online</span>
      <div className='user'>
        <img src={currentUser.photoUrl} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar