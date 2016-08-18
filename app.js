angular.module("myApp", [])
		.controller("myCtrl", function ($scope, $http) { 

			var companyCode;
			$scope.isAuthenticated = false;

			$scope.login = function(code){
				if(code != null){
					$http.get('default.json').then((response) => {
						$scope.message = response.data;
					});
					
					$scope.isAuthenticated = true;	
					companyCode = code;
					
				} else{
					$scope.errorMessage = {
						error: "Invalid company code."
					};
				}
			};

			$scope.saveConfirm = function(){
				var inputs = document.getElementById('Menu').getElementsByTagName('textarea');
				var objEn = Object();
				var objFr = Object();

				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].value === '') {
						objEn[inputs[i].id] = inputs[i].placeholder;
		  				objFr[inputs[i].id] = inputs[i].placeholder + 'FRENCH';
					} else {
						objEn[inputs[i].id] = inputs[i].value;
						objFr[inputs[i].id] = inputs[i].value + 'FRENCH';	
					}
				}

				console.log(JSON.stringify(objEn));
				console.log(JSON.stringify(objFr));
	
				console.log(companyCode);
			};

			$scope.cancelButton1 = function(){
				angular.copy($scope.copyMessage, $scope.message);
				console.log($scope.message);
			};
		});
