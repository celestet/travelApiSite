var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
var touristplace
  
 
    if(document.getElementById('city').value == "new york city"){
    touristplace = "1. times square <br>  <br> <img src='images/timesquare.jpg'> <br> 2. statue of liberty <br> <img src='images/nyc.jpg'> <br> 3. empire state building <br> <img src='images/empirestate.jpg'> <br> 4. central park <br> <img src='images/centralpark.jpg'> <br> 5. brooklyn bridge <br> <img src='images/brooklynbridge.jpg'>"
}
   else if(document.getElementById('city').value == "san francisco"){
     touristplace = "1. golden gate bridge <br> <img src='images/sf.jpg'> <br> 2. fishermans wharf <br> <img src='images/fishermanswharf.jpg'> <br> 3. alcatraz <br> <img src='images/alcatraz.jpg'> <br> 4. lombard street <br> <img src='images/lombardstreet.jpg'> <br> 5. cable car system <br> <img src='images/cablecar-sf.jpg'>"
  }
  else if(document.getElementById('city').value == "seattle"){
      touristplace = "1. space needle <br> <img src='images/seattle.jpg'> <br> 2. pike place market <br> <img src='images/pikeplacemarket.jpg'> <br> 3. chihuly garden and glass <br> <img src='images/chihuly-seattle.jpg'> <br> 4. lake washington <br> <img src='images/lakewashington-seattle.jpg'> <br> 5. seattle great wheel <br> <img src='images/seattlegreatwheel.jpg'>"
  }
     else if(document.getElementById('city').value == "boston"){
//     imageString = "<img src='images/boston.jpg'>"
     touristplace = "1. fanueil hall <br> <img src='images/faneuilhall.JPG'> <br>  2. fenway park <br> <img src='images/fenwaypark.jpg'> <br> 3. paul revere house <br> <img src='images/paul-revere-house.jpg'> <br> 4. old north church <br> <img src='images/oldnorthchurch.jpg'> <br> 5. new england aquarium <br> <img src='images/aquarium-boston.jpg'>"
  }
   else if(document.getElementById('city').value == "los angeles"){
//     imageString = "<img src='images/la.jpg'>"
     touristplace = "1. universal studios <br> <img src='images/universalstudios.jpg'> <br> universal citywalk <br> <img src='images/citywalk.jpg'> <br> 2. disneyland <br> <img src='images/disneyland.jpg'> <br> California Adventure <br> <img src='images/californiaadventure.jpg'> <br> 3. hollywood sign <br> <img src='images/hollywood-sign.jpg'> <br> hollywood walk of fame <br> <img src='images/walkoffame-la.jpg'> <br>  Mans Chinese theater <br> <img src='images/hollywood-theater.jpg'> <br> 4. santa monica <br> 3rd Street Promenade <br> <img src='images/promenade-santamonica.jpg'> <br> Pier <br> <img src='images/santamonicapier.jpg'> <br> 5. LA Live <br> Staples center <br> <img src='images/staplescenter-lalive.jpg'> <br> Grammy Museum <br>  <img src='images/grammymueseum-lalive.jpg'>"
  }
   else if(document.getElementById('city').value == "washington dc"){
//      imageString = "<img src='images/washingtondc.jpg'>"
      touristplace = "1. lincoln memorial <br> <img src='images/lincolnmemorial-dc.jpg'> <br> 2. national mall <br> <img src='images/nationalmall-dc.jpg'> <br> 3. white house <br> <img src='images/whitehouse.jpg'> <br> 4. national air and space mueseum <br> <img src='images/nationalairandspacemueseum.jpg'> <br> 5. US capitol <br> <img src='images/uscapitol.jpg'>"
  }
     else if(document.getElementById('city').value == "chicago"){
//     imageString = "<img src='images/chicago.jpg'>"
     touristplace = "1. cloud gate <br> <img src='images/chicago.jpg'> <br> 2. navy pier <br> <img src='images/navypierchicago.jpg'> <br> 3. willis tower <br> <img src='images/willistower.jpg'> <br> 4. magnificent mile <br> <img src='images/magnificentmile.jpg'> <br> 5.  millenium park <br> <img src='images/milleniumpark.jpg'> "
  }
 else if(document.getElementById('city').value == "houston"){
//      imageString = "<img src='images/houston-tx.jpg'>"
      touristplace = "1. mueseum of fine arts <br> <img src='images/museumoffinearts.jpg'> <br> 2. space center houston <br> <img src='images/Space-Center-Houston.png'> <br> 3. houston mueseum of national sciences <br> <img src='images/naturalsciencemuseuem.jpg'><br> 4. menil collection <br> <img src='images/menil-houston.jpg'><br> 5. downtown aquarium <br> <img src='images/aquarium-houston.jpg'>"
  }
     else if(document.getElementById('city').value == "austin"){
//     imageString = "<img src='images/austin-tx.jpg'>"
     touristplace = "1. texas state capitol <br> <img src='images/txstatecapitol.jpg'> <br> 2. lady bird lake <br> <img src='images/ladybirdlake.jpg'> <br> 3. barton springs pool <br> <img src='images/bartonspringspool.jpg'><br> 4. zilker park <br> <img src='images/zilkerpark.jpg'> <br> 5. lyndon baines johnson library <br> <img src='images/lbjlibrary.jpg'>"
  }
     else if(document.getElementById('city').value == "san diego"){
//     imageString = "<img src='images/sandiego-midway.jpg'>"
     touristplace = "1. uss midway <br> <img src='images/sandiego-midway.jpg'><br> 2. seaworld <br><img src='images/seaworld.jpg'><br> 3. old town san diego <br><img src='images/oldtownsd.jpg'><br> 4. la jolla cove<br> <img src='images/lajollacove.jpg'> <br> 5. balboa park <br> <img src='images/balboapark.jpg'>"
  }
     else{
        touristplace = "Only Basic info is provided for this city"
    }
  document.getElementById("travelinfocontainer").innerHTML =  "Most Popular Tourist Attractions:<br>" + touristplace 
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
