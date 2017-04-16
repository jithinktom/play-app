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
        vm.sports =
            [
                { "imagePath": "../assets/images/bg-1.jpg", "title": "Sport 1", "description":"skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg " },
                { "imagePath": "../assets/images/bg-2.jpg", "title": "Sport 2", "description":"skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg " },
                { "imagePath": "../assets/images/bg-3.jpg", "title": "Sport 3", "description":"skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg " },
                { "imagePath": "../assets/images/bg-4.jpg", "title": "Sport 4", "description":"skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg " },
            ]

        $scope.selectedUser = { id: 1, name: 'Bob' };
    }
})();
