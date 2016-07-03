(function(){

    var playTextCtrl = function ($scope, dataFactory) {
        $scope.textData = null; 
        $scope.isEmpty = false;
        $scope.getPlayData = dataFactory.getText(function(textData) {
          $scope.textData = textData;
        });        
    };
        
    playTextCtrl.$inject = ['$scope','dataFactory'];

    angular.module('EmotionApp').controller('playTextCtrl',playTextCtrl);

}());