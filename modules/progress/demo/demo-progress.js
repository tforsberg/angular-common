(function() {

    'use strict';

    angular.module('demo.progress', [
        'common.progress'
    ])

        .controller('DemoProgressCtrl', ['$scope', 'ProgressService', '$timeout', function($scope, ProgressService, $timeout) {
            $scope.ProgressService = ProgressService;
            $scope.startProgress = function() {
                ProgressService.start('loadUser', 10);
                $timeout(function() {
                    ProgressService.done('loadUser');
                }, 1000);

                ProgressService.start('loadTasks', 25);
                $timeout(function() {
                    ProgressService.done('loadUser');
                }, 2500);
            };

            $scope.codeExample = "$scope.ProgressService = ProgressService;\n" +
                "ProgressService.start('loadUser', 10);\n" +
                "ProgressService.start('loadTasks', 30);\n" +
                "ProgressService.done('loadUser');";
        }]);

})();