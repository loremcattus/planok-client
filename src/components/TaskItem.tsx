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
            <button className="delete-btn" onClick={handleDelete} aria-label="Eliminar tarea" title="Eliminar tarea">✖</button>
            <label className="task-content">
                <strong>{task.title}{task.description && ':'}</strong>
                {task.description && task.description}
                <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                    onChange={handleToggleStatus}
                    name="togglestatus"
                    aria-label="Marcar tarea como completada"
                />
            </label>
        </li>
    );
};

export default TaskItem;
