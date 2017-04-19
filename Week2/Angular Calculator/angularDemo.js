angular.module("my-app",[])

.controller("mainCtrl", function($scope) {
	$scope.numbers = {
		num1: "",
		num2: ""
	}

	$scope.add = function() {
		$scope.result = $scope.numbers.num1 + $scope.numbers.num2;
	}
	$scope.subtract = function() {
		$scope.result = $scope.numbers.num1 - $scope.numbers.num2;
	}
	$scope.multiply = function() {
		$scope.result = $scope.numbers.num1 * $scope.numbers.num2;
	}
	$scope.divide = function() {
		$scope.result = $scope.numbers.num1 / $scope.numbers.num2;
	}
})