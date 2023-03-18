import $ from "jquery";

$("#drop-down-toggle").click(() => {
  //   alert("Hey you clicked me ");
  $("#dev-tag-grp").slideToggle();
  // $(".main-drop-down").slideToggle();
});

// $("#preview-btn").click(() => {
//   $("#preview-pane img ").slideToggle();
// });

const observer = new IntersectionObserver((enteries) => {
  $.each(enteries, function (entry) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.addClass("show");
    } else {
      entry.removeClass("show");
    }
  });
});

const hiddenElements = $(".hidden");
$.each(hiddenElements, (el) => {
  observer.observe(el);
});
