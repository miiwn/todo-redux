import React from 'react';
import AddTodo from 'src/components/AddTodo'
import ListTodo from 'src/components/ListTodo'
const Todo = () => {
    return (
        <div className='ui container grid'>
            <div className='ui row'>

                <AddTodo />
            </div>
            <div className='ui row'>
                <div className='column twelve wide'>
                    <ListTodo />
                </div>
            </div>
        </div>
    );
}

export default Todo;