import React from 'react'
import Img from '../images/img.png'
import Attach from '../images/attach.png'

const input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Digite algo' />
      <div className='send'>
        <img src={Attach} alt="" />
        <input type="text" style={{display: "none"}} id = "file"/>
        <label htmlFor='file'>
          <img src={Img} alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default input