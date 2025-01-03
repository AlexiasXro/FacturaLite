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

```plaintext
├── src/
│   ├── css/
│   │   ├── tailwind.css   # Archivo de entrada para Tailwind
│   │   ├── estilos.css    # Archivo generado con los estilos de Tailwind
│   ├── index.html         # Página principal
│   ├── js/
│   │   ├── scripts.js     # Scripts personalizados (si aplica)
├── package.json           # Configuración de npm y dependencias
├── postcss.config.js      # Configuración de PostCSS para Tailwind
├── tailwind.config.js     # Configuración personalizada de Tailwind
└── README.md              # Documentación del proyecto



