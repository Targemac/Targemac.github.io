import $ from "jquery";

$("#drop-down-toggle").click(() => {
  //   alert("Hey you clicked me ");
  $("#dev-tag-grp").slideToggle();
  // $(".main-drop-down").slideToggle();
});

$("#preview-btn").click(() => {
  $("#preview-pane img ").slideToggle();
});

var x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
getLocation();
