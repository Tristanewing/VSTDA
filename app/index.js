

var myApp= angular.module('myApp',[]);



myApp.controller('ctrl',function($scope){

$scope.myArray=[];



       
$scope.priority = [
	{name:'High', id: 1}, 
	{name:'Medium', id: 2},
	{name:'Low', id: 3}
	];


$scope.add=function(){

       

			

	 $scope.myArray.push({

				toDo: $scope.toDo,

				priority: $scope.selectedList,



		});

		
};




});





