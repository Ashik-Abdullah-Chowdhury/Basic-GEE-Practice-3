// Make a False color composite from any image collection for your Upazila.
var dataset=ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
var upazilla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
Map.centerObject(upazilla)
Map.addLayer(upazilla,{},"Boalkhali")
print(upazilla)
var Dataset=dataset
.filterBounds(upazilla)
.filterDate("2023-01-01","2023-01-30")
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
.mean()
print(Dataset)
// FALSE COLOR COMPOSITE
var VisParams={
  bands:["B8","B4","B3"],
  min:394,
  max:3228.8}
Map.addLayer(Dataset.clip(upazilla),VisParams,"False Color Composite")