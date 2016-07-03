(function(){

    var playTextCtrl = function ($scope, dataFactory) {
        $scope.textData = null; 
        $scope.score = null;
        var keyword = null;
//        $scope.getPlayData = dataFactory.getText(function(textData) {
//          $scope.textData = textData;
//        });
        $scope.getPlayData = dataFactory.getText()
            .success(function(textData){
                    $scope.textData = textData;
                
            })
            .error(function(data, status, headers, config){
                //handle errors
                $log.log(data.error + ' Status ' + status);
            });
        $scope.getEmotions = dataFactory.getEmotions(keyword)
            .success(function(score){
                    $scope.score = score;
                $log.log(data.error + ' score ' + score);
                
            })
            .error(function(data, status, headers, config){
                //handle errors
                $log.log(data.error + ' Status ' + status);
            });
//        $scope.getEmotionsAnalysis =  dataFactory.getEmotions(function(score, text) {
//            console.log(text);
//          $scope.score = score;
//        });
    };
        
    playTextCtrl.$inject = ['$scope','dataFactory'];

    angular.module('EmotionApp').controller('playTextCtrl',playTextCtrl);

}());
