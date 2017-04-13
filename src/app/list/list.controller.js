(function () {
    'use strict';

    angular
        .module('comeLetsPlay')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($timeout, $scope) {
        var vm = this;
        vm.places = ["jgfjhg", "jgfjhg", "dddd", "fff", "ggg", "ggg"];
        vm.sports = ["jgfjhg", "jgfjhg", "dddd", "fff", "ggg", "ggg"];
        $scope.users = [
            { id: 1, name: 'Bob' },
            { id: 2, name: 'Alice' },
            { id: 3, name: 'Steve' }
        ];
        $scope.selectedUser = { id: 1, name: 'Bob' };
    }
})();
