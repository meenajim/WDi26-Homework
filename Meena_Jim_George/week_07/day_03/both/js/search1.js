const state = {
  page: 1,
  lastPage: false
};

const searchMeal = function (term) {
  if(state.lastPage){return;}
  console.log('Searching Meal for', term);
  const mealURL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  $.getJSON(mealURL, {

    s: term,
    page: state.page++
  }).done(showImages).done(function(r){
    console.table(r);

    if (r.meals.page >= r.meals.pages)
    {
      state.lastPage = true;
    }

  });
};

const showImages = function (results) {
  console.log( results.meals);
  for (var i = 0; i < results.meals.length; i++) {
  const $img = $('<img/>',{src: results.meals[i].strMealThumb});
  $img.appendTo('#images');
}
};

$(document).ready(function () {
  $('#search').on('click', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    state.lastPage = false;
    state.page = 1;
    $('#images').empty();
    searchMeal(query);
  });

  const throttledSearchMeal = _.throttle( searchMeal,6000,{trailing: false});

    $(window).on('scroll', function () {
      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollTop = $(document).scrollTop();

      const scrollBottom = documentHeight - (windowHeight + scrollTop);

      if (scrollBottom < 500) { // Tweak this value
        const query = $('#query').val();
        throttledSearchMeal(query);
        // searchFlickr( query ); // Don't make too requests: throttle
      }
    });

});
