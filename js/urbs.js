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
    // Fim da animação
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


// $(function () {

//   checkboxes.click(function () {
//       // The checkboxes in our app serve the purpose of filters.
//       // Here on every click we add or remove filtering criteria from a filters object.

//       // Then we call this function which writes the filtering criteria in the url hash.
//       createQueryHash(filters);
//   });

//   $.getJSON( !"cards_home.json", function( data ) {
//       // Get data about our products from products.json.

//       // Call a function that will turn that data into HTML.
//       generateAllProductsHTML(data);

//       // Manually trigger a hashchange to start the app.
//       $(window).trigger('hashchange');
//   });

//   $(window).on('hashchange', function(){
//       // On every hash change the render function is called with the new hash.
//       // This is how the navigation of our app happens.
//       render(decodeURI(window.location.hash));
//   });

//   function render(url) {
//       // This function decides what type of page to show 
//       // depending on the current url hash value.
//   }
//   function generateAllProductsHTML(data){
//       // Uses Handlebars to create a list of products using the provided data.
//       // This function is called only once on page load.
//   }
//   function renderProductsPage(data){
//       // Hides and shows products in the All Products Page depending on the data it recieves.
//   }
//   function renderSingleProductPage(index, data){
//       // Shows the Single Product Page with appropriate data.
//   }
//   function renderFilterResults(filters, products){
//       // Crates an object with filtered products and passes it to renderProductsPage.
//       renderProductsPage(results);
//   }
//   function renderErrorPage(){
//       // Shows the error page.
//   }
//   function createQueryHash(filters){
//       // Get the filters object, turn it into a string and write it into the hash.
//   }
// });

// function render(url) {

//   // Get the keyword from the url.
//   var temp = url.split('/')[0];

//   // Hide whatever page is currently shown.
//   $('.main-content .page').removeClass('visible');

//   var map = {

//       // The Homepage.
//       '': function() {

//           // Clear the filters object, uncheck all checkboxes, show all the products
//           filters = {};
//           checkboxes.prop('checked',false);

//           renderProductsPage(products);
//       },

//       // Single Products page.
//       '#product': function() {

//           // Get the index of which product we want to show and call the appropriate function.
//           var index = url.split('#product/')[1].trim();

//           renderSingleProductPage(index, products);
//       },

//       // Page with filtered products
//       '#filter': function() {

//           // Grab the string after the '#filter/' keyword. Call the filtering function.
//           url = url.split('#filter/')[1].trim();

//           // Try and parse the filters object from the query string.
//           try {
//               filters = JSON.parse(url);
//           }
//           // If it isn't a valid json, go back to homepage ( the rest of the code won't be executed ).
//           catch(err) {
//               window.location.hash = '#';
//           }

//           renderFilterResults(filters, products);
//       }

//   };

//   // Execute the needed function depending on the url keyword (stored in temp).
//   if(map[temp]){
//       map[temp]();
//   }
//   // If the keyword isn't listed in the above - render the error page.
//   else {
//       renderErrorPage();
//   }

// }

$(function json_cards() {
  var cards_home = [];
  $.getJSON('json/cards_home.json', function(data) {
      $.each(data, function(i, f) {
         var card_home = '<a href="' + f.pointer + '" class="text-decor-none"><div class="card mx-auto mb-5 w-98" data-index="' + f.id + '"><img class="card-img-top" src="' + f.imgcard + '" alt="Card image cap"><div class="card-body"><p class="card-text text-center font-weight-bold">' + f.titulo + '</p></div></a>'
          $(card_home).appendTo("#noticias");
    });

  });

});