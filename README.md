# IConstruye - Proyecto DTE ShortURL 🚀📑

![logo](https://github.com/user-attachments/assets/3bebc82d-8d47-41b0-a5bc-2db65fd33b4b)

### Resumen 🌟

Este proyecto es una aplicación de software que permite la generación de **enlaces cortos** (ShortURLs) de **Documentos Tributarios Electrónicos (DTE)** simulados en Chile, cumpliendo prácticas de **arquitectura hexagonal** para separar responsabilidades.

Está desarrollado usando **Node.js** y **Express** de manera modular, permitiendo:

- Crear ShortURLs asociados a un DTE.
- Validar expiración o máximo de usos.
- Redirigir al recurso original simulado.
- Contabilizar los accesos.

Además, se desarrolló una demo frontend en **Angular**, implementando un **Design System** y utilizando la librería de componentes **PrimeNG** para la construcción de la interfaz.

---

## 🚀 Tecnologías Utilizadas

- **Frontend**: Angular 19.2.8 🎨
- **Backend**: Node.js 18.20.4 + Express 4.21.2 🌐
- **Base de datos**: Archivo JSON en memoria (sin motor externo) 🧠
- **Otros**:
  - Arquitectura Hexagonal 🧩
  - Pruebas Unitarias (Jest) 🧪
  - Generación de URL Cortas utilizando Crypto 🔑
  - Validación y generación de Token utilizando JWT 🔐

---

## 📁 Estructura del Proyecto

- `/`: carpeta raíz donde se encuentra el proyecto frontend y backend.
- `server/`: contiene el desarrollo backend.

---

## 🛠 Instalación y Ejecución

Sigue los pasos a continuación para configurar y ejecutar el proyecto:

### 1️⃣ Clonar el Repositorio

```bash
$ git clone https://github.com/nicomorgaj/iconstruye-app.git
$ cd iconstruye-app
```

### 2️⃣ Instalación de Dependencias

```bash
$ npm install
```

### 3️⃣ Levantar el Servidor Backend

```bash
$ npm run start:server
```

El servidor estará disponible en: [http://localhost:3000](http://localhost:3000) 🌐

### 4️⃣ Ejecutar las Pruebas Unitarias

```bash
$ npm run test
```

### 5️⃣ Levantar el Proyecto Frontend Angular

```bash
$ ng serve
```

El servidor de desarrollo de Angular estará disponible en: [http://localhost:4200](http://localhost:4200) ⚡

## 👨‍💻 Desarrollado por

Este proyecto ha sido desarrollado por **Nicolás Morales** como parte del desafío de postulación para el cargo de **Desarrollador FullStack** en **IConstruye**. 🚀✨
