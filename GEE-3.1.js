// Make a RGB composite from any image collection for your Upazila

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
var visparams={
  bands:["B4","B3","B2"],
  min:422.6,
  max:1422.2}
Map.centerObject(Dataset)
Map.addLayer(Dataset.clip(upazilla),visparams,"RGB Composite")