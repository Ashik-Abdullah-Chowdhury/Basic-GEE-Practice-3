// Select an image collection of any Satellite, filter by boundary and date. Finally, select an image from the collection, and print the capture date of that image.
var dataset=ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry();

var Dataset=dataset
.filterBounds(upzla)
.filterDate("2023-01-01","2023-01-30")
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
print(Dataset)
var image=ee.Image("COPERNICUS/S2_SR_HARMONIZED/20230103T042149_20230103T042448_T46QCK")
print(image);
var capturingDate=ee.Date(image.get("system:time_start"));
var formattedDate=capturingDate.format("YYYY-MM-DD");
print("Capturing date",capturingDate);
print("formattedDate",formattedDate);
Map.centerObject(image);
Map.addLayer(image.clip(upzla),{bands:["B4","B3","B2"],min:78.96
,max:966.27},"raster image")