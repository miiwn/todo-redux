import React from 'react'
import { connect } from 'react-redux'


const HistoryList = ({ allLogs }) => {
    const renderList = () => {
        return allLogs.map((log, index) => {
            return (
                <div className='item' key={index}>
                    <div className='content'>Type: {log.type} </div>
                    <div className='content'>Text:{log.text}</div>
                </div>
            )
        })
    }
    if (!allLogs.length) {
        return <div> No history </div>
    }
    return (
        <div>
            <h3> History </h3>
            <div className="ui divided items">
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { allLogs: state.logs }//can use another name     
}
export default connect(mapStateToProps)(HistoryList)