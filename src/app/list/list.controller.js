(function () {
    'use strict';

    angular
        .module('comeLetsPlay')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($location, $state) {
        var vm = this;
        vm.places = ["All", "Banglore", "Kochi", "Chennai"];
        vm.sports = ["All", "Badminton", "Football", "Cricket", "Swimming", "Volleyball", "Golf"];
        vm.items =
            [
                {
                    "id": "1",
                    "imagePath": "../assets/images/bg-1.jpg",
                    "title": "Sport 1",
                    "description": "skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg ",
                    "registrationStatus": "closed"
                },
                {
                    "id": "2",
                    "imagePath": "../assets/images/bg-2.jpg",
                    "title": "Sport 2",
                    "description": "skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg ",
                    "registrationStatus": "open"
                },
                {
                    "id": "3",
                    "imagePath": "../assets/images/bg-3.jpg",
                    "title": "Sport 3",
                    "description": "skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg ",
                    "registrationStatus": "closed"
                },
                {
                    "id": "4",
                    "imagePath": "../assets/images/bg-4.jpg",
                    "title": "Sport 4",
                    "description": "skjfhs Fsjfg aisaefaisefh oisfgaosiafgoiasufosiuf aosifaoifyuaslifuaoifuoifag a roifuargf agfo iaurhgoairg aeoriguharoeg ",
                    "registrationStatus": "open"
                }
            ]

        vm.viewEvent = function (id) {
            $state.go('detail', { id: id });
        }
    }
})();
