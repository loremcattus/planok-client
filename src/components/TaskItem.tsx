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
        <li className={task.status === 'completed' ? 'completada' : ''}>
            <button className="delete-btn" onClick={handleDelete}>✖</button>
            <div className="task-content" onClick={handleToggleStatus}>
                <span>
                    <strong>{task.title}</strong>
                    {task.description && `: ${task.description}`}
                </span>
                <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                />
            </div>
        </li>
    );
};

export default TaskItem;
