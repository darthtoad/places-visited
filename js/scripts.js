function Location(place, date, activites, sleep, other) {
  this.place = place;
  this.date = date;
  this.activites = activites;
  this.sleep = sleep;
  this.other = other;
}

Location.prototype.listLocation = function() {
  return this.place + "<br>" + this.date + "<br>" + this.activites + "<br>" + this.sleep + "<br>" + this.other + "<br>";

}







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
      $(".locationlist ").show();
      $("#output .showlocation h2").text(newLocation.place);
      $("#dateoutput").text(newLocation.date);
      $("#activitiesoutput").text(newLocation.activities);
      $("#sleepoutput").text(newLocation.sleep);
      $("#otheroutput").text(newLocation.other);
    })
  })
})
