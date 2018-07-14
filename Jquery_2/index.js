$("document").ready(() => {

	$('button').addClass('pick')
	$(".fullcard").hide();
	$('.loader').hide()
	$('.year').hide()
	
// validate the option 

	$(function() {
	    $("select").change(function() {
	        if ($('option:selected', this).text() === 'Movie Id' ){
	        	$('.search').attr('placeholder','Enter the Id...');
	        	$('button').addClass("btn1")
	        	$('button').removeClass('pick btn2 btn3')
	        	$('.year').hide()				
	        }

	        if($('option:selected', this).text() === 'Movie Name' ){
	        	$('.search').attr('placeholder','Enter the Movie Name...');	
	     	  	$('.year').hide()
	     	  	$('button').addClass("btn2")
	        	$('button').removeClass('pick btn1 btn3')
	        }

	  		if($('option:selected', this).text() === 'Movie & Release Year' ){
	        	$('.search').attr('placeholder','Enter the Name');
	        	$('.year').show()
	        	$('button').addClass("btn3")
	        	$('button').removeClass('pick btn1 btn2')
	        	
	        }
	    });
	});	

// Click for Movie ID

	$(document).on('click', ".pick",() => {
		if($('.search').val() === undefined || $('.search').val() === "" ||
			$('.search').val() === null){
			alert('Enter Title of the movie')
		}else{
			title = $('.search').val()
			fetchByTitle(title)
			$('input[type=text]').each(function(){
	     		$(this).val('');
	  		});
	  	}
	})


// Click for Movie ID

	$(document).on('click', ".btn1",() => {
					if($('.search').val() === undefined || $('.search').val() === "" ||
									$('.search').val() === null){
									alert('Enter Title of the movie')
					}else{
						title = $('.search').val()
						fetchByTitle(title)
						$('input[type=text]').each(function(){
	     					$(this).val('');
	  					});
	  				}
				})		


// Click for Movie Name

	$(document).on('click', ".btn2",() => {
				if($('.search').val() === undefined || $('.search').val() === "" ||
					$('.search').val() === null){
					alert('Enter the movie Name')
				}
				else{
					movieName = $('.search').val()
					fetchByMovieName(movieName)
					$('input[type=text]').each(function(){
	     					$(this).val('');
	  				});
				}
			})

// Click for Movie Name and Release year

	$(document).on('click', ".btn3",() => {
			
				if($('.search').val() === undefined || $('.search').val() === "" ||
								$('.search').val() === null){
								alert('Enter Name of the movie')
				}
					if($('.year').val() === undefined || $('.year').val() === "" ||
								$('.year').val() === null){
								alert('Enter year of the movie')	
					}
				else{
						Name = $('.search').val()
						year =  $('.year').val()
						fetchByMovieAndTitleName(Name,year)
						$('input[type=text]').each(function(){
	     					$(this).val('');
	  					});
				}
			})


//	$("input").focusin(()  => {
//		$(".fullcard").hide();
//	})


});

// Fuction call fetch data by Title

function fetchByTitle(title){

	$.ajax({
		type: 'GET',
		datatype: 'json',
		url: 'http://www.omdbapi.com/?apikey=88ad5084&i='+title,
		success: (data) => {

			getDetails(data)

		},
		error: (data) => {
			alert("some error occured");
			$('.loader').hide()
		},
		 beforeSend: () => { // while request is processing.

		 	$('.loader').show()

        },
        complete: () => {

            $('.loader').hide()
        }

	});
}

// Fuction call fetch data by Movie Name

function fetchByMovieName(movieName){


	$.ajax({
		type: 'GET',
		datatype: 'json',
		url: 'http://www.omdbapi.com/?apikey=88ad5084&t='+movieName,

		success: (data) => {

			getDetails(data)

		},
		error: (data) => {
			$('.loader').hide()
			alert("some error occured");
		},
		 beforeSend: () => { // while request is processing.

		 	$('.loader').show()

        },
        complete: () => {

            $('.loader').hide()
        }

	});
}

// Fuction call fetch data by Movie Name And Release Year

function fetchByMovieAndTitleName(Name,year){


	$.ajax({
		type: 'GET',
		datatype: 'json',
		url: 'http://www.omdbapi.com/?apikey=88ad5084&t='+Name+'&y='+year,

		success: (data) => {

			getDetails(data)

		},
		error: (data) => {
			alert("some error occured");
			$('.loader').hide()
		},
		 beforeSend: () => { // while request is processing.

		 	$('.loader').show()

        },
        complete: () => {

            $('.loader').hide()
        }

	});
}


// Get all Details of the Movie 

function getDetails(data){

	if(data.Response === 'False'){
				alert(data.Error)
				$(".fullcard").hide();
				$('.loader').hide()
			}
			else{
				$(".fullcard").show();	
			}


// Validation 

			if(data.Poster !== 'N/A'){
				$('#coverPhoto').html('<img src="' + data.Poster + '" class="img-fluid profileHeight"/>')
			}
			else{
				$('#coverPhoto').html('<img src="' + 'https://www.nettv4u.com/uploads/entethallatha-kaaranathal-movie-review.jpg' + '" class="img-fluid defaultHeight"/>')
			}

			
			if(data.Title === undefined || data.Title === "" || data.Title === null){
						$(".card-title").text('N/A')
			}
			else{
				$(".card-title").text(data.Title)
			}
			if(data.Ratings[0] === undefined || data.Ratings[0] === "" || data.Ratings[0] === null){
					$(".rating").text('Rating: N/A')		
			}
			else{
				$(".rating").text(data.Ratings[0].Value)
			}
			if(data.Plot === undefined || data.Plot === "" || data.Plot === null){
				$(".card-text").text('N/A')
			}
			else{
				$(".card-text").text(data.Plot)
			}
			if(data.Director === undefined || data.Director === "" || data.Director === null){
				$('.Director').text('N/A')
			}
			else{
				$('.Director').text(data.Director)
			}
			if(data.Actors === undefined || data.Actors === "" || data.Actors === null){
				$('.Actors').text('N/A')
			}
			else{
				$('.Actors').text(data.Actors)
			}
			if(data.Country === undefined || data.Country === "" || data.Country === null){
				$('.Country').text('N/A')
			}
			else{
				$('.Country').text(data.Country)
			}
			if(data.Genre === undefined || data.Genre === "" || data.Genre === null){
				$('.Genre').text('N/A')
			}
			else{
				$('.Genre').text(data.Genre)
			}
			if(data.Language === undefined || data.Language === "" || data.Language === null){
				$('.Language').text('N/A')
			}
			else{
				$('.Language').text(data.Language)
			}
			if(data.imdbID === undefined || data.imdbID === "" || data.imdbID === null){
				$('.imdbID').text('N/A')
			}
			else{
				$('.imdbID').text(data.imdbID)
			}
			if(data.imdbVotes === undefined || data.imdbVotes === "" || data.imdbVotes === null){
				$('.imdbVotes').text('N/A')
			}
			else{
				$('.imdbVotes').text(data.imdbVotes)
			}
			if(data.Released === undefined || data.Released === "" || data.Released === null){
				$('.Released').text('N/A')
			}
			else{
				$('.Released').text(data.Released)
			}
			if(data.Runtime === undefined || data.Runtime === "" || data.Runtime === null){
				$('.Runtime').text('N/A')
			}
			else{
				$('.Runtime').text(data.Runtime)
			}
			if(data.DVD === undefined || data.DVD === "" || data.DVD === null){
				$('.DVD').text('N/A')
			}
			else{
				$('.DVD').text(data.DVD)
			}
			
}












