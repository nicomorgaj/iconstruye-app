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


### 🧩 Explicación de la Arquitectura

La **Arquitectura Hexagonal** tiene como objetivo permitir que el **dominio** (modelos y reglas de negocio) sea **independiente** de tecnologías externas (servidores web, bases de datos, archivos, etc).  
Esto facilita la escalabilidad, la mantenibilidad y la capacidad de prueba del software.

Se compone de:

- **Dominio**: Define las entidades principales (DTE, URL, Token) y sus reglas.
- **Aplicación**: Contiene los casos de uso o servicios que orquestan la lógica de negocio.
- **Infraestructura**: Implementa adaptadores para exponer el dominio al exterior (API REST, persistencia en archivos, etc.).

---

### 📂 Detalle de Carpetas

#### `application/services/`
Contiene la lógica de los **servicios de aplicación**:
- `DteService.js`: Gestión de los documentos tributarios electrónicos (DTEs).
- `TokenService.js`: Generación y validación de **tokens** para controlar número de usos, validez y expiración de las URLs.
- `UrlService.js`: Creación, gestión y validación de los **ShortURLs**.

#### `assets/DTE/`
Carpeta que simula la existencia de documentos tributarios electrónicos reales.
- `F437T33.xml`: Ejemplo de un archivo DTE en formato XML.

#### `config/`
Configuración base del servidor Express y de la aplicación.
- `index.js`: Archivo principal de configuración.

#### `domain/models/`
Define los **modelos de dominio** puros:
- `Dte.js`: Representa un DTE con su metadata esencial.
- `Url.js`: Representa un ShortURL.
- `Token.js`: Representa un token JWT asociado a una URL para control de acceso seguro, incluyendo expiración y conteo de usos.

#### `infrastructure/db/`
Persistencia simulada utilizando archivos JSON:
- `Dte.json`: Base de datos en memoria que almacena los documentos DTE disponibles.

#### `infrastructure/express/routes/`
Define los **endpoints HTTP** expuestos hacia el exterior:
- `dteRoutes.js`: Rutas relacionadas con la gestión de DTEs.
- `shortRoutes.js`: Rutas para crear y consumir ShortURLs.
- `urlRoutes.js`: Rutas adicionales para la gestión de URLs y validaciones.
- `server.js`: Archivo que configura y levanta las rutas en Express.

#### `infrastructure/fileSystem/`
Implementación de repositorios que acceden al sistema de archivos:
- `DteRepository.js`: Manejo de operaciones de lectura de la Base de datos en memoria de los DTEs.
- `UrlRepository.js`: Manejo de operaciones de lectura de los archivos XML que serán visualizados utilizando los ShortURLs.

---

## 🧠 Funcionalidad Principal por Módulo

- **DTEs**: Gestiona el listado y recuperación de Documentos Tributarios Electrónicos.
- **URLs**: Permite la generación de enlaces cortos seguros para los DTEs.
- **Tokens**: Valida la autenticidad, controla el número de accesos y gestiona expiraciones de los ShortURLs.

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
