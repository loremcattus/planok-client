# Configuración del Proyecto

Este proyecto está configurado para ser utilizado como entorno de desarrollo. A continuación, se detallan los pasos básicos para montar el proyecto:

## Pasos para configurar el proyecto

1. **Copiar el archivo de configuración de entorno:**
   - Copia el archivo `.env.example` y renómbralo como `.env`.
   - Asegúrate de configurar las variables de entorno según sea necesario.

2. **Construir los contenedores:**
   - Ejecuta el siguiente comando para construir las imágenes de Docker:
     ```bash
     docker compose build
     ```

3. **Levantar los servicios:**
   - Inicia los servicios definidos en el archivo `docker-compose.yml` con el siguiente comando:
     ```bash
     docker compose up
     ```

4. **Acceder a la aplicación:**
   - Una vez que los servicios estén en funcionamiento, puedes acceder a la aplicación en tu navegador web en la siguiente URL por defecto:
     ```
     http://localhost:5173
     ```

## Requisitos previos

- **Docker y Docker Compose:** Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Puedes consultar la [documentación oficial de Docker](https://docs.docker.com/get-docker/) para más detalles sobre la instalación.

## Notas adicionales

- Si realizas cambios en el código fuente y deseas reflejarlos en los contenedores, es posible que necesites reconstruir las imágenes utilizando el comando `docker compose build` nuevamente.
- Para detener los servicios, utiliza el comando:
  ```bash
  docker compose down
  ```
- Si necesitas ejecutar comandos dentro de un contenedor en ejecución, puedes usar:
  ```bash
  docker exec -it <nombre_del_contenedor> /bin/bash
  ```

Para más información, consulta la documentación del proyecto o el archivo `docker-compose.yml`.

## Testing

Este proyecto incluye una prueba E2E utilizando Playwright. A continuación se explican los pasos para ejecutar el testing.

### Prueba disponible

El test disponible es el siguiente: `tests/test-todo-list.spec.ts`

Este test realiza una serie de interacciones en la aplicación de la lista de tareas. A continuación se explica su flujo:

1. Abre la aplicación en el navegador.

2. Verifica que la tarea "Pintar:toda la casa" no exista antes de la creación.

3. Crea una nueva tarea con el título "Pintar" y la descripción "toda la casa".

4. Marca la tarea como completada.

5. Elimina la tarea de la lista.

### Instrucciones para ejecutar los tests

#### 1. Levantar los servicios:

Si aún no lo has hecho, levanta los servicios con Docker para el backend.

#### 2. Instalar dependencias:
Si aún no has instalado las dependencias, ejecuta el siguiente comando:

```
npm install
```


#### 3. Ejecutar los tests de Playwright:
Para ejecutar los tests E2E con Playwright, usa el siguiente comando:

```
npx playwright test
```

Este comando ejecutará los tests en el entorno local (en este caso, apuntando a http://localhost:5174).

#### 4. Ver los resultados de los tests:
Una vez que los tests se hayan ejecutado, Playwright mostrará el resultado de cada test en la consola, indicando si pasaron o fallaron.

#### 5. Opciones adicionales:

Para ejecutar los tests en modo de depuración, puedes usar el siguiente comando, que abrirá el navegador y te permitirá inspeccionar los pasos:

```
npx playwright test --debug
```
