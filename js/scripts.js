function Location(place, date, activites, sleep, other) {
  this.place = place;
  this.date = date;
  this.activites = activites;
  this.sleep = sleep;
  this.other = other;
}

Location.prototype.listLocation = function() {
  return this.place;

}

$(document).ready(function() {
  $("form#theform").submit(function(event) {
    event.preventDefault();

    var place = $("input#place").val();
    var date = $("input#date").val();
    var activities = $("input#activities").val();
    var sleep = $("input#sleep").val();
    var other = $("input#other").val();
    console.log(place);
    var newLocation = new Location(place, date, activities, sleep, other);
    console.log(newLocation);

    $("#output").append("<li><span class='stuff'>" + newLocation.listLocation() + "</span></li>");

    $(".stuff").last().click(function() {
      console.log("thing");
      $(".locationlist").toggle();
      $("#output h2").text(newLocation.place);
      $("#output #dateoutput").text(newLocation.date);
      $("#output #activitiesoutput").text(newLocation.activities);
      $("#output #sleepoutput").text(newLocation.sleep);
      $("#output #otheroutput").text(newLocation.other);
    });

    $("input#place").val("");
    $("input#date").val("");
    $("input#activities").val("");
    $("input#sleep").val("");
    $("input#other").val("");
  })
})
