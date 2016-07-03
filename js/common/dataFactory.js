(function(){
    var dataFactory = function($http){
        var url = "http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion";
        var APIkey = "4d395301e1cf0abcae8548dfa07cfdad2b96f24c";
        var confParam = "&outputMode=json&showSourceText=1&text=";
         return {
          getText: function(callback){
            $http.get('asserts/docs/henry_iv.json').success(callback);
          },
          getEmotions: function(callback, keyword){
            keyword = decodeURI(keyword)
            url = url + APIkey + confParam + keyword;
            $http.get(url).
            success(callback).
            error(function(data, status, headers, config) {
              console.log('error')
            });
         }
        };
    };
            
    
    
    dataFactory.$inject = ['$http']
    

    angular.module('EmotionApp').factory('dataFactory', dataFactory);
}());