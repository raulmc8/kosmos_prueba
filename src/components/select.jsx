import React from 'react'
import {v4 as uuid} from 'uuid'

export default function Select({  name,  labelText, handleChange, ...props }) {
  return (
    <div>
        <label className='text-xl' htmlFor= {uuid()} > {labelText} </label>
        <select  id={uuid()} name={name}  onChange={handleChange} {...props}>
            <option value={0} >Selecciiona opcion</option>
        </select> 
    </div>
  )
}
