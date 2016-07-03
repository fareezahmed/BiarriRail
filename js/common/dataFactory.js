(function(){
    var dataFactory = function($http){
        var factory = {};
        var url = "https://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=";
        var APIkey = "4d395301e1cf0abcae8548dfa07cfdad2b96f24c";
        var confParam = "&outputMode=json&showSourceText=1&text=";
//         return {
//          getText: function(callback){
//            $http.get('asserts/docs/henry_iv.json').success(callback);
//          },
//          getEmotions: function(callback, keyword){
//            keyword = decodeURI(keyword)
//            url = url + APIkey + confParam + keyword;
//            $http.get(url).
//            success(callback).
//            error(function(data, status, headers, config) {
//              console.log('error')
//            });
//         }
//        };
//        
        factory.getText = function(){
            return $http.get('asserts/docs/henry_iv.json');
        };
        
        factory.getEmotions = function(keyword){
            keyword = decodeURI(keyword)
            url = url + APIkey + confParam + keyword;
            return $http.get(url);

        };
        
        return factory;    
    };
            
    
    
    dataFactory.$inject = ['$http']
    

    angular.module('EmotionApp').factory('dataFactory', dataFactory);
}());