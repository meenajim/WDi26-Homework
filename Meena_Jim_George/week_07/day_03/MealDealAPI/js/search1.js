
const searchMeal = function (term) {
  // if(state.lastPage){return;}
  console.log('Searching Meal for', term);
  const mealURL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  $.getJSON(mealURL, {

    s: term//,
  }).done(showImages).done(function(r){
    console.table(r);

  });
};

const showImages = function (results) {
  console.log( results.meals);
  if(results.meals === null)
  {console.log("No results for " + $('#query').val());}

  else {
    for (var i = 0; i < results.meals.length; i++) {
    const $img = $('<img/>',{src: results.meals[i].strMealThumb});
    $img.appendTo('#images');
  }

}
};

$(document).ready(function () {
  $('#search').on('click', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    console.log(query);
    $('#images').empty();
    searchMeal(query);
  });


});
