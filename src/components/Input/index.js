import React from 'react'
import InputBox from '../InputBox'
import IconButton from '../IconButton'
import Icon from '../Icon'
import { GRID, INPUT_BACKGROUND, INPUT_SHADOW, MAX_WIDTH } from '../theme'

const style = {
    backgroundColor: INPUT_BACKGROUND,
    boxShadow: INPUT_SHADOW,
    borderTop: `solid 1px rgba(0,0,0,0.12)`,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'fixed',
    bottom: GRID * 3,
    left: 0,
    right: 0,
    maxWidth: MAX_WIDTH,
    margin: `0 auto`,
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
            <Icon padding={ 8 } size={ 20 } type='menu' />
            <InputBox onSubmit={ acceptValue } value={ value } onChange={ (e) => onChange(e.target.value) } />
            <IconButton disabled={ !valid } type='calc' onClick={ acceptValue } />
        </div>
    )
}

export default Input
