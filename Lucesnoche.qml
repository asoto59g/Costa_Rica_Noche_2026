<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.34" styleCategories="Symbology">
  <pipe>
    <rasterrenderer type="singlebandpseudocolor"
                    band="1"
                    alphaBand="-1"
                    classificationMin="0"
                    classificationMax="20">
      <rasterTransparency/>
      <rastershader>
        <colorrampshader colorRampType="INTERPOLATED"
                         classificationMode="1"
                         clip="0">
          <item alpha="255" value="0" label="0" color="#000000"/>
          <item alpha="255" value="2.5" label="2.5" color="#1a237e"/>
          <item alpha="255" value="5" label="5" color="#0d47a1"/>
          <item alpha="255" value="7.5" label="7.5" color="#1976d2"/>
          <item alpha="255" value="10" label="10" color="#00acc1"/>
          <item alpha="255" value="12.5" label="12.5" color="#ffff00"/>
          <item alpha="255" value="15" label="15" color="#ff9800"/>
          <item alpha="255" value="17.5" label="17.5" color="#ff0000"/>
          <item alpha="255" value="20" label="20" color="#ffffff"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0" gamma="1"/>
    <huesaturation colorizeOn="0"
                   colorizeRed="255"
                   colorizeGreen="128"
                   colorizeBlue="128"
                   colorizeStrength="100"
                   grayscaleMode="0"
                   saturation="0"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
</qgis>