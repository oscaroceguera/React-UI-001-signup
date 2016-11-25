import React from 'react'
import { Input } from './styles.css'

const { string } = React.PropTypes

InputComponent.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired
}

function InputComponent ({id, type, placeholder}) {
  return (
    <div className={Input}>
      <input
        id={id}
        autoComplete='false'
        required
        type={type}
        placeholder={placeholder}/>
      <label htmlFor={id}></label>
    </div>
  )
}

export default InputComponent
