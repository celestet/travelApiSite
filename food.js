var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
//var currentCity = data['location']['localtime']
//var cityTemp = data['current']['temp_f']
//var cityWeather = data['current']['condition']['text']
var food
  
 
    if(document.getElementById('city').value == "new york city"){
//    var imageString = "<img src='images/nyc.jpg'>"
    food = "1. Russ and daughters cafe <br> Jewish Comfort Food <br> <img src='images/.jpg'> <br> 2. ABC kitchen <br>Organic Food<br> <img src='images/.jpg'> <br> 3. Per se <br>American food <br><img src='images/.jpg'> <br> 4. Daniel <br>French <br><img src='images/.jpg'> <br> 5. The spotted pig <br>british <br> <img src='images/.jpg'>"
}
   else if(document.getElementById('city').value == "san francisco"){
   food = "1. Gary Danko <br> French <br> <img src='images/.jpg'> <br> 2. Nopa <br>American<br> <img src='images/.jpg'> <br> 3. Kin Khao <br>Thai <br><img src='images/.jpg'> <br> 4. Flour + Water <br>Italian <br><img src='images/.jpg'> <br> 5. Souvla <br>Greek <br> <img src='images/.jpg'>"
  }
  else if(document.getElementById('city').value == "seattle"){
food = "1. Unami Burger Marina <br> American <br> <img src='images/.jpg'> <br> 2. the walrus and the carpenter <br>Oyster<br> <img src='images/.jpg'> <br> 3. Paseo Caribbean restaurant <br>Carribean<br><img src='images/.jpg'> <br> 4. Canlis <br>Pacific Northwest <br><img src='images/.jpg'> <br> 5. Serious Pie <br>Italian <br> <img src='images/.jpg'>"
  }
     else if(document.getElementById('city').value == "boston"){
food = "1. Mei Mei <br> Asian fusion <br> <img src='images/.jpg'> <br> 2. Toro <br>spanish<br> <img src='images/.jpg'> <br> 3. O Ya <br>Japanese <br><img src='images/.jpg'> <br> 4. Mistral <br>Mediterranean <br><img src='images/.jpg'> <br> 5. Island greek Oyster Bar <br>Seafood <br> <img src='images/.jpg'>"
  }
   else if(document.getElementById('city').value == "los angeles"){
food = "1. Sqirl <br> Organic <br> <img src='images/.jpg'> <br> 2. Komodo <br>Asian<br> <img src='images/.jpg'> <br> 3. TLT food <br>American <br><img src='images/.jpg'> <br> 4. Pot Thai Cafe <br>Thai <br><img src='images/.jpg'> <br> 5. Crispy Crust Pizza <br>Pizza<br> <img src='images/.jpg'>"
  }
   else if(document.getElementById('city').value == "washington dc"){
food = "1. Oyamel Cocina Mexicana<br> Mexican <br> <img src='images/.jpg'> <br> 2. Astro Doughnuts & Fried Chicken <br>Chicken<br> <img src='images/.jpg'> <br> 3. Ted's Bulletin <br>American <br><img src='images/.jpg'> <br> 4. Toki Underground <br>Asian <br><img src='images/.jpg'> <br> 5. Le Diplomate <br>French<br> <img src='images/.jpg'>"
  }
     else if(document.getElementById('city').value == "chicago"){
food = "1. Great Chicago food & Beverage Co<br> American<br> <img src='images/.jpg'> <br> 2. Foodlife <br>barbecue<br> <img src='images/.jpg'> <br> 3. Cemitas Puebla <br>Mexican<br><img src='images/.jpg'> <br> 4. Chicago Raw <br>Vegetarian <br><img src='images/.jpg'> <br> 5. Afghan Kabob <br>Mediterranean<br> <img src='images/.jpg'>"
  }
 else if(document.getElementById('city').value == "houston"){

  }
     else if(document.getElementById('city').value == "austin"){

  }
     else if(document.getElementById('city').value == "san diego"){

  }
  document.getElementById("travelinfocontainer").innerHTML =  "Most Popular Restaurants:<br>" + food 
//    document.getElementById("imagecontainer").innerHTML = imageString
 
} 

function makeRequest() {
  $.ajax({
   url: // what should go here?
      travelURL, 
    success: function(data) {
      showInfo(data)
    }
  })
}


function submit() {
var userInput = document.getElementById('city').value
travelURL = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + userInput
makeRequest()
}
