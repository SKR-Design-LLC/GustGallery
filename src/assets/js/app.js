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

// nav bars
$('.nav_bars').click(function() {
  // $(this).toggleClass('change');
  if ($('.main_nav').first().is(':hidden')) {
    $('.main_nav').slideDown('slow');
    $('.nav_bars').addClass('change');
  } else {
      $('.main_nav').hide();
      $('.nav_bars').removeClass('change');
  }

  $('.main_nav').removeClass('change');

});
// when an item in the menu is clicked the menu will hide
$('.main_nav').children().click(function() {
  $('.main_nav').hide();
  $('.nav_bars').removeClass('change');
});

// Back to top-button
$(function(){
    $('.top-button').click(function(){
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
