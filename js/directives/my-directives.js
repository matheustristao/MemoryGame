angular.module('myDirectives', [])

        .directive('cardPack', function () {

            var ddo = {};

            ddo.restric = "AE";

            ddo.scope = {
                name: '@',
                id: '@',
                url: '@',
                show: '@',
                toggle: '&'
            };

            ddo.transclude = true;

            ddo.templateUrl = 'js/directives/card-pack.html';

            return ddo;
        })
        ;