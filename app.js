angular.module('FeedApp', [])
.controller('FeedController', function ($scope, $http) {
    $http.get("http://www.snagfilms.com/apis/films.json?limit=10")
        .then(function (response) {
            $scope.films = response.data.films.film;
        });
});