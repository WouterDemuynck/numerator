import React from 'react'

const style = {
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 24,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    minHeight: '100%',
    height: '100%'
}

const Layout = (props) => {
    return (
        <div style={ style }>
            { props.children }
        </div>
    )
}

export default Layout
