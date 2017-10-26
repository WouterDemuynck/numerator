import React from 'react'
import { GRID, PRIMARY_TEXT, HINT_TEXT } from '../theme'

const style = {
    fontFamily: 'Menlo, Monaco, \'Courier New\', monospace',
    fontSize: 12,
    padding: `${ GRID }px 0`,
    margin: 0,
    border: 0,
    backgroundColir: 'transparent',
    outline: 'none',
    flex: 1,
    color: PRIMARY_TEXT,
}

const InputBox = (props) => {
    const { value, onChange, onSubmit } = props
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            console.log('ENTER')
            onSubmit && onSubmit(e)
        }
    }
    const computedStyle = {
        ...style,
        opacity: value ? 1 : 0.5,
    }
    return (
        <input placeholder='Numerate' autoFocus value={ value } onKeyDown={ handleKeyDown } onChange={ onChange } type='text' style={ computedStyle } />
    )
}

export default InputBox
