<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.34" styleCategories="Symbology">
  <pipe>
    <rasterrenderer type="singlebandpseudocolor"
                    band="1"
                    alphaBand="-1"
                    classificationMin="0"
                    classificationMax="20"
                    opacity="1">
      <rasterTransparency>
        <singleValuePixelList>
          <pixelListEntry min="0" max="0" percentTransparent="100"/>
        </singleValuePixelList>
      </rasterTransparency>

      <rastershader>
        <colorrampshader colorRampType="INTERPOLATED"
                         classificationMode="1"
                         clip="0">

          <!-- Valores casi nulos transparentes o muy tenues -->
          <item alpha="0" value="0" label="0 - Transparente" color="#000000"/>
          <item alpha="40" value="0.10" label="0.10" color="#3a2608"/>
          <item alpha="80" value="0.25" label="0.25" color="#5a3909"/>
          <item alpha="130" value="0.50" label="0.50" color="#8a5a13"/>

          <!-- Luces visibles -->
          <item alpha="180" value="1" label="1" color="#c9861c"/>
          <item alpha="220" value="2" label="2" color="#f0ad2e"/>
          <item alpha="240" value="3.5" label="3.5" color="#ffd35a"/>

          <!-- Luces urbanas fuertes -->
          <item alpha="255" value="5" label="5" color="#ffe58a"/>
          <item alpha="255" value="7.5" label="7.5" color="#fff2b8"/>
          <item alpha="255" value="10" label="10" color="#fff8df"/>
          <item alpha="255" value="20" label="20 o más" color="#ffffff"/>

        </colorrampshader>
      </rastershader>
    </rasterrenderer>

    <brightnesscontrast brightness="0" contrast="15" gamma="0.75"/>

    <huesaturation colorizeOn="0"
                   colorizeRed="255"
                   colorizeGreen="128"
                   colorizeBlue="128"
                   colorizeStrength="100"
                   grayscaleMode="0"
                   saturation="20"/>

    <rasterresampler maxOversampling="2"/>
  </pipe>

  <blendMode>0</blendMode>
</qgis>