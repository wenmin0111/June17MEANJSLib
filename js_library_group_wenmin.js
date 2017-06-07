var _ = {
   map: function(arr, callback) {
     //Produces a new array of values by mapping each value in list
     //  through a transformation function
     for(var i = 0; i < arr.length;i++){
         arr[i] = callback(arr[i]);
     }
     return arr;
   },
   reduce: function(arr, callback, memo) {
     //reduce boils down a list of values into a single value
     //treat memo as a start point!
     var index = 0;
     if(!memo){
        memo = arr[0];
        index = 1;
     }
     for(var i = index; i < arr.length;i++){
        memo = callback(memo,arr[i]);
     }
     return memo
   },
   find: function(arr,callback) {
     // returning the first one that passes a truth test
     for(var i = 0 ; i < arr.length;i++){
         if(callback(arr[i])){
             return arr[i];
         }
     }

   },
   filter: function(arr,callback) {
     // returning an array of all the values that pass a truth test of the callback function
     var newarr = [];
     for(var i = 0 ; i < arr.length;i++){
         if(callback(arr[i])){
             newarr.push(arr[i]);
         }
     }
     return newarr;
   },
   reject: function(arr,callback) {
     // Returns the values in list without the elements that the truth test passes
     var newarr = [];
     for(var i = 0 ; i < arr.length;i++){
         if(!callback(arr[i])){
             newarr.push(arr[i]);
         }
     }
     return newarr;
   }
}


var newArr = _.map([1,2,3],function(num){ return num * 3});
console.log(newArr);

var even = _.find([1, 1, 1, 4, 5, 6], function(num){ return num % 2 == 0; })
console.log(even);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens)

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds)
//
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 1);
console.log(sum);
