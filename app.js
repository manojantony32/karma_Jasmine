var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope){
  $scope.name = "madam";
});
app.filter('reverse',[function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}])
