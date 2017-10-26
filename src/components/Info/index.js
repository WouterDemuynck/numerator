import React from 'react'

const style = {
    color: 'rgba(0,0,0,0.87)',
}
const secondaryStyle = {
    color: 'rgba(0,0,0,0.54)',
}
const errorStyle = {
    color: '#F44336'
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
