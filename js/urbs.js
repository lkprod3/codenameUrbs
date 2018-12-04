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
  $("#fixed-top-bar").hide();
  $(".page").hide();
  $("#s01_pages").hide();

  $( "#seta-splash" ).stop(true, true).delay(500).animate({
    top: "-2000%",
    rotation: "0.01"
  }, 5500, "linear", function() {
  $("#seta-splash").hide();
    // Fim da animação
  });

  $( "#logo-splash").stop(true, true).delay(650).animate({
  	opacity: 0,
  }, 200, "linear", function() {
  $("#noticias").show("slide", { direction: "down" }, 320);
  $("#logo-splash").hide();
  $("#fixed-top-bar").show();
  })

});

function menutoggle() {
  if ( $("#episodios").is(":visible")) {
  $("#episodios").hide("slide", { direction: "down" }, 200);
  $("#sobre").hide("slide", { direction: "down" }, 200);
  $("#rota_01").hide("slide", { direction: "down" }, 200);
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
    $(".page").hide();
    $("#episodios").show("slide", { direction: "left" }, 200);
    };

  function gotoHome() {
    $('#menu').hide();
    $(".page").hide();
    $("#noticias").show("slide", { direction: "left" }, 200);
  }
  function gotoSobre() {
    $('#menu').hide();
    $(".page").hide();
    $("#sobre").show("slide", { direction: "left" }, 200);
  }
  function gotoRotas() {
    $('#menu').hide();
    $(".page").hide();
    $("#rota_01").show("slide", { direction: "left" }, 200);
  }

  function epGoto_1() {
    $("#episodios").hide();
    $("#s01e02").hide();
    $("#s01e03").hide();
    $("#s01e04").hide();
    $("#s01e05").hide();
    $("#s01e01").show("slide", { direction: "right" }, 200);
  }
  function epGoto_2() {
    $("#episodios").hide();
    $("#s01e01").hide();
    $("#s01e03").hide();
    $("#s01e04").hide();
    $("#s01e05").hide();
    $("#s01e02").show("slide", { direction: "right" }, 200);
  }
  function epGoto_3() {
    $("#episodios").hide();
    $("#s01e02").hide();
    $("#s01e01").hide();
    $("#s01e04").hide();
    $("#s01e05").hide();
    $("#s01e03").show("slide", { direction: "right" }, 200);
  }
  function epGoto_4() {
    $("#episodios").hide();
    $("#s01e02").hide();
    $("#s01e03").hide();
    $("#s01e01").hide();
    $("#s01e05").hide();
    $("#s01e04").show("slide", { direction: "right" }, 200);
  }
  function epGoto_5() {
    $("#episodios").hide();
    $("#s01e02").hide();
    $("#s01e03").hide();
    $("#s01e04").hide();
    $("#s01e01").hide();
    $("#s01e05").show("slide", { direction: "right" }, 200);
  }

  

function cardClick_1() {
  $("#noticias").hide("slide", { direction: "right" }, 200);
  $("#s01e01").show("slide", { direction: "right" }, 200);
};

function cardClick_2() {
  var onInApp = window.open('https://www.youtube.com/watch?v=98c3hym3KD8', '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
};

function cardClick_3() {
  $("#noticias").hide("slide", { direction: "right" }, 200);
  $("#rotas").show("slide", { direction: "left" }, 200);
}

// This is the menu button, animated
function myFunction() {
  if ($("#changer").hasClass("change")) {
    $("#changer").removeClass("change");  
  } else {
  $("#changer").addClass("change");
}
};

$(function json_cards() {
  var cards_home = [];
  $.getJSON('json/cards_home.json', function(data) {
      $.each(data, function(i, f) {
         var card_home = '<div class="card pointer mx-auto mb-5 w-98 card_' + f.id + '" onclick="cardClick_' + f.id + '()" data-index="' + f.id + '"><img class="card-img-top" src="' + f.imgcard + '" alt="Card image cap"><div class="card-body" onclick="cardClick_' + f.id + '"><p class="card-text text-center font-weight-bold">' + f.titulo + '</p></div></div>'
          $(card_home).appendTo("#noticia_cards");
    });
  });
});

$(function json_eps() {
  var episodios = [];
  $.getJSON('json/episodios.json', function(data) {
      $.each(data, function(e, g) {
         var ep_thumb = '<div class="container-fluid bgR2 mt-3 mb-3  p-0 cW" data-index="' + g.id_ep + '" onclick="epGoto_' + g.id_ep + '()"><img class="img-fluid" src="' + g.thumbnail + '" alt="' + g.header1 + '" class="img-fluid w-100"><p class="text-center py-2">Episódio ' + g.id_ep + '<br>' + g.header1 + '</div>'
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
  });

  var edificios = [0];

  function ed1_click() {
    if ($(".toggle_desc_1").is(":visible")) {
      $(".toggle_desc_1").hide("slide", { direction: "up" }, 200);
      $("#ed_1").css("color", "black");
    } else {
      $(".toggle_desc_1").show("slide", { direction: "up" }, 200);
      $("#ed_1").css("color", "white");
      var edificios = [0];
      edificios.push("1");
    }
  }
  function ed2_click() {
    if ($(".toggle_desc_2").is(":visible")) {
      $(".toggle_desc_2").hide("slide", { direction: "up" }, 200);
      $("#ed_2").css("color", "black");
    } else {
      $(".toggle_desc_2").show("slide", { direction: "up" }, 200);
      $("#ed_2").css("color", "white");
    }
  }
  function ed3_click() {
    if ($(".toggle_desc_3").is(":visible")) {
      $(".toggle_desc_3").hide("slide", { direction: "up" }, 200);
      $("#ed_3").css("color", "black");
    } else {
      $(".toggle_desc_3").show("slide", { direction: "up" }, 200);
      $("#ed_3").css("color", "white");
    }
  }
  function ed4_click() {
    if ($(".toggle_desc_4").is(":visible")) {
      $(".toggle_desc_4").hide("slide", { direction: "up" }, 200);
      $("#ed_4").css("color", "black");
    } else {
      $(".toggle_desc_4").show("slide", { direction: "up" }, 200);
      $("#ed_4").css("color", "white");
    }
  }
  function ed5_click() {
    if ($(".toggle_desc_5").is(":visible")) {
      $(".toggle_desc_5").hide("slide", { direction: "up" }, 200);
      $("#ed_5").css("color", "black");
    } else {
      $(".toggle_desc_5").show("slide", { direction: "up" }, 200);
      $("#ed_5").css("color", "white");
    }
  }  
function ed6_click() {
    if ($(".toggle_desc_6").is(":visible")) {
      $(".toggle_desc_6").hide("slide", { direction: "up" }, 200);
      $("#ed_6").css("color", "black");
    } else {
      $(".toggle_desc_6").show("slide", { direction: "up" }, 200);
      $("#ed_6").css("color", "white");
    }
      }