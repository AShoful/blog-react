import React from 'react'
import classes from './Textarea.module.css'

const Textarea = props => {
  const TextareaRow = props.row || "8"
  const cls = [classes.Textarea, classes[props.size]]
  const htmlFor = `textarea-${Math.random()}`

  

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <textarea
        row={TextareaRow}
        id={htmlFor}
        value={props.value}
        name = {props.name}
        onChange={props.onChange}
        placeholder = {props.placeholder}
        />
    </div>
  )
}

export default Textarea