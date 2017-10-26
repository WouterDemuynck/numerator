import React from 'react'
import InputBox from '../InputBox'
import IconButton from '../IconButton'

const style = {
    borderTop: `solid 1px rgba(0,0,0,0.12)`,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}

const Input = (props) => {
    const { value, onAccept, onChange } = props
    const valid = !!value.trim()
    const acceptValue = () => {
        if (valid) {
            onAccept(value)
        }
    }
    return (
        <div style={ style }>
            <InputBox onSubmit={ acceptValue } value={ value } onChange={ (e) => onChange(e.target.value) } />
            <IconButton disabled={ !valid } size={ 20 } type='calc' onClick={ acceptValue } />
        </div>
    )
}

export default Input
