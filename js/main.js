$(document).ready(function() {


	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 45) {
	        $(".contNav").addClass("hFixed");
	    } else {
	        $(".contNav").removeClass("hFixed");
	    }
	});

	//Mostrar. menu
	$(".menRes").on("click",function(){
		$(".contMenu").slideToggle("");
		$(".menRes").toggleClass("activo");
	});

	//Mostrar. menu
	$(".btnMAr").on("click",function(){
		$(".marcas > ul").slideToggle("");
		$(".btnMAr").toggleClass("activo");
	});

	$(window).on('resize', function(){
		if( $(window).width()>800) {
			$('.contMenu').slideDown();
		}
	});



});


/*setTimeout( function(){
	$(".cinco").addClass("fadeInDown");
	$(".cinco").show();
},1000);*/