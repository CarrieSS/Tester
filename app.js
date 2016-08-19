angular.module("myApp", [])
		.controller("myCtrl", function ($scope, $http, $timeout) { 

			var companyCode;
			$scope.isAuthenticated = false;
			$scope.showError = false;
			$scope.showSaveSuccess = false;
			$scope.previousSetting = {};

			$scope.login = function(code){
				if(code != null){
					$scope.isAuthenticated = true;	
					companyCode = code;

					$http.get('default.json').then((response) => {
						$scope.messageEn = response.data;
						angular.copy($scope.messageEn, $scope.previousSetting);
		  				return $scope.previousSetting;
					});

				} else{
					$scope.showError = true;
					$scope.errorMessage = {
						error: "Invalid company code."
					};
					$timeout(() => {
						this.showError = false;
					}, 3000);
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

				this.saveSuccess = 'Changes have been saved.';
				this.showSaveSuccess = true;
				$timeout(() => {
					this.showSaveSuccess = false;
				}, 3000);
			};

			$scope.cancelButton = function(){
				$scope.messageEn = angular.copy($scope.previousSetting);
				window.location.reload(false);
				return $scope.messageEn;
			};
		});
