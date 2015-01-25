myStartPage.controller('mainCtrl', function ($scope, $http) {
    $http.get('/config.json').success(function(data) {
        $scope.data = data;
    });
});