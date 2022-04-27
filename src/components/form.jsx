import React, {useState} from 'react'
import Input from './input'
import { fields } from '../helpers/inputContent'
import Select  from './select'
//import {uuid} from 'uuid'

export default function Form() {
    const [inputInfo,setInputInfo] = useState({})
    const [isChecked, setIsChecked]=useState({
        text:false,
        radio:false,
        select:false
    })
  
    const handleData = (e) =>{
        if(e.target.attributes[1].nodeValue === 'checkbox') return setIsChecked({
            ...isChecked,
            [e.target.name]: e.target.checked
        })
        setInputInfo({
            ...inputInfo,
            [e.target.name]:e.target.value
        })
  }
  console.log(isChecked)
    return (
    <div>
        <div>
            <label htmlFor="text">text</label>
            <input name='text' onChange={handleData} type='checkbox'/>
        </div>
        <div>
            <label htmlFor="radio">radio</label>
            <input name='radio' onChange={handleData} type='checkbox'/>
        </div>
        <div>
            <label htmlFor="select">select</label>
            <input name='select' onChange={handleData} type='checkbox'/>
        </div>
        {fields.map((element,index)=>(
            element.type === 'select' ? isChecked.select === true ? <Select key={index} name={element.name} labelText={element.label}/> : null :
            element.type === 'radio' ? isChecked.radio === true ? <Input key={index} type={element.type} labelText={element.label} handleChange={handleData} name = {element.name}/> : null :
            element.type === 'text' ? isChecked.text === true ? <Input key={index} type={element.type} labelText={element.label} handleChange={handleData} name = {element.name}/> : null : null
        ))}
    </div>
  )
}
