import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// Assigns "active" class to navbar item based on current page URL with jQuery
$(function(){
  var pathname = window.location.pathname;
	 $('.main_nav > li > a[href="'+pathname+'"]').addClass('active');
});

// mobile nav - open/close nav on click
$('.nav_bars').click(function() {
  if ($('.main_nav').first().is(':hidden')) {
    $('.main_nav').slideDown('slow');
    $('.nav_bars').addClass('change');
  } else {
      $('.main_nav').slideUp('slow');
      $('.nav_bars').removeClass('change');
  }

  $('.main_nav').removeClass('change');

});

//Within div id="artists" - looks for images' naturalHeight
//and adds one of two classes based on height
$(function() {
  var images = $('.artist_section').find('img');
  // you could also change heigth to naturalHeight
  for( var i=0; i<images.length;i++){
    if (images[i].naturalHeight > 900) {
      $(images[i]).addClass('vertical_extra_long');
    }
    else{
      if(images[i].naturalHeight > 600) {
        $(images[i]).addClass('vertical');
      }
    }
  }
});

// Back to top-button
$(function(){
    $('.footer__to_top__link').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
         return false;
    });

});

// Adds current year to Copyright text in footer
$(function(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
});
