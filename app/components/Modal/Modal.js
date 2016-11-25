import React from 'react'
import { Modal, ModalForm } from './styles.css'
import Input from '../Input/Input'

const { func } = React.PropTypes
ModalComponent.propTypes = { onSubmit: func.isRequired }

function ModalComponent ({ onSubmit }) {
  return (
    <div className={Modal}>
      <form onSubmit={onSubmit} className={ModalForm}>
        <Input
          id='name'
          type='text'
          placeholder='Oscar Eduardo Oceguera'/>
        <Input
          id='username'
          type='text'
          placeholder='oscar@email.com'/>
        <Input
          id='password'
          type='password'
          placeholder='password'/>
        <button>
          Log in <i className='fa fa-fw fa-chevron-right'></i>
        </button>
      </form>
    </div>
  )
}

export default ModalComponent
