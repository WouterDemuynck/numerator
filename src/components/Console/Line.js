import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT } from '../theme'

const style = {
    color: PRIMARY_TEXT,
    fontSize: FONT_SIZE,
    padding: `${ GRID }px ${ GRID * 6 }px ${ GRID }px ${ GRID * 6.5 }px`,
}
const secondaryStyle = {
    fontSize: FONT_SIZE * 0.85,
    color: SECONDARY_TEXT,
    padding: `${ 0 }px ${ GRID * 6 }px ${ GRID }px ${ GRID * 6.5 }px`,
}
const errorStyle = {
    fontSize: FONT_SIZE * 0.85,
    color: '#F44336',
    padding: `${ 0 }px ${ GRID * 6 }px ${ GRID }px ${ GRID * 6.5 }px`,
}

const Info = (props) => {

    const compoutedStyle = {
        ...style,
        ...(props.secondary ? secondaryStyle : undefined),
        ...(props.error ? errorStyle : undefined),
    }
    
    return <div style={ compoutedStyle }>{ props.text }</div>
}

export default Info
