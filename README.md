# Costa Rica Night Lights 2026

## Visor geografico en siguiente link: https://asoto59g.github.io/Costa_Rica_Noche_2026/

## Descripción del Proyecto
Este proyecto es un visor web interactivo que muestra las luces nocturnas de Costa Rica para el año 2026. El mapa web ha sido generado utilizando el complemento `qgis2web` desde QGIS y presenta los datos de radiancia promedio capturados por el instrumento VIIRS (Visible Infrared Imaging Radiometer Suite) a bordo del satélite Suomi NPP.

## Componentes del Mapa Web
- **Visor Web (`index.html`):** Interfaz del mapa basada en la librería OpenLayers. Está configurado para forzar una vista de escritorio panorámica (1280px) en cualquier dispositivo, garantizando que todos los controles permanezcan accesibles.
- **Control de Capas:** Incluye un menú desplegable (Layer Switcher) en la esquina superior derecha que permite activar y desactivar las capas de luces y los mapas base de forma interactiva.
- **Título:** Un encabezado flotante y estático ("Costa Rica Night Lights 2026") centrado en la parte superior del mapa.

## Fuentes de Datos
Los datos de radiancia y emisión lumínica nocturna provienen del catálogo de **Google Earth Engine (GEE)**, correspondientes a los productos de la serie temporal **VIIRS Day/Night Band (DNB)**, los cuales son procesados y distribuidos por la NOAA/NASA.

## Archivos y Recursos Adicionales en el Directorio
Este directorio no solo contiene el código fuente del mapa web, sino también todos los insumos originales requeridos para el análisis geoespacial y la diagramación:

- `CR-NIGHT-LIGHTS-VIIRS-2026.js`: Script en JavaScript para Google Earth Engine (Code Editor) utilizado para filtrar la colección de imágenes, procesar la radiancia promedio y exportar el resultado.
- `Costa_Rica_VIIRS_avg_rad_2026.tif`: Archivo raster principal (GeoTIFF) descargado de GEE que contiene los valores brutos de radiancia promedio de Costa Rica. (Acompañado de su archivo de metadatos espaciales `.aux.xml`).
- `CR-NIGHT-LIGHTS-VIIRS-2026.qgz`: Proyecto madre de QGIS utilizado para integrar el raster, aplicar estilos de renderizado y estructurar el diseño antes de la exportación a web.
- `Lucesnoche.qml` / `Lucesnoche02.qml`: Archivos de estilo de QGIS. Contienen la definición de la rampa de color, intervalos y simbología aplicados a los datos crudos del raster para resaltar la densidad urbana y lumínica.
- `CRnoche.png`: Imagen estática en alta resolución del mapa de luces nocturnas renderizado, optimizada para su divulgación en redes sociales y presentaciones.
- **Carpetas autogeneradas (`layers/`, `resources/`, `images/`, `styles/`, `webfonts/`):** Contienen el código JavaScript subyacente, hojas de estilo CSS, librerías (como OpenLayers) y los datos vectoriales transformados a GeoJSON para su renderizado en el navegador.

- [https://github.com/asoto59g/Costa_Rica_Noche_2026/blob/8e14bace4b0490193ad1db10d11877f4f06977bc/CRnoche.png]
