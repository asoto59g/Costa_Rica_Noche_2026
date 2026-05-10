/**** COSTA RICA - NIGHT LIGHTS VIIRS 2026 ****/
/**** Script robusto contra colecciones vacías ****/

// ===============================
// 1. Parámetros
// ===============================

var year = 2026;
var startDate = ee.Date.fromYMD(year, 1, 1);
var endDate = ee.Date.fromYMD(year + 1, 1, 1);

// Umbral de radiancia para identificar luces.
// Puedes ajustar este valor: 0.5, 1, 2, 5, etc.
var lightThreshold = 0.5;

// Mínimo de observaciones libres de nubes.
// La banda cf_cvg indica cantidad de observaciones válidas.
var minCloudFreeObs = 1;


// ===============================
// 2. Límite de Costa Rica
// ===============================

var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

var costaRica = countries
  .filter(ee.Filter.eq('country_na', 'Costa Rica'));

var costaRicaGeom = costaRica.geometry();

Map.centerObject(costaRica, 8);


// ===============================
// 3. Colección VIIRS mensual
// ===============================

var viirs = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
  .filterBounds(costaRicaGeom)
  .filterDate(startDate, endDate);

print('Número de imágenes VIIRS para ' + year + ':', viirs.size());
print('Colección VIIRS filtrada:', viirs);


// ===============================
// 4. Función segura para evitar imágenes sin bandas
// ===============================

// Esta función crea una mediana aunque la colección esté vacía.
// Si está vacía, devuelve una imagen completamente enmascarada,
// pero con el nombre de banda correcto.
function safeMedian(collection, bandName) {
  var emptyImage = ee.Image.constant(0)
    .rename(bandName)
    .updateMask(ee.Image.constant(0));

  return collection
    .select(bandName)
    .merge(ee.ImageCollection([emptyImage]))
    .median()
    .rename(bandName);
}


// ===============================
// 5. Crear compuesto de radiancia y cobertura
// ===============================

var avgRad = safeMedian(viirs, 'avg_rad')
  .clip(costaRicaGeom);

var cfCvg = safeMedian(viirs, 'cf_cvg')
  .clip(costaRicaGeom);


// ===============================
// 6. Máscaras
// ===============================

// Máscara de píxeles con cobertura válida.
var validCoverage = cfCvg.gte(minCloudFreeObs).rename('valid_coverage');

// Máscara de luces.
// Aquí ya no fallará el .and(), porque ambas imágenes tienen 1 banda.
var nightLightMask = avgRad
  .gt(lightThreshold)
  .and(validCoverage)
  .rename('night_light_mask')
  .selfMask();


// ===============================
// 7. Visualización
// ===============================

var nightLightsVis = {
  min: 0,
  max: 20,
  palette: [
    '000000',
    '1a237e',
    '0d47a1',
    '1976d2',
    '00acc1',
    'ffff00',
    'ff9800',
    'ff0000',
    'ffffff'
  ]
};

var maskVis = {
  palette: ['00ffff']
};

Map.addLayer(
  avgRad,
  nightLightsVis,
  'Costa Rica VIIRS avg_rad ' + year
);

Map.addLayer(
  nightLightMask,
  maskVis,
  'Costa Rica Night Lights mask ' + year
);

Map.addLayer(
  costaRica.style({
    color: 'ffffff',
    fillColor: '00000000',
    width: 2
  }),
  {},
  'Costa Rica boundary'
);


// ===============================
// 8. Estadísticas simples
// ===============================

var stats = avgRad.reduceRegion({
  reducer: ee.Reducer.mean()
    .combine({
      reducer2: ee.Reducer.max(),
      sharedInputs: true
    })
    .combine({
      reducer2: ee.Reducer.min(),
      sharedInputs: true
    }),
  geometry: costaRicaGeom,
  scale: 500,
  maxPixels: 1e13
});

print('Estadísticas avg_rad para ' + year + ':', stats);
// ===============================
// 9. Exportar Costa Rica VIIRS avg_rad a Google Drive
// ===============================

Export.image.toDrive({
  image: avgRad.toFloat(),                  // Imagen a exportar
  description: 'Costa_Rica_VIIRS_avg_rad_' + year,
  folder: 'GEE_Exports',                    // Carpeta en Google Drive
  fileNamePrefix: 'Costa_Rica_VIIRS_avg_rad_' + year,
  region: costaRicaGeom,                    // Área de exportación
  scale: 500,                               // Resolución aproximada VIIRS
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});