# Guía de Instalación y Uso

## Antes de comenzar

Asegúrate de tener instalado lo siguiente:

- **Node.js** (v14 o superior)
- **npm** (gestor de paquetes de Node.js)

## 🛠️ Instalación

1. Clona el repositorio en tu máquina local:

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo para compilar Tailwind CSS:

    ```bash
    npm run tailDev
    ```

    Esto observará los cambios en el archivo `tailwind.css` y generará el archivo `estilos.css` en tiempo real.

## ✨ Uso

- Abre el archivo `index.html` en tu navegador para ver el proyecto.
- Usa el comando `npm run tailDev` para compilar los estilos mientras trabajas.


## 📂 Estructura del Proyecto


├── src/
│   ├── css/
│   │   ├── tailwind.css   # Archivo fuente para Tailwind
│   │   ├── estilos.css    # Archivo compilado (generado automáticamente)
│   ├── js/
│   │   └── app.js         # Scripts del proyecto
│   ├── design/            # Carpeta de imágenes y logos
│   │   └── logo.png       # Logo del proyecto
│   └── index.html         # Página principal
│   └── style-guide.md     # Documentación del estilo
├── node_modules/          # Dependencias instaladas
├── package.json           # Configuración del proyecto
├── tailwind.config.js     # Configuración de Tailwind
└── README.md              # Documentación del proyecto





