//Check to see if the window is top if not then display button
$(document).ready(function(){
3	$('#backTop').css("display", "none");

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 400) {
	        $('#backTop').fadeIn();
	    } else {
	        $('#backTop').fadeOut();
	    }
	});

	//Click event to scroll to top
	$('#backTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});

	$('#bioMove').click(function(){
		$('html, body').animate({
			scrollTop: $('#bioPage').offset().top
		}, 800);
	});

	$('#resumeMove').click(function(){
		$('html, body').animate({
			scrollTop: $('#resumePage').offset().top
		}, 800);
	});

	$('#projectMove').click(function(){
		$('html, body').animate({
			scrollTop: $('#projectPage').offset().top
		}, 800);
	});

	$('#contactMove').click(function(){
		$('html, body').animate({
			scrollTop: $('#contactPage').offset().top
		}, 800);
	});


	// WDI
	$('.readmorewdi').click(function(){
		$('#wdi').toggleClass('readMoreViewRight');
		return false;
	})

	$('#closewdi').click(function(){
		$('#wdi').toggleClass('readMoreViewRight');
		return false;
	})

	// FEWD
	$('.readmorefewd').click(function(){
		$('#fewd').toggleClass('readMoreViewRight');
		return false;
	})

	$('#closefewd').click(function(){
		$('#fewd').toggleClass('readMoreViewRight');
		return false;
	})

	// FINAID
	$('.readmorefinaid').click(function(){
		$('#finAid').toggleClass('readMoreViewRight');
		return false;
	})

	$('#closefinAid').click(function(){
		$('#finAid').toggleClass('readMoreViewRight');
		return false;
	})

	// RETAIN
	$('.readmoreretain').click(function(){
		$('#retain').toggleClass('readMoreViewLeft');
		return false;
	})

	$('#closeretain').click(function(){
		$('#retain').toggleClass('readMoreViewLeft');
		return false;
	})

	// MSED
	$('.readmoremsed').click(function(){
		$('#msed').toggleClass('readMoreViewLeft');
		return false;
	})

	$('#closemsed').click(function(){
		$('#msed').toggleClass('readMoreViewLeft');
		return false;
	})

	// REGISTRAR
	$('.readmoreregistrar').click(function(){
		$('#registrar').toggleClass('readMoreViewLeft');
		return false;
	})

	$('#closeregistrar').click(function(){
		$('#registrar').toggleClass('readMoreViewLeft');
		return false;
	})

	$('#menuButtonDiv').on('mouseover', function(){
		$('#menu').css('top', 0);
		$('#menuButtonDiv').css('top', "8%");
	})

	$('#menuButtonDiv').on('mouseout', function(){
		$('#menu').css('top', "-8%");
		$('#menuButtonDiv').css('top', 0);
	})

	$('#menu').on('mouseover', function(){
		$('#menu').css('top', 0);
		$('#menuButtonDiv').css('top', "8%");
	})

	$('#menu').on('mouseout', function(){
		$('#menu').css('top', "-8%");
		$('#menuButtonDiv').css('top', 0);
	})
});








