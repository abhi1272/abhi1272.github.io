
myApp.controller("detailController",['$http','$routeParams','blogViewService',function($http,$routeParams,blogViewService) {


	var main = this;
	this.pageHeading = 'ICE & AGE'
	this.pageSubHeading = 'A collection of books and houses'
	this.books=[];
	this.characters;
	this.houses;
  this.names;


////////////////////             Book Characters                         /////////////////////////////////////

  this.url;
  this.authors;
  this.isbn;
  this.numberOfPages;
  this.publisher;
  this.country;
  this.mediaType;
  this.released;
  this.name;

////////////////////             house Characters                         /////////////////////////////////////

  this.region;
  this.coatOfArms;
  this.words;
  this.currentLord;
  this.overlord;


////////////////////             charcter Characters                         /////////////////////////////////////


  this.gender;
  this.culture;
  this.aliases;
  this.books;
  this.playedBy;


	this.baseUrl = 'https://www.anapioficeandfire.com/api';


	this.loadAllBooks = function(){

	this.id = $routeParams.id
  this.classBook = $routeParams.class

		blogViewService.getAllBooks()
    .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          for (i in response.data){
            if (response.data[i].name == main.id){
              console.log(response.data[i].authors[0]);
                 main.url = response.data[i].url;
                 main.authors = response.data[i].authors[0]
                 main.isbn = response.data[i].isbn
                 main.numberOfPages =response.data[i].numberOfPages
                 main.publisher =response.data[i].publisher
                 main.country =response.data[i].country
                 main.mediaType =response.data[i].mediaType
                 main.released =response.data[i].released
                 main.name =  response.data[i].name;
            }
          }

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }
if ($routeParams.class == 'book'){
  this.loadAllBooks();

}

	this.loadAllcharacters = function(){
  

	this.id = $routeParams.id
  this.classBook = $routeParams.class

		blogViewService.getAllCharacters()				
		.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
             for (i in response.data){
            if (response.data[i].aliases[0] == main.id){
                 main.name =  response.data[i].name;
                 main.gender = response.data[i].gender
                 main.culture = response.data[i].culture
                 main.aliases =response.data[i].aliases[0]
                  $http({
                    method: 'GET',
                    url: response.data[i].books[0]  
                 }).then(function successCallback(response){
                      console.log(response.data)
                        //main.books  = response.data.aliases[0]
                 });
               
                 main.playedBy =response.data[i].playedBy[0]
                 main.url = response.data[i].url;
            }
          }
         
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }

if ($routeParams.class == 'character'){
  this.loadAllcharacters();

}


	this.loadAllhouses = function(){


   this.id = $routeParams.id; 
   this.classBook = $routeParams.class


		blogViewService.getAllHouses()  		
		.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
           for (i in response.data){
            if (response.data[i].name == main.id){
                 main.url = response.data[i].url;
                 main.region = response.data[i].region
                 main.coatOfArms = response.data[i].coatOfArms
                  $http({
                    method: 'GET',
                    url: response.data[i].overlord      
                 }).then(function successCallback(response){
                      console.log(response.data.name)
                       main.overlord = response.data.name
                 });
                
                 main.words =response.data[i].words
                  $http({
                    method: 'GET',
                    url: response.data[i].currentLord    
                 }).then(function successCallback(response){
                      console.log(response.data.name)
                      main.currentLord = response.data.name
                 });
                 main.name =  response.data[i].name;
            }
          }

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }
if ($routeParams.class == 'house'){
  this.loadAllhouses();

}


}]);





