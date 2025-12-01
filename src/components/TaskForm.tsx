import React, { useState } from 'react';
import type { Task } from '../interfaces/Task';

interface TaskFormProps {
    addTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [title, setTitulo] = useState('');
    const [description, setDescripcion] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            const id = Math.floor(Math.random() * 1000);
            const newTask: Task = {
                id,
                title,
                description,
                status: 'pendiente',
            };
            addTask(newTask);

            setTitulo('');
            setDescripcion('');
        } catch (error) {
            console.error('Error al crear tarea:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción"
            />
            <button type="submit">Crear</button>
        </form>
    );
};

export default TaskForm;
