angular.module('myDirectives', [])

        .directive('cardPack', function () {

            var ddo = {};

            ddo.restric = "AE";

            ddo.scope = {
                name: '@name'
            };

            ddo.transclude = true;

            ddo.templateUrl = 'js/directives/card-pack.html';

            return ddo;
        })
        ;