import React from 'react'
import { APP_BACKGROUND } from '../theme'

const style = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
}

class Layout extends React.Component {
    componentWillMount() {
        document.body.style.backgroundColor = APP_BACKGROUND
    }
    render() {
        return (
            <div style={ style }>
                { this.props.children }
            </div>
        )
    }
}

export default Layout
