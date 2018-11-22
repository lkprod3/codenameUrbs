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
  $("#menu").hide();
  $("#episodios").hide();
  $("#noticias").hide();

  $( "#seta-splash" ).stop(true, true).delay(500).animate({
    top: "-2000%",
    rotation: "0.01"
  }, 5500, "linear", function() {
    // Fim da animação
  });

  $( "#logo-splash").stop(true, true).delay(650).animate({
  	opacity: 0,
  }, 200, "linear", function() {
  $("#noticias").show("slide", { direction: "down" }, 320);
  })

});

function menutoggle() {
  if ( $("#episodios").is(":visible")) {
  $("#episodios").hide("slide", { direction: "down" }, 200);
  }
  if ( $("#noticias").is(":visible")) {
    $("#noticias").hide("slide", { direction: "down" }, 200);
  }
  if ($("#menu").is(":hidden")) {
    $('#menu').show("slide", { direction: "up" }, 320);
  }
  else if ($("#menu").is(":visible")) {
    $('#menu').hide("slide", { direction: "up" }, 200);
    $("#noticias").show("slide", { direction: "down" }, 320);
  }
  }

  function gotoEpisodios() {
    $('#menu').hide();
    $("#episodios").show("slide", { direction: "left" }, 200);
    }
    

  function gotoHome() {
    $('#menu').hide();
    $("#noticias").show("slide", { direction: "left" }, 200);
  }

$(".card_1").click(function() {
    $("#noticias").hide("slide", { direction: "right" }, 200);
    $("#episodios").show("slide", { direction: "left" }, 200);
});

// This is the menu button, animated
function myFunction(x) {
    x.classList.toggle("change");
}

$(function json_cards() {
  var cards_home = [];
  $.getJSON('json/cards_home.json', function(data) {
      $.each(data, function(i, f) {
         var card_home = '<a href="' + f.pointer + '" class="text-decor-none card_' + f.id + '"><div class="card mx-auto mb-5 w-98" data-index="' + f.id + '"><img class="card-img-top" src="' + f.imgcard + '" alt="Card image cap"><div class="card-body"><p class="card-text text-center font-weight-bold">' + f.titulo + '</p></div></a>'
          $(card_home).appendTo("#noticias");
    });
  });
});

$(function json_eps() {
  var episodios = [];
  $.getJSON('json/episodios.json', function(data) {
      $.each(data, function(e, g) {
         var ep_thumb = '<a href="#' + g.href + '" class="text-decor-none mx-3"><div class="container-fluid bgR2 m-0 p-0 cW" data-index="' + g.id_ep + '"><img class="img-fluid" src="' + g.thumbnail + '" alt="' + g.header1 + '" class="img-fluid w-100"><p class="text-center py-2">Episódio ' + g.id_ep + '<br>' + g.header1 + '</div></a>'
          $(ep_thumb).appendTo("#episodios");
    });
  });
});

if ( $(window).width() > 70) {   
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
          $('.slidd').stop().slideUp(200);
          up = !up;
          console.log(up);
      } else if(newscroll < mypos && up) {
          $('.slidd').stop().slideDown(90);
          up = !up;
      }
      mypos = newscroll;
  });
  }

  $(function ( ) {
    $(window).on('hashchange', function(){
      // On every hash change the render function is called with the new hash.
      // This is how the navigation of our app happens.
      render(decodeURI(window.location.hash));
  });
  function render(url) {
  }
  })
