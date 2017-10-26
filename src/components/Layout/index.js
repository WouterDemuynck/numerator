import React from 'react'

const style = {
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 24,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
}

const Layout = (props) => {
    return (
        <div style={ style }>
            { props.children }
        </div>
    )
}

export default Layout
