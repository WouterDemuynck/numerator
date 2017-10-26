import React from 'react'

const style = {
    fontFamily: 'Menlo, Monaco, \'Courier New\', monospace',
    fontSize: 12,
    padding: 24,
    margin: 0,
    border: 0,
    backgroundColir: 'transparent',
    outline: 'none',
    flex: 1,
}

const InputBox = (props) => {
    const { value, onChange, onSubmit } = props
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            console.log('ENTER')
            onSubmit && onSubmit(e)
        }
    }
    return (
        <input autoFocus value={ value } onKeyDown={ handleKeyDown } onChange={ onChange } type='text' style={ style } />
    )
}

export default InputBox
