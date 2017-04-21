(function () {
    'use strict';

    angular
        .module('comeLetsPlay')
        .controller('DetailController', DetailController);

    /** @ngInject */
    function DetailController($state) {
        var vm = this;
        vm.registerShow = false;
        console.log($state.params.id);
        if ($state.params.id == null || $state.params.id == undefined || $state.params.id == '') {
            $state.go('notfound');
        }
        vm.event = {
            'id': '5',
            'title': 'Cricket tournament at Infopark',
            'date': '17/10/2017',
            'time': '4.30PM',
            'registrationStatus': 'open',
            'description': 'As of now, a total of eight (8) teams can play. Each team must lose two matches in the tournament to be eliminated. Each match shall consist of one game of 20-overs (tentative) for both sides. There will be two brackets of games going on, the Winners Bracket and the Losers Bracket. All teams will start playing in the Winners Bracket. As each team loses, they will be sent off to the Losers Bracket. The round the team played before losing will be taken in consideration in placement in the Loser',
            'venue': 'MAMHSS ground',
            'place': 'Koratty',
            'district': 'Thrissur',
            'state': 'Kerala',
            'eventStatus': 'pending',
            'coverImg': '../assets/images/stock-vector-easy-to-edit-vector-illustration-of-player-in-abstract-cricket-championship-background-385825549.jpg',
            'venueLatitude': '10.2642413',
            'venueLongitude': '76.3401072',
            'prize1': 'Rs 10001',
            'prize2': 'Rs 5001',
            'prize3': 'Rs 2001'
        }
    }
})();
