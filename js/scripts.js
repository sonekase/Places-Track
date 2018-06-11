//business logic

function vacationPlace(location, landmark, food, time) {
  this.location = location;
  this.landmark = landmark;
  this.food = food;
  this.time = time;
}



//user interface
$(document).ready(function(){
  $("#place-form").submit(function(event){
    event.preventDefault();
    var userLocation = $("input#location-input").val();
    var userLandmark = $("input#landmark-input").val();
    var userFood = $("input#food-input").val();
    var userTime = $("input#time-input").val();

    var visitedPlace = new vacationPlace(userLocation, userLandmark, userFood, userTime);
    $("ul#return-list").append("<li><span class='vacations'>" + visitedPlace.location + "</span></li>");
    $("#place-form").trigger("reset");
    $(".vacations").last().click(function(){
      $("#location").text(visitedPlace.location);
      $("#landmark").text(visitedPlace.landmark);
      $("#food").text(visitedPlace.food);
      $("#time").text(visitedPlace.time);
      $(".output-area").show();
    });

  });


});
