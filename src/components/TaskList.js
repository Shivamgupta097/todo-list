import React from 'react';
import Tasks from './Tasks';

const TaskList = ({ tasks, handleDelete, handleEdit }) => {
    return (
        <ul>
            {
                tasks.map((cur) => (
                    <Tasks cur={cur} handleEdit={handleEdit} handleDelete={handleDelete} key={cur.id} />
                ))
            }
        </ul>
    )
}

export default TaskList