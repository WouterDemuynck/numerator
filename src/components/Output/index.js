import React from 'react'
import { GRID } from '../theme'

const style = {
    padding: `0 ${ GRID * 6.5 }px`,
}

const Output = (props) => {
    return (
        <div style={ style }>
            { props.children }
        </div>
    )
}

export default Output
