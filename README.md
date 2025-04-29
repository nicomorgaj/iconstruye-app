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

El proyecto sigue una estructura basada en **Arquitectura Hexagonal** (también conocida como Ports and Adapters), separando claramente la lógica de negocio del acceso a infraestructura y servicios externos.

La estructura principal es:

```
server/
├── application/services/
├── assets/DTE/
├── config/
├── domain/models/
├── infrastructure/
│   ├── db/
│   ├── express/routes/
│   └── fileSystem/
```

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
- `UrlRepository.js`: Manejo de operaciones de persistencia de ShortURLs, incluyendo su creación, validación de expiración y control de accesos.

---

## 🧠 Funcionalidad Principal por Dominio

- **DTEs**: Gestiona el listado y recuperación de Documentos Tributarios Electrónicos.
- **URLs**: Permite la generación de enlaces cortos seguros para los DTEs.
- **Tokens**: Valida la autenticidad, controla el número de accesos y gestiona expiraciones de los ShortURLs.

---

## 🧪 Pruebas Unitarias

Todas las pruebas unitarias se encuentran en el directorio `server/test`.  
Cada parte de la arquitectura cuenta con pruebas específicas para asegurar su funcionalidad.

### 📂 Cobertura de Pruebas por Dominio

- **DTEs**
  - Valida la correcta recuperación y listado de Documentos Tributarios Electrónicos (DTEs).
  - Prueba el manejo de errores para DTEs inexistentes y distintos escenarios de búsqueda.

- **URLs**
  - Asegura la generación segura y única de enlaces cortos para los DTEs.
  - Valida los datos de entrada y el manejo de errores durante el proceso de acortamiento.
  - Verifica la configuración de expiración y el acceso seguro a los enlaces.

- **Tokens**
  - Verifica la autenticidad de los tokens y el control correcto del número de accesos permitidos.
  - Prueba el comportamiento de expiración de tokens.
  - Asegura el rechazo de accesos con tokens inválidos o expirados.

---

## 🛠 Instalación y Ejecución

Sigue los pasos a continuación para configurar y ejecutar el proyecto:

### 1️⃣ Clonar el Repositorio

```bash
$ git clone https://github.com/nicomorgaj/iconstruye-app.git
$ cd iconstruye-app
```

### 2️⃣ Instalación de Dependencias

#### 📦 Para Backend

```bash
$ cd server
$ npm install
```

#### 🎨 Para Frontend

```bash
$ npm install
```

### 3️⃣ Levantar el Servidor Backend

#### 📝 Copiar archivo de entorno

```bash
$ cd server
$ cp .env.example .env
```
> ⚠️ **Importante:** No olvidar completar los datos del archivo `.env` antes de levantar el servidor.

#### 🚀 Iniciar el servidor

```bash
$ npm run dev
```

El servidor estará disponible en: [http://localhost:3000](http://localhost:3000) 🌐

### 4️⃣ Ejecutar las Pruebas Unitarias en el Servidor Backend

```bash
$ npm run test
```

### 5️⃣ Levantar el Proyecto Frontend Angular

```bash
$ ng serve
```

El servidor de desarrollo de Angular estará disponible en: [http://localhost:4200](http://localhost:4200) ⚡

---

### 🐳 Levantar la aplicación con Docker 

#### 📝 Copiar archivo de entorno

```bash
$ cd server
$ cp .env.example .env
```
> ⚠️ **Importante:** No olvidar completar los datos del archivo `.env` antes de levantar el servidor.

#### 🛠️ Construir las imágenes

```bash
$ docker-compose build
```

#### 🚀 Levantar los contenedores

```bash
$ docker-compose up
```

Esto levantará tanto el **servidor Backend** como el **Frontend Angular** automáticamente en sus respectivos contenedores.
Por defecto el servidor Backend se levantará en el puerto 3000 y el Frontend Angular en el puerto 80.

#### 📦 Detener los contenedores

Para detener todo:

```bash
$ docker-compose down
```

---

## 🚀 Uso de la Aplicación

Una vez levantados el servidor backend y el frontend, puedes utilizar el siguiente flujo para generar y consumir ShortURLs:

### 📌 Generación de una URL Corta (ShortURL)

Para generar un enlace corto asociado a un DTE, realiza una solicitud `POST` a la siguiente ruta del servidor backend:

```
POST http://localhost:3000/api/generate-url
```

**Body de la solicitud (JSON):**

```json
{
  "dteId": "ID_DEL_DTE"
}
```

**Respuesta exitosa (ejemplo):**

```json
{
  "shortUrl": "http://localhost:3000/s/46938d68"
}
```

El `shortUrl` generado permitirá acceder al Documento Tributario Electrónico de manera segura y controlada.

Tras la validación exitosa (token válido, no expirado y contador correcto), el sistema redireccionará automáticamente a una URL segura generada dinámicamente. En esta nueva dirección, se 
mostrará el archivo XML correspondiente al documento tributario solicitado.

**Ejemplo de la URL larga generada:**

```
http://localhost:3000/getXML/cb6c99293ee9bdcee9e59ae59e4eb798:7b22dd0d79056bc1b472c9e7ef96676b:18a58664164faeac6a29040803da5c9920980776f5b9e708e8930983161c9f74
```

---

## 👨‍💻 Desarrollado por

Este proyecto ha sido desarrollado por **Nicolás Morales** como parte del desafío de postulación para el cargo de **Desarrollador FullStack** en **IConstruye**. 🚀✨
