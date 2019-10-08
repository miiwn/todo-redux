import React, { Component } from 'react'
import RowShow from 'src/components/RowShow'
import RowEdit from 'src/components/RowEdit'
import PropTypes from 'prop-types'


const propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
}

class Row extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false
        }
    }
    handleEdit = (editable) => {
        this.setState({ editable: editable })
    }
    handleSave = (index, newText) => {
        this.props.onSave(index, newText)
    }
    handleDelete = (index) => {
        this.props.onDelete(index)
    }
    render() {
        const { text, index } = this.props
        const { editable } = this.state
        if (editable) {
            return (
                <RowEdit text={text} index={index} onEdit={this.handleEdit} onSave={this.handleSave} />
            )
        }
        return (
            <RowShow text={text} index={index} onEdit={this.handleEdit} onDelete={this.handleDelete} />
        )
    }
}
Row.propTypes = propTypes

export default Row;