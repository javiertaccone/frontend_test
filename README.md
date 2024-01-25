# Front-end Test

Para ver la aplicación ya desplegada https://frontend-test.vercel.app/

## Descripción 
    Desarrollo de una SPA con react, esta aplicación consta
    de 2 vistas, Product List Page y Product Details Page

    Instrucciones de instalación
    Clonar el repositorio.
    Ejecutar npm install para instalar las dependencias.
    Instrucciones de uso

## Acceso a la API 
    Se usó axios para las peticiones

    La URL de la API se guarda en .env.local, es el mismo
    para todos los endpoints

- **Obtener listado de productos**

    Path
    GET /api/product

    Response
    [
        {
            id: 0001,
            ...
        },
        {
            id: 0002,
            ...
        }
    ]

- **Obtener Detalle de producto**

    Path
    GET /api/product/:id

    Response
    {
        id: 0001,
        ...
    }

- **Añadir producto a la cesta**

    Path
    POST /api/cart

    Body
    {
        id: 0001,
        colorCode: 1,
        storageCode: 2
    }

    Response
    {
        count: 1
    }

## Dependencias

- **axios:** Utilizado para hacer peticiones HTTP.
- **bootstrap:** Para el diseño para estilos y componentes.
- **react:** Biblioteca para construir interfaces de usuario.
- **react-dom:** Funcionalidades específicas para el DOM con React.
- **react-router-dom:** Enrutamiento para aplicaciones React.

## Dependencias de Desarrollo

- **@types/react:** Tipos TypeScript para React.
- **@types/react-dom:** Tipos TypeScript para react-dom.
- **@vitejs/plugin-react:** Plugin Vite para React.
- **eslint:** Herramienta para linting de código.
- **eslint-plugin-react:** Reglas de linting específicas para React.
- **eslint-plugin-react-hooks:** Reglas de linting para ganchos de React.
- **eslint-plugin-react-refresh:** Integración de ESLint con React Refresh.
- **vite:** Herramienta de construcción rápida para proyectos front-end con React.

## Scripts

-   **npm run START**
    Iniciar la aplicación en modo desarrollo

-   **npm run BUILD**
    Compilar la aplicación para modo producción

-   **npm run TEST**
    Ejecutar las pruebas unitarias

-   **npm run LINT**
    Comprobar el código con ESLint

    Más información sobre los scripts de Vite en https://vitejs.dev/guide/basics#scripts

## Contacto
    Para cualquier duda, feedback o sugerencia me pueden contactar por correo
    javiertaccone@gmail.com
    Javier Taccone
