import React from 'react'
import {v4 as uuid} from 'uuid'

export default function Input({  name, type, labelText, handleChange, placeHolder , ...props }) {
  return (
    <div>
       <label htmlFor= {uuid()} > {labelText} </label>
       <input type={type} id={uuid()} name = {name} placeholder = {placeHolder}  onChange = {handleChange} {...props}/> 
      
    </div>
  )
}
