import React from 'react'
import { GRID } from '../theme'

const style = {
    paddingLeft: GRID * 6.5,
}

const Output = (props) => {
    return (
        <div style={ style }>
            { props.children }
        </div>
    )
}

export default Output
