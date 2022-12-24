$(function(){
    
$('.bars').on('click', function (){
   $('.sidebar').toggleClass('ber-hou');
   $('.fa').toggleClass('fa-bars');
});    
    
    
// counter
 $('.counter').counterUp({
    delay: 10,
    time: 1000
}); 
    
   
    
    
// feedback slider
$('.feedback-item-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  nextArrow:'.right',
  prevArrow:'.left',
});
// team-slider
$('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
}); 
    
// banner-slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
}); 
    
// types js    
$(".typed").typed({
		strings: ["Developers.", "Designers.", "People.", "Hero alom"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});       
    
    
//background video
    
jQuery(".player").YTPlayer();  
      
    
    
});