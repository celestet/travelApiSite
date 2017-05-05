var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
//var currentCity = data['location']['localtime']
//var cityTemp = data['current']['temp_f']
//var cityWeather = data['current']['condition']['text']
var food
  
 
    if(document.getElementById('city').value == "new york city"){
//    var imageString = "<img src='images/nyc.jpg'>"
    food = "1. Russ and daughters cafe <br> Jewish Comfort Food <br> <img src='images/russ&daughters-ny.jpg'> <br> 2. ABC kitchen <br>Organic Food<br> <img src='images/abckitchen-ny.jpg'> <br> 3. Per se <br>American food <br><img src='images/perse-nyc.jpg'> <br> 4. Daniel <br>French <br><img src='images/daniel-ny.jpg'> <br> 5. The spotted pig <br>british <br> <img src='images/spottedpig-ny.jpg'>"
}
   else if(document.getElementById('city').value == "san francisco"){
   food = "1. Gary Danko <br> French <br> <img src='images/garydanko-sf.jpg'> <br> 2. Nopa <br>American<br> <img src='images/nopa-sf.jpg'> <br> 3. Kin Khao <br>Thai <br><img src='images/kinkhao-sf.jpg'> <br> 4. Flour + Water <br>Italian <br><img src='images/flourwater-sf.jpg'> <br> 5. Souvla <br>Greek <br> <img src='images/souvla-sf.jpg'>"
  }
  else if(document.getElementById('city').value == "seattle"){
food = "1. Metropolitan Grill <br> Steak <br> <img src='images/metropolitangrill-seattle.jpg'> <br> 2. the walrus and the carpenter <br>Oyster<br> <img src='images/walruscarpenter-seattle.jpg'> <br> 3. Paseo Caribbean restaurant <br>Carribean<br><img src='images/paseocarribean-seattle.jpg'> <br> 4. Canlis <br>Pacific Northwest <br><img src='images/canlis-seattle.jpg'> <br> 5. Serious Pie <br>Italian <br> <img src='images/seriouspie-seattle.jpg'>"
  }
     else if(document.getElementById('city').value == "boston"){
food = "1. Mei Mei <br> Asian fusion <br> <img src='images/meimei-boston.jpg'> <br> 2. Toro <br>spanish<br> <img src='images/toro-boston.jpg'> <br> 3. O Ya <br>Japanese <br><img src='images/oya-boston.jpg'> <br> 4. Mistral <br>Mediterranean <br><img src='images/mistral-boston.jpg'> <br> 5. Island greek Oyster Bar <br>Seafood <br> <img src='images/islandgreekoyster-boston.png'>"
  }
   else if(document.getElementById('city').value == "los angeles"){
food = "1. Sqirl <br> Organic <br> <img src='images/sqirl-la.png'> <br> 2. Komodo <br>Asian<br> <img src='images/komodo-la.jpg'> <br> 3. TLT food <br>American <br><img src='images/tltfood-la.jpg'> <br> 4. Pot Thai Cafe <br>Thai <br><img src='images/potthaicafe-la.jpg'> <br> 5. Wurstkuche Restaurant <br>German<br> <img src='images/wurstkuche-la.jpg'>"
  }
   else if(document.getElementById('city').value == "washington dc"){
food = "1. Oyamel Cocina Mexicana<br> Mexican <br> <img src='images/ocm-dc.jpg'> <br> 2. Astro Doughnuts & Fried Chicken <br>Chicken<br> <img src='images/astro-dc.jpg'> <br> 3. Ted's Bulletin <br>American <br><img src='images/tedsbulletin.jpg'> <br> 4. Toki Underground <br>Asian <br><img src='images/tokiunderground-dc.jpg'> <br> 5. Le Diplomate <br>French<br> <img src='images/le-diplomate-dc.jpg'>"
  }
     else if(document.getElementById('city').value == "chicago"){
food = "1. Alinea<br> American<br> <img src='images/.jpg'> <br> 2. Foodlife <br>barbecue<br> <img src='images/.jpg'> <br> 3. Cemitas Puebla <br>Mexican<br><img src='images/.jpg'> <br> 4. Chicago Raw <br>Vegetarian <br><img src='images/.jpg'> <br> 5. Afghan Kabob <br>Mediterranean<br> <img src='images/.jpg'>"
  }
 else if(document.getElementById('city').value == "houston"){
food = "1. Underbelly <br> American<br> <img src='images/.jpg'> <br> 2. Hugo's <br>Mexican<br> <img src='images/.jpg'> <br> 3. BB's Cafe <br>Cajun<br><img src='images/.jpg'> <br> 4. Ibizia <br>Spanish <br><img src='images/.jpg'> <br> 5. Piada Italian street Food <br>Italian<br> <img src='images/.jpg'>"
  }
     else if(document.getElementById('city').value == "austin"){
food = "1. Salty Sow<br> American<br> <img src='images/.jpg'> <br> 2. Juan in a Million <br>Mexican<br> <img src='images/.jpg'> <br> 3. Olamaie <br>Southern<br><img src='images/.jpg'> <br> 4. Franklin Barbecue <br>Barbecue <br><img src='images/.jpg'> <br> 5. Arlo's <br>Vegan<br> <img src='images/.jpg'>"
  }
     else if(document.getElementById('city').value == "san diego"){
food = "1. Blue Water seafood market & grill <br> Seafood<br> <img src='images/.jpg'> <br> 2. Bo-beau kitchen + bar <br>french<br> <img src='images/.jpg'> <br> 3. Lucha Libre Taco Shop <br>Mexican<br><img src='images/.jpg'> <br> 4. STACKED <br>American <br><img src='images/.jpg'> <br> 5. Pizzeria Luigi <br>Pizza<br> <img src='images/.jpg'>"
  }
    else{
        food = "Only Basic info is provided for this city"
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
