import React from 'react';
import HistoryList from 'src/components/HistoryList'

const HistoryPage = () => {
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <HistoryList />
            </div>
        </div>
    );
}

export default HistoryPage;