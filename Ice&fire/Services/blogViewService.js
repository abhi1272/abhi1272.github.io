myApp.factory("blogViewService",function Blogfactory($http){
	
	var blogApis = {};

	var baseUrl = 'https://www.anapioficeandfire.com/api';

	blogApis.getAllBooks = function(){
		return  $http({
        method: 'GET',
        url: baseUrl+ '/' + 'books'				
		});
	}

	blogApis.getAllCharacters = function(){
		return  $http({
        method: 'GET',
        url: baseUrl+ '/' + 'characters'				
		});
	}

	blogApis.getAllHouses = function(){
		return  $http({
        method: 'GET',
        url: baseUrl+ '/' + 'houses'				
		});
	}
	

return blogApis;

});