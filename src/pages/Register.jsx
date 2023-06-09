import React from 'react'
import add from "../images/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../firebase";
import { async } from '@firebase/util';
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
  const [err,setErr] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)


      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
              
            })
            await setDoc(doc(db, "users",res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, "userChats",res.user.uid), {});
            navigate("/");
          });
        }
      );

    }
    catch(err){
      setErr(true);
    }



  }


  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className='logo'>Online Chat</span>
            <span className='title'>Registar</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome'/>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={add} alt="" />
                    <span>Foto de perfil</span>
                </label>
                <button>Registrar</button>
                {err && <span> Algo deu errado</span>}
            </form>
            <p>Já tem uma conta? <Link to="/register">Login</Link></p>
        </div>
    </div>
  )
}

export default Register