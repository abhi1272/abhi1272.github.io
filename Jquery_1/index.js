$(document).ready(() => {

//Collapse component - accordion format 

	$(".content").click(() => {
		$(".hide").toggle()
	})

// Navbar component 

	$('.toggle-nav').click(function(e) {
		$('.menu ul').toggleClass('active');
		e.preventDefault();
	});

// Modal component 

	$("#myBtn").click(function() {
		$(".modal").css("display","block")
	});

	$(".close").click(() => {
		$(".modal").css("display","none")
	})

})