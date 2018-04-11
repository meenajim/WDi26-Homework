const state = {
  page: 1,
  lastPage: false
};


const searchDog = function()
{
  if(state.lastPage){return;}
  console.log('working');
  const dogURL= "https://random.dog/woof.json";
  $.getJSON(dogURL).done(showImages).done(function(r){
    console.table(r);

    if (r.url.page >= r.url.pages)
    {
      state.lastPage = true;
    }

  });
};

const showImages = function(results)
{
  console.log(results.url);

// searchDog();
    // const thumbnailURL = generateURL(photo);
  const $img = $('<img/>',{src: results.url});
  $img.appendTo('#images');
}

$(document).ready(function () {

  $('#search').on('click', function (event) {
    event.preventDefault();
    state.lastPage = false;
    state.page = 1;
    $('#images').empty();
    searchDog();
  });

  const throttledSearchDog = _.throttle( searchDog,6000,{trailing: false});

    $(window).on('scroll', function () {
      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollTop = $(document).scrollTop();

      const scrollBottom = documentHeight - (windowHeight + scrollTop);

      if (scrollBottom < 500) { // Tweak this value
        const query = $('#query').val();
        throttledSearchDog(query);
        // searchFlickr( query ); // Don't make too requests: throttle
      }
    });

});
