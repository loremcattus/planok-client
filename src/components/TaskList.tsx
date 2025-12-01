import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../interfaces/Task';

interface TaskListProps {
    tasks: Task[];
    toggleTaskStatus: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskStatus, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
