import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addText } from 'src/actions/todo'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
        }
    }
    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.inputText === "") {
            return;
        }
        const check = this.props.allText.find((item) => item.text === this.state.inputText)
        if (check) {
            alert('duplicate')
            return
        }
        this.setState({ inputText: '' })
        this.props.addText(this.state.inputText)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui input">
                        <input type='text' onChange={this.handleChange} value={this.state.inputText} />
                    </div>
                    <button type='submit' className='ui button primary' > Add </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { allText: state.allTexts }
}

export default connect(mapStateToProps, { addText })(AddTodo);