import React from 'react'
import Input from '../../components/Input'
import { connect } from 'react-redux'
import { addToNumerator, changeInput } from '../../actions'

const mapStateToProps = (state) => {
    return {
        value: state.input.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAccept: (value) => dispatch(addToNumerator(value)),
        onChange: (value) => dispatch(changeInput(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)