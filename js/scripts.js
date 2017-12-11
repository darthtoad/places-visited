








$(document).ready(function() {
  $("form#theform").submit(function(event){
    event.preventDefault();

    var place = $("input#place").val();
    var date = $("input#date").val();
    var activities = $("input#activities").val();
    var sleep = $("input#sleep").val();
    var other = $("input#other").val();

    var newLocation = new Location(place, date, activities, sleep, other);

    $("ul#output").append("<li><span class='stuff'>" + newLocation.listLocation() + "</span></li>")

    $(".stuff").last().click(function() {
      $(".showlocation").show();
      $("#output .showlocation h2").text(newLocation.place);
      $("#dateoutput").text(newLocation.date);
      $("#activitiesoutput").text(newLocation.activities);
      $("#sleepoutput").text(newLocation.sleep);
      $("#otheroutput").text(newLocation.other);
    })
  })
})
