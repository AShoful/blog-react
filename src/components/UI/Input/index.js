import React from 'react'
import classes from './Input.module.css'



const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input, classes[props.size]]
  const htmlFor = `${inputType}-${Math.random()}`

  

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        name = {props.name}
        onChange={props.onChange}
        autoComplete='foo'
        />
    </div>
  )
}

export default Input