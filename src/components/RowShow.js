import React, { Component } from 'react'
import PropTypes from 'prop-types'


const propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    onEdit: PropTypes.func
}
const defaultProps = {
    onEdit: () => { }
}
class RowShow extends Component {

    handleEdit = (editable) => {
        this.props.onEdit(editable)

    }
    render() {
        const { text, index } = this.props
        return (
            <div className='item' key={index}>
                <div className='right floated content'>
                    <button onClick={() => this.handleEdit(true)} className='ui button primary'> Edit </button>
                    <button
                        className='ui button red'
                        onClick={() => this.props.onDelete(index)}
                    >
                        Delete
                    </button>
                </div>
                <div className='content'>
                    {text}
                </div>
            </div>
        )
    }
}
RowShow.propTypes = propTypes
RowShow.defaultProps = defaultProps;


export default RowShow;