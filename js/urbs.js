	//

//$(document).ready(function () {
//	$("#tendi").animate({
//		opacity:0.25,
//		top:-150%
//	}, 5000, function() {
//	});
//});

// Seta indo pra cima e Logo "sumindo"
$(document).ready(function () {
  $( "#seta-splash" ).stop(true, true).delay(500).animate({
    top: "-2000%",
    rotation: "0.01"
  }, 5500, "linear", function() {
    // Animation complete.
  });

  $( "#logo-splash").stop(true, true).delay(650).animate({
  	opacity: 0,
  }, 200, "linear", function() {
  })
});

// This is the menu button, animated
function myFunction(x) {
    x.classList.toggle("change");
}