export interface Task {
    id: number;
    titulo: string;
    descripcion?: string;
    status: 'pendiente' | 'completada';
}