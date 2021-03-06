/*$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script*/

//THIS IS FOR PARALLAX EFFECT ON PAGE

$('.home').parallax({imageSrc: 'img/header.jpg'});
$('.contact-parallax').parallax({imageSrc: 'img/contact.jpg'});
/* Create HTML5 element for IE */
document.createElement("section");

//THIS IS FOR SKILL BAR

jQuery('.skillbar').each(function(){
  jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
  },2000);
});

jQuery(function() {
    var sections = jQuery('section');
    var navigation_links = jQuery('nav a');
    sections.waypoint({
    handler: function(direction) {
      var active_section;
      active_section = jQuery(this);
      if (direction === "up") active_section = active_section.prev();
      var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
      navigation_links.parent().removeClass("active");
      active_link.parent().addClass("active");
      active_section.addClass("active-section");
    },
    offset: '35%'
    });
  });
//THIS IS FOR SCROLLING THROUGH MENU BAR -- SMOOTH SCROLL EFFECT

$(function() {
  $('a[href*=#]:not([href=#carousel-reviews])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-85
        }, 1000);
        return false;
      }
    }
  });
});

//Progress Bar
var $skillcss = $('.css');
$skillcss.waypoint (function() {
		$skillcss.addClass('css-animate');
}, {offset: '95%'});

var $skillj = $('.jva');
$skillj.waypoint (function() {
		$skillj.addClass('jva-animate');
}, {offset: '95%'});


// FOR NAVBAR
$(window).scroll(function() {
        if ($(this).scrollTop() > 15) {
            $('nav').addClass("navbar-alt")
        } else {
            $('nav').removeClass("navbar-alt")
        }
    });

/*===================================================*/
var $container = $('#works-img');

    $(window).load(function() {
        $container.isotope({
//        resizable: false, // disable normal resizing
            transitionDuration: '0.65s',
            masonry: {
                columnWidth: $container.find('.gallery-item:not(.wide)')[0]
            }
        });

        $(window).resize(function() {
            $container.isotope('layout');
        });
    });

    // filter items on button click
    $('#filters').on('click', 'button', function(e) {
        $(e.target).toggleClass('active').siblings().removeClass("active");
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});
    });

// INITIALIZATION FOR ANIMATION
new WOW().init();

