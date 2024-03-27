# **Filtering image collection in GOOGLE EARTH ENGINE**
## **Making RGB image composite from image collection:**
I used "Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A" dataset for this task.I imported the previously uploaded "Administrative Boundary Of Bangladesh".Then printed my desired upazilla "Boalkhali".After that,i filtered the dataset by boundary,date and image property.Then i made a composite image from all the filtered results.To get an RGB composite,i selected "B4","B3","B2" as bands in visParams.This is the result i got:


*   [GEE LINK](https://code.earthengine.google.com/9471e48d6fd13276121a237ee62e5961)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/RGB_comp.png)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/GEE-3.1.js)



## **Making False Color composite from image collection:**
Here,i selected "B8","B4","B3" as bands in visParams.Other procedures are as same as i did  while making the RGB composite.And this is what i got:


*   [GEE LINK](https://code.earthengine.google.com/6df5fad9ccbf5451177821e8eb41da58)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/False%20color%20comp.png)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/GEE-3.3.js)



## **Figuring out capture date of an image:**
I used the same dataset and administrative boundary.At first,i got 14 features after filtering the dataset by boundary,date and image property.Then i selected one image out of those 14 results.Finally,found out the capture date of that image.The result is:


*   [GEE LINK](https://code.earthengine.google.com/3e20f37022008b1418492d5c0ff4c672)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/Image_filter.png)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-3/blob/main/GEE-3.2.js)

