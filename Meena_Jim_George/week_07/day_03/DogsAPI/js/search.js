


const searchDog = function()
{
  console.log('working');
  const dogURL= "https://random.dog/woof.json";
  $.getJSON(dogURL).done(showImages).done(function(r){
    console.table(r);
  });
};

const showImages = function(results)
{
  console.log(results.url);
  const $img = $('<img/>',{src: results.url});
  $img.appendTo('#images');
}

$(document).ready(function () {

  $('#search').on('click', function (event) {
    event.preventDefault();
    $('#images').empty();
    searchDog();
  });

});
