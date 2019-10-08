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
class RowEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: props.text
        }
    }

    handleCancel = () => {
        this.props.onEdit(false)
    }
    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
    }
    handleSubmit = (e, index) => {
        e.preventDefault()
        this.props.onEdit(false)
        this.props.onSave(index, this.state.inputText)
        this.setState({
            inputText: ''
        })

    }
    render() {
        const { index } = this.props
        const { inputText } = this.state
        return (
            <div className='item' key={index}>
                <form onSubmit={(e) => this.handleSubmit(e, index)}>
                    <div className='right floated content'>
                        <button className='ui button primary' disabled={inputText === ''}> Save</button>
                        <button type='button' className='ui button red' onClick={this.handleCancel}> Cancel</button>
                    </div>

                    <div className='content'>
                        <div className="ui input">
                            <input type='text' onChange={this.handleChange} value={inputText} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
RowEdit.propTypes = propTypes
RowEdit.defaultProps = defaultProps;

export default RowEdit;