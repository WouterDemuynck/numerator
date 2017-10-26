import React from 'react'
import Console from '../../components/Console'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        items: state.console.items,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Console)