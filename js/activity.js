$(document).ready(function () {
  var count = 0;

  function getHeader(indx) {
    var dir = "";
    if (indx == 1) {
      dir = "West Cliff";
    } else if (indx == 2) {
      dir = "North Cliff";
    } else if (indx == 3) {
      dir = "East Cliff";
    } else if (indx == 4) {
      dir = "South Cliff";
    }
    return dir;
  }

  $("td").hover(function () {
    if ($(this).is("td:first-child") && $("td").text() != "Not Available") {
    } else {
      $(this).css("cursor", "pointer");
    }
  });

  $("td").click(function () {
    if ($(this).is("td:first-child")) {
    } else if (
      $(this).css("background-color") == "rgb(152, 251, 152)" &&
      $(this).text() != "Not Available"
    ) {
      //  change selected cell to dark blue
      $(this).css({
        "background-color": "#336699",
        color: "white",
        "font-weight": "bold",
      });

      // add selected cell contents to inquire div
      var activities_inquire = $(".activities-inquire h2");
      var cell_text = $(this).text();
      var th_index = $(this).index();
      var dir = getHeader(th_index);
      activities_inquire.after(`<p>${cell_text} at ${dir}</p>`);

      count += 1;
    } else {
      // change selected cell to original color
      $(this).css({
        "background-color": "#98fb98",
        color: "black",
        "font-weight": "normal",
      });
      if ($(this).text() != "Not Available") {
        count -= 1;
      }
      //remove <p> from inquire div
      td_text = $(this).text();
      var activities_inquire = $(".activities-inquire p");
      var th_index = $(this).index();
      var dir = getHeader(th_index);
      activities_inquire.filter(function () {
        if ($(this).text() == `${td_text} at ${dir}`) {
          $(this).remove();
        }
      });
    }

    if (count > 0) {
      $(".activities-inquire").addClass("activities-inquire-show");
    } else {
      $(".activities-inquire").removeClass("activities-inquire-show");
    }
  });
});
