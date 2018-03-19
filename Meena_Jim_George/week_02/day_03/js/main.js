// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
console.log("connected");

//change image to this one: https://orig00.deviantart.net/9b93/f/2012/245/5/7/zeit___cat_dance_by_thefaileddream-d5daxhp.gif

let image = document.getElementsByTagName("img")[0];
// image.style.position = 'absolute';
image.style.left = '0px';

let catWalk = function(){
let oldPosition = parseInt(image.style.left);
let newPosition = oldPosition + 5;
image.style.left=newPosition + "px";


//Make the cat repeat the walk
//if(newPosition > 1450)
if(newPosition >500)
{
  //window.clearInterval(stopwalk);
//Make the cat start over
image.style.left = '0px';
image.style.transform = 'scaleX(-1)';

let b_oldPosition = parseInt(image.style.left);
let b_newPosition = b_oldPosition + 10
//Flip the cat
// image.style.transform = 'scaleX(-1)';
//let newPosition = oldPosition - 10;
// console.log('old pos '+oldPosition);
// console.log('new pos ' +newPosition);
image.style.left= b_newPosition + "px";
}
}



let stopwalk = window.setInterval(catWalk,50);
