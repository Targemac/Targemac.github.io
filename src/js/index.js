import $ from "jquery";

$("#drop-down-toggle").click(() => {
  //   alert("Hey you clicked me ");
  $("#dev-tag-grp").slideToggle();
  // $(".main-drop-down").slideToggle();
});

$("#preview-btn").click(() => {
  $("#preview-pane img ").slideToggle();
});


