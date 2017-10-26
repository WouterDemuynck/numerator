import React from 'react'
import Layout from './Layout'
import ConsoleContainer from '../containers/ConsoleContainer'
import InputContainer from '../containers/InputContainer'

export default (props) => {
    return (
        <Layout>
            <ConsoleContainer />
            <InputContainer />
        </Layout>
    )
}
