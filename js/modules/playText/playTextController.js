(function(){

    var playTextCtrl = function ($scope, $log, dataFactory) {
        $scope.textData = null; 
        $scope.score = null;
        keyword = null,text = null;
        
        $scope.getPlayData = function(){
            dataFactory.getText(function(textData) {
              $scope.textData = textData;
            });
        }

        $scope.getEmotionsAnalysis = function(text){
            $scope.score = "";
            keyword = text.text_entry;
            dataFactory.getEmotions(keyword)
            .success(function(score){
                $scope.score = score;
                
                
            })
            .error(function(data, status, headers, config){
                //handle errors
                $log.log(data.error + ' Status ' + status);
            });
        }

    };
        
    playTextCtrl.$inject = ['$scope','$log','dataFactory'];

    angular.module('EmotionApp').controller('playTextCtrl',playTextCtrl);

}());
