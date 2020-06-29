(function () {
'use strict';
//Enjoy!" ou "Trop! Veuillez saisir les données en premier
angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  var chaine =document.getElementById("lunch-menu").value;
   console.log(chaine);

  $scope.check = function () {
  var chaine =document.getElementById('lunch-menu').value;
  const words = chaine.split(',');
//console.log(words[3]);
var nbr =words.length;

 if(chaine==""){
 	
 	$scope.result = "Veuillez saisir les données en premier";
 	// scope.result.color='#FF0000'; 
 	 document.getElementById('coul').style.color='#FF0000';
 	
 } else if(nbr<=3){
$scope.result = "Enjoy!"; 
document.getElementById('lunch-menu').style.color = ' #00FF00 ';

 }else if(nbr>3){
$scope.result = "Trop!"; 
document.getElementById('lunch-menu').style.color = ' #00FF00 ';

 }
//placeholder="list comma separated dishes you usually have for lunch"
  
    
  };

 




}

})();