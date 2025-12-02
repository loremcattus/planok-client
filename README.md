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