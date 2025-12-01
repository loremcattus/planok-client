import React from 'react';
import type { Task } from '../interfaces/Task';

interface TaskItemProps {
    task: Task;
    toggleTaskStatus: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskStatus, deleteTask }) => {
    const handleToggleStatus = () => {
        toggleTaskStatus(task.id);
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    return (
        <li>
            <button onClick={handleDelete}>✖</button>
            <label>
                <span>
                    <strong>{task.title}</strong>
                    {task.description && `: ${task.description}`}
                </span>
                <input
                    type="checkbox"
                    checked={task.status === 'completada'}
                    onChange={handleToggleStatus}
                />
            </label>
        </li>
    );
};

export default TaskItem;
