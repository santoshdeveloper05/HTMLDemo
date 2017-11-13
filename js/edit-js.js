


jQuery(function($){
	
$('a.mobilemenu').click(function(){
         $('.nav-sup').slideToggle('slow');
});

$('.tophead').find('.details').find('.mobilemenu').on('click', function(){
	$('.mobilemenu').toggleClass('active');
});


$('.header-top .toggle-icon').click(function(){
	$(this).parent().toggleClass('menu-active');
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);

wow.init();

// $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
// });

$('.pricing-tab-sec .nav-pills > li > a').click(function(){
	$(this).parent().addClass('active-tab').siblings().removeClass('active-tab');
	var x = $(this).parent().is('.confrnce.active-tab');
	if(x==true){
		$(this).parents('body').addClass('greentab');
	}else{
		$(this).parents('body').removeClass('greentab');
	}
});


// var $tabs = $('#changing-tab, #changing-tab2, #changing-tab3, #changing-tab4');
// $tabs.responsiveTabs({
//     collapsible: false,
//     setHash: true,
//     rotate: true,
//     animation: 'fade'               
// });

// $('.select-tab').on('click', function() {
//     $tabs.responsiveTabs('activate', $(this).val());
// });



// $('.tabs').tabslet({
// 	autorotate:true,	
// 	animation:    true,	
// 	pauseonhover: false,
// 	delay:        3000,
// 	active:       1,
// 	container:    false
// });





$('#changing-tab').addClass('first-tab');
$('#changing-tab2').addClass('seconed-tab');
$('#changing-tab3').addClass('third-tab');
$('#changing-tab4').addClass('fourth-tab');



// first-tab

	    $('.first-tab .nav-tabs li').each(function(i, m){ 
        var abc = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.first-tab .nav-tabs li', function(){
$(this).parents('#changing-tab').removeClass('first-tab');
clearTimeout(abc);
});

});

 var xyz = setInterval(function() {
	    $('.first-tab .nav-tabs li').each(function(i, m){ 
       var abc = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.first-tab .nav-tabs li', function(){
$(this).parents('#changing-tab').removeClass('first-tab');
clearTimeout(abc);
});
    });
}, 8000);

$('body').on('focus','.first-tab .nav-tabs li', function(){
$(this).parents('#changing-tab').removeClass('first-tab');
clearInterval(xyz);
});


// seconed-tab


	    $('.seconed-tab .nav-tabs li').each(function(i, m){ 
        var bbb = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.seconed-tab .nav-tabs li', function(){
$(this).parents('#changing-tab2').removeClass('seconed-tab');
clearTimeout(bbb);
});

});

 var ccc = setInterval(function() {
	    $('.seconed-tab .nav-tabs li').each(function(i, m){ 
       var bbb = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.seconed-tab .nav-tabs li', function(){
$(this).parents('#changing-tab2').removeClass('seconed-tab');
clearTimeout(bbb);
});
    });
}, 8000);

$('body').on('focus','.seconed-tab .nav-tabs li', function(){
$(this).parents('#changing-tab2').removeClass('seconed-tab');
clearInterval(ccc);
});




// thired


	    $('.third-tab .nav-tabs li').each(function(i, m){ 
        var ddd = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.third-tab .nav-tabs li', function(){
$(this).parents('#changing-tab3').removeClass('third-tab');
clearTimeout(ddd);
});

});

 var eee = setInterval(function() {
	    $('.third-tab .nav-tabs li').each(function(i, m){ 
       var ddd = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 2000*i );

$('body').on('focus','.third-tab .nav-tabs li', function(){
$(this).parents('#changing-tab3').removeClass('third-tab');
clearTimeout(ddd);
});
    });
}, 8000);

$('body').on('focus','.third-tab .nav-tabs li', function(){
$(this).parents('#changing-tab3').removeClass('third-tab');
clearInterval(eee);
});



// fourth-tab

	    $('.fourth-tab .nav-tabs li').each(function(i, m){ 
        var fff = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 1500*i );

$('body').on('focus','.fourth-tab .nav-tabs li', function(){
$(this).parents('#changing-tab4').removeClass('fourth-tab');
clearTimeout(fff);
});

});

 var ggg = setInterval(function() {
	    $('.fourth-tab .nav-tabs li').each(function(i, m){ 
       var fff = setTimeout(function(){
            $(m).find('a').trigger('click');
        }, 1500*i );

$('body').on('focus','.fourth-tab .nav-tabs li', function(){
$(this).parents('#changing-tab4').removeClass('fourth-tab');
clearTimeout(fff);
});
    });
}, 8500);

$('body').on('focus','.fourth-tab .nav-tabs li', function(){
$(this).parents('#changing-tab4').removeClass('fourth-tab');
clearInterval(ggg);
});







// // fourth-tab
// 	    $('.fourth-tab .nav-tabs li').each(function(i, m){ 
//         var abc = setTimeout(function(){
//             $(m).find('a').trigger('click');
//         }, 1500*i );

// $('body').on('focus','.fourth-tab .nav-tabs li', function(){
// $(this).parents('#changing-tab4').removeClass('fourth-tab');
// clearTimeout(abc);
// });
//     });

//  var xyz = setInterval(function() {
// 	    $('.fourth-tab .nav-tabs li').each(function(i, m){ 
//         var abc = setTimeout(function(){
//             $(m).find('a').trigger('click');
//         }, 1500*i );
//         $('body').on('focus','.fourth-tab .nav-tabs li', function(){
// $(this).parents('#changing-tab4').removeClass('fourth-tab');
// clearTimeout(abc);
// });
//     });
// }, 8500);


// $('body').on('focus','.fourth-tab .nav-tabs li', function(){
// $(this).parents('#changing-tab4').removeClass('fourth-tab');
// clearInterval(xyz);
// });


















if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}

});
	
	
	
	
	
	
	
	
	
	