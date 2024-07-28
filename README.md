# SETUP WIZARD | [Skilly](https://www.skilly.es)

Este proyecto proporciona una API para acceder a datos almacenados en archivos CSV. La API está construida utilizando Node.js y se ejecuta dentro de un contenedor Docker.

## Uso de la API

### Endpoints

- GET /api/:file

Donde :file es el nombre del archivo CSV (sin extensión) que deseas consultar

### Peticiones

- Obtener datos de CPU
~~~bash
curl http://localhost:3000/api/cpu
~~~
- Obtener datos de GPU
~~~bash
curl http://localhost:3000/api/gpu
~~~
- Obtener datos de HDD
~~~bash
curl http://localhost:3000/api/hdd
~~~
- Obtener datos de RAM
~~~bash
curl http://localhost:3000/api/ram
~~~
- Obtener datos de SSD
~~~bash
curl http://localhost:3000/api/ssd
~~~
- Obtener datos de USB
~~~bash
curl http://localhost:3000/api/usb
~~~

### Respuesta

#### Campos Devueltos por la API

La API devuelve los siguientes campos en formato JSON:

| Campo       | Tipo                                      | Descripción                                        |
|-------------|-------------------------------------------|----------------------------------------------------|
| Type        | enum (CPU, GPU, SSD, HDD, USB, RAM)       | Tipo de componente                                 |
| Part Number | string                                    | Número de parte del componente                     |
| Brand       | string                                    | Marca del componente                               |
| Model       | string                                    | Modelo del componente                              |
| Rank        | int                                       | Rango del componente                               |
| Benchmark   | float                                     | Puntaje de referencia del componente               |
| Samples     | int                                       | Número de muestras                                 |
| URL         | string                                    | URL con más información sobre el componente        |


#### Ejemplos de respuesta

La respuesta será un JSON con los datos del archivo CSV solicitado. Por ejemplo, para cpu.csv:
~~~json
[
  {
    "Type": "GPU",
    "Part Number": "",
    "Brand": "Nvidia",
    "Model": "RTX 4090",
    "Rank": "1",
    "Benchmark": "370",
    "Samples": "25956",
    "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-4090/Rating/4136"
  },
  {
    "Type": "GPU",
    "Part Number": "GV-N4090GAMING OC-24GD",
    "Brand": "Gigabyte",
    "Model": "Gigabyte RTX 4090 24GB Gaming OC",
    "Rank": "1",
    "Benchmark": "370",
    "Samples": "25956",
    "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-4090/Rating/4136"
  }
]
~~~

## Troubleshooting

- **This site can't be reached"**

Si ves un error de "This site can't be reached", asegúrate de que el contenedor Docker está corriendo y de que el puerto 3000 está correctamente mapeado. También verifica que el servidor está escuchando en 0.0.0.0 en lugar de localhost.

## Fuente de datos

Los datos utilizados en esta API han sido obtenidos de [UserBenchmark](https://www.userbenchmark.com/). UserBenchmark proporciona información detallada sobre el rendimiento de diversos componentes de hardware.

![userbenckmark](https://www.userbenchmark.com/resources/img/wri/bench-speed/generic-badge.png)
---

![skilly logo](https://skilly.es/media/img/7AC943_black_transparent.png)
