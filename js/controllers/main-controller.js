angular.module('memory').controller('MainController', function ($scope) {

    $scope.cards = [
        {
            id: 1,
            name: "eigth",
            url: "images/eigth.png",
            show: "hide"
        },
        {
            id: 2,
            name: "tennis",
            url: "images/tennis.png",
            show: "hide"
        },
        {
            id: 3,
            name: "football",
            url: "images/football.png",
            show: "hide"
        },
        {
            id: 4,
            name: "white",
            url: "images/white.png",
            show: "hide"
        },
        {
            id: 5,
            name: "bow",
            url: "images/bow.png",
            show: "hide"
        },
        {
            id: 6,
            name: "volley",
            url: "images/volley.png",
            show: "hide"
        },
        {
            id: 7,
            name: "basket",
            url: "images/basket.png",
            show: "hide"
        },
        {
            id: 8,
            name: "baseball",
            url: "images/baseball.png",
            show: "hide"
        },
        {
            id: 9,
            name: "golf",
            url: "images/golf.png",
            show: "hide"
        },
        {
            id: 10,
            name: "eigth",
            url: "images/eigth.png",
            show: "hide"
        },
        {
            id: 11,
            name: "tennis",
            url: "images/tennis.png",
            show: "hide"
        },
        {
            id: 12,
            name: "football",
            url: "images/football.png",
            show: "hide"
        },
        {
            id: 13,
            name: "white",
            url: "images/white.png",
            show: "hide"
        },
        {
            id: 14,
            name: "bow",
            url: "images/bow.png",
            show: "hide"
        },
        {
            id: 16,
            name: "volley",
            url: "images/volley.png",
            show: "hide"
        },
        {
            id: 16,
            name: "basket",
            url: "images/basket.png",
            show: "hide"
        },
        {
            id: 17,
            name: "baseball",
            url: "images/baseball.png",
            show: "hide"
        },
        {
            id: 18,
            name: "golf",
            url: "images/golf.png",
            show: "hide"
        }
    ];

    /*
     * Only two cards can be shown. Initially, cards is equal zero and it increments for each flipped card. 
     * If the number of flipped cards is equal two, the next one will hide again the all other cards before it got shown
     * The function toogle has two parametes: all the cards from the board and the specific card clicked
     */
    var count = 0;
    $scope.toggle = function (cards, card) {

        count++;
        if (count === 3) {
            for (var i = 0; i < cards.length; i++) {
                cards[i].show = "hide";
            }
            count = 1;
        }
        card.show = "show";
    };

});
