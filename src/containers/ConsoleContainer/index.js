import React from 'react'
import Console from '../../components/Console'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

    let lastStatements
    let lastResults
    let lastItems = []

    return (state ) => {
        const { statements, results } = state
    
        if (statements !== lastStatements || results !== lastResults) {
            
            lastStatements = statements
            lastResults = results

            lastItems = lastStatements.map((statement, index) => {
                return {
                    value: statement,
                    ...(lastResults[index] || { type: 'pending' }),
                }
            })

        }

        return {
            items: lastItems
        }
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Console)