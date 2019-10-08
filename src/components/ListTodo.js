import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editText, deleteText } from 'src/actions/todo'
import Row from 'src/components/Row'

class ListTodo extends Component {
    handleSave = (index, newText) => {
        const check = this.props.allText.find((item) => item.text === newText)
        if (check) {
            alert("duplicate")
            return;
        }
        this.props.editText(index, newText)
    }
    handleDelete = (index) => {
        this.props.deleteText(index)
    }
    render() {
        const { allText } = this.props
        return (
            <div className='ui divided list'>
                {allText.map((item) => {
                    return (
                        <Row key={item.key} text={item.text} index={item.key} onSave={this.handleSave} onDelete={this.handleDelete} />


                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { allText: state.allTexts }
}
export default connect(mapStateToProps, { editText, deleteText })(ListTodo);