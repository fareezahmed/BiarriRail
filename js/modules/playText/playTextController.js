(function(){

    var playTextCtrl = function ($scope, dataFactory) {
        $scope.textData = null; 
        $scope.score = null;
        $scope.getPlayData = dataFactory.getText(function(textData) {
          $scope.textData = textData;
        });
        $scope.getEmotionsAnalysis =  dataFactory.getEmotions(function(score, line) {
          $scope.score = score;
        });
    };
        
    playTextCtrl.$inject = ['$scope','dataFactory'];

    angular.module('EmotionApp').controller('playTextCtrl',playTextCtrl);

}());