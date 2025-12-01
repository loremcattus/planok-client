import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import type { Task } from './interfaces/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks: Task[] = [];
        setTasks(tasks);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskStatus = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === 'completada' ? 'pendiente' : 'completada' }
          : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
    </main>
  );
};

export default App;
