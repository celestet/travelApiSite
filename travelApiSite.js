var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
var currentCity = data['location']['localtime']
var cityTemp = data['current']['temp_f']
var cityWeather = data['current']['condition']['text']
var touristplace
 
  
 
    if(document.getElementById('city').value == "new york city"){
    var imageString = "<img src='images/nyc.jpg'>"
    touristplace = "1. times square <br> 2. statue of liberty <br> 3. empire state building <br> 4. central park <br> 5. rockefeller center"
}
   else if(document.getElementById('city').value == "san francisco"){
     imageString = "<img src='images/sf.jpg'>"
     touristplace = "1. golden gate bridge <br> 2. fishermans wharf <br> 3. alcatraz <br> 4. lombard street <br> 5. cable car system"
  }
  else if(document.getElementById('city').value == "seattle"){
      imageString = "<img src='images/seattle.jpg'>"
      touristplace = "1. space needle <br> 2. pike place market <br> 3. chihuly garden and glass <br> 4. experience music project mueseum <br> 5. seattle great wheel"
  }
     else if(document.getElementById('city').value == "boston"){
     imageString = "<img src='images/boston.jpg'>"
     touristplace = "1. fanueil hall <br>  2. fenway park <br> 3. paul revere house <br> 4. old north church <br> 5. new england aquarium"
  }
   else if(document.getElementById('city').value == "los angeles"){
     imageString = "<img src='images/la.jpg'>"
     touristplace = "1. universal studios and citywalk <br> 2. disneyland <br> 3. hollywood(sign, walk of fame, wax mueseum, manschinese theater) <br> 4. santa monica(3rd street promenade and pier) <br> 5. LA Live(staples center, grammy mueseum)"
  }
   else if(document.getElementById('city').value == "washington dc"){
      imageString = "<img src='images/washingtondc.jpg'>"
      touristplace = "1. lincoln memorial <br> 2. national mall <br> 3. white house <br> 4. national air and space mueseum <br> 5. US capitol"
  }
     else if(document.getElementById('city').value == "chicago"){
     imageString = "<img src='images/chicago.jpg'>"
     touristplace = "1. cloud gate <br> 2. navy pier <br> 3. willis tower <br> 4. magnificent mile <br> 5.  millenium park "
  }
 else if(document.getElementById('city').value == "houston"){
      imageString = "<img src='images/houston-tx.jpg'>"
      touristplace = "1. muesuem of fine arts <br> 2. space center houston <br> 3. houston mueseum of national sciences <br> 4. menil collection <br> 5. downtown aquarium"
  }
     else if(document.getElementById('city').value == "austin"){
     imageString = "<img src='images/austin-tx.jpg'>"
     touristplace = "1. texas state capitol <br> 2. lady bird lake <br> 3. barton springs pool <br> 4. zilker park <br> 5. lyndon baines johnson library"
  }
     else if(document.getElementById('city').value == "san diego"){
     imageString = "<img src='images/sandiego-midway.jpg'>"
     touristplace = "1. uss midway <br> 2. seaworld <br> 3. old town san diego <br> 4. la jolla cove <br> 5. balboa park"
  }
  document.getElementById("travelinfocontainer").innerHTML = "Current Time: " + currentCity + "<br> Weather: " + cityWeather + " " + cityTemp + "°F <br> Most Popular Tourist Attractions:<br>" + touristplace + ""
    document.getElementById("imagecontainer").innerHTML = imageString
 
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
