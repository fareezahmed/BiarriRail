(function(){
    var dataFactory = function($http, $log){
        var factory = {},keyword = null;
        var url = "https://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=";
        var APIkey = "4d395301e1cf0abcae8548dfa07cfdad2b96f24c";
        var confParam = "&outputMode=json&showSourceText=1&text=";
      
        factory.getText = function(callback){
            return $http.get('asserts/docs/henry_iv.json').success(callback)
            .error(function(data, status, headers, config){
                //handle errors
                $log.log(data.error + ' Status ' + status);
            });
        };
        
        factory.getEmotions = function(keyword){
            keyword = decodeURI(keyword)
            url = url + APIkey + confParam + keyword;
            return $http.get(url);

        };
        
        return factory;    
    };
            
    dataFactory.$inject = ['$http', '$log']
    

    angular.module('EmotionApp').factory('dataFactory', dataFactory);
}());