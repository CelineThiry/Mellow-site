$( document ).ready(function() {
    console.log( "ready!" );
    $('.burger').on('click', function() {
    	$(this).toggleClass('active');
    	if ($(this).hasClass('active')) {
    		$('.my-desktop-menu').addClass('active');
    	} else {
    		$('.my-desktop-menu').removeClass('active');
    	}
    	
    });
});