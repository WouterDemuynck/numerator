import React from 'react'

const style = {
    border: `solid 1px rgba(0,0,0,0.12)`,
    margin: 16,
    display: 'flex',
    flexDirection: 'column',
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
