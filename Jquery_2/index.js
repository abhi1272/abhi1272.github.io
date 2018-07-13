$("document").ready(() => {

	$('button').addClass('pick')
	$('.year').hide()

	$(function() {
	    $("select").change(function() {
	        if ($('option:selected', this).text() === 'Title' ){
	        	$('.search').attr('placeholder','Enter the Title...');
	        	$('button').addClass("btn1")
	        	$('button').removeClass('pick btn2 btn3')
	        	$('.year').hide()				
	        }

	        if($('option:selected', this).text() === 'Name' ){
	        	$('.search').attr('placeholder','Enter the Name...');	
	     	  	$('.year').hide()
	     	  	$('button').addClass("btn2")
	        	$('button').removeClass('pick btn1 btn3')
	        }

	  		if($('option:selected', this).text() === 'Name & Year' ){
	        	$('.search').attr('placeholder','Enter the Name');
	        	$('.year').show()
	        	$('button').addClass("btn3")
	        	$('button').removeClass('pick btn1 btn2')
	        	
	        }
	    });
	});	

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





	$(".fullcard").hide();

//	$("input").focusin(()  => {
//		$(".fullcard").hide();
//	})


});

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
		}


	});
}

function fetchByMovieName(movieName){


	$.ajax({
		type: 'GET',
		datatype: 'json',
		url: 'http://www.omdbapi.com/?apikey=88ad5084&t='+movieName,

		success: (data) => {

			getDetails(data)

		},
		error: (data) => {
			alert("some error occured");
		}

	});
}

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
		}

	});
}


function getDetails(data){

	if(data.Response === 'False'){
				alert(data.Error)
				$(".fullcard").hide();
			}
			else{
				$(".fullcard").show();	
			}

			$('#coverPhoto').html('<img src="' + data.Poster + '" class="img-fluid profileHeight"/>')

			$(".card-title").text(data.Title)

			$(".rating").text(data.Ratings[0].Value)

			$(".card-text").text(data.Plot)

			$('.Director').text(data.Director)
			$('.Actors').text(data.Actors)
			$('.Country').text(data.Country)
			$('.Genre').text(data.Genre)
			$('.Language').text(data.Language)
			$('.imdbID').text(data.imdbID)
			$('.imdbVotes').text(data.imdbVotes)
			$('.Released').text(data.Released)
			$('.Runtime').text(data.Runtime)
			$('.DVD').text(data.DVD)
}












