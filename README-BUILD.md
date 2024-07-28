# SETUP WIZARD | [Skilly](https://www.skilly.es)

Este proyecto proporciona una API para acceder a datos almacenados en archivos CSV. La API está construida utilizando Node.js y se ejecuta dentro de un contenedor Docker.

## Requisitos Previos

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/)

## Configuración del Proyecto

### Clonar el Repositorio

```bash
git clone https://github.com/NuriaLiano/setupwizard.git
cd setupwizard
```

### Estructura del proyecto

```bash
setupwizard/
├── data/
│   ├── cpu.csv
│   ├── gpu.csv
│   ├── hdd.csv
│   ├── ram.csv
│   ├── ssd.csv
│   └── usb.csv
├── index.js
├── package.json
├── package-lock.json
└── Dockerfile
```

### Crear y ejecutar el contenedor Docker

#### Construir imagen Docker
~~~
docker build -t tu-usuario/setupwizard .
~~~

#### Ejecutar el contenedor

~~~
docker run -p 3000:3000 tu-usuario/setupwizard
~~~