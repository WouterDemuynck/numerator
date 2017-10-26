import React from 'react'

class ScrollToBottom extends React.Component {
    componentDidMount() {
        this.scrollToBottom()
    }
    componentDidUpdate(prevProps) {
        if (React.Children.count(prevProps.children) !== React.Children.count(this.props.children)) {
            this.scrollToBottom()
        }
    }
    scrollToBottom() {
        if (this.node) {
            window.scrollTo(0, this.node.clientHeight)    
        }
    }
    render() {
        return (
            <div ref={ (node) => this.node = node }>
                { this.props.children }
            </div>
        )
    }
}

export default ScrollToBottom
