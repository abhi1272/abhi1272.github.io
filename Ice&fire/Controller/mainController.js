
myApp.controller("mainController",['$http','blogViewService',function($http,blogViewService) {
	


	var main = this;
	this.pageHeading = 'ICE & AGE'
	this.pageSubHeading = 'A collection of books and houses'
  this.book;
	this.books=[];
  this.character;
	this.characters=[];
  this.house;
	this.houses=[];
  this.names=[];
 

	this.baseUrl = 'https://www.anapioficeandfire.com/api';


	this.loadAllBooks = function(){

	

		blogViewService.getAllBooks()	
		.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          for (i in response.data){
            author = response.data[i].authors[0] 
            book =  response.data[i].name
            main.books.push(book);
          }
       

          for (i=0;i<main.books.length;i++){
            obj={}
            obj.book = main.books[i];
            obj.character = main.characters[i];
            obj.house = main.houses[i];
            main.names.push(obj);
          }
          


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }



	this.loadAllcharacters = function(){
  

this.loadAllBooks();
	

		 blogViewService.getAllCharacters()       				
		 .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
             for (i in response.data){
            character =  response.data[i].aliases[0]
            main.characters.push(character);
          }
         
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }



	this.loadAllhouses = function(){

  this.loadAllcharacters();	

    blogViewService.getAllHouses()      
		.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
             for (i in response.data){
            house =  response.data[i].name
            main.houses.push(house);
          }
         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        
      });
  }


this.loadAllhouses();

          this.sortColumn = 'book';

}]);





