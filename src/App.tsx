import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import type { Task } from './interfaces/Task';

const API_URL = import.meta.env.VITE_API_URL;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    let cancelled = false;

    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_URL}/api/tasks`);

        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }

        const data: Task[] = await res.json();

        if (!Array.isArray(data)) {
          throw new Error('La respuesta no es un array');
        }

        if (!cancelled) {
          setTasks(data);
        }
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTasks();

    return () => {
      cancelled = true;
    };
  }, []);

  const addTask = async (newTask: Task) => {
    try {
      const res = await fetch(`${API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const json = await res.json();

      const createdTask: Task | undefined = json?.data?.task;
      if (!createdTask) {
        throw new Error("La respuesta no contiene 'data.task'");
      }

      setTasks((prev) => [...prev, createdTask]);
    } catch (error) {
      console.error('Error al crear tarea:', error);
    }
  };


  const toggleTaskStatus = async (taskId: number) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const updatedStatus =
      task.status === 'pending' ? 'completed' : 'pending';

    try {
      const res = await fetch(`${API_URL}/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus }),
      });

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const json = await res.json();

      const updatedTask: Task | undefined = json?.data?.task;

      if (!updatedTask) {
        throw new Error("La respuesta no contiene 'data.task'");
      }

      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? updatedTask : t))
      );
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };


  const deleteTask = async (taskId: number) => {
    try {
      const res = await fetch(`${API_URL}/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const json = await res.json();

      if (!json?.message) {
        console.warn("La respuesta no contiene un mensaje esperado");
      }

      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };


  return (
    <main>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      )}
    </main>
  );
};

export default App;
