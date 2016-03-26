angular.module("angularDirectives").('omdbDirective', function() {
    return {
        restrict: 'E',
        scope: {
            data: '@'
        },
        template: "<input type='text'/><a class='waves-effect waves-light btn'>Search</a>",
        controller: function($scope, $http) {
            $scope.movieSearch;
            $scope.searchForMovie = function() {
                $http({
                    method: 'GET',
                    url: '/someUrl'
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }
        }
    }
});
