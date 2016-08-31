angular.module('memory').controller('MainController', function ($scope, $timeout) {

    $scope.cards = [
        {
            id: 1,
            name: "eigth",
            url: "images/eigth.png",
            show: "hide",
            display: "true"
        },
        {
            id: 2,
            name: "tennis",
            url: "images/tennis.png",
            show: "hide",
            display: "true"
        },
        {
            id: 3,
            name: "football",
            url: "images/football.png",
            show: "hide",
            display: "true"
        },
        {
            id: 4,
            name: "white",
            url: "images/white.png",
            show: "hide",
            display: "true"
        },
        {
            id: 5,
            name: "bow",
            url: "images/bow.png",
            show: "hide",
            display: "true"
        },
        {
            id: 6,
            name: "volley",
            url: "images/volley.png",
            show: "hide",
            display: "true"
        },
        {
            id: 7,
            name: "basket",
            url: "images/basket.png",
            show: "hide",
            display: "true"
        },
        {
            id: 8,
            name: "baseball",
            url: "images/baseball.png",
            show: "hide",
            display: "true"
        },
        {
            id: 9,
            name: "golf",
            url: "images/golf.png",
            show: "hide",
            display: "true"
        },
        {
            id: 10,
            name: "eigth",
            url: "images/eigth.png",
            show: "hide",
            display: "true"
        },
        {
            id: 11,
            name: "tennis",
            url: "images/tennis.png",
            show: "hide",
            display: "true"
        },
        {
            id: 12,
            name: "football",
            url: "images/football.png",
            show: "hide",
            display: "true"
        },
        {
            id: 13,
            name: "white",
            url: "images/white.png",
            show: "hide",
            display: "true"
        },
        {
            id: 14,
            name: "bow",
            url: "images/bow.png",
            show: "hide",
            display: "true"
        },
        {
            id: 16,
            name: "volley",
            url: "images/volley.png",
            show: "hide",
            display: "true"
        },
        {
            id: 16,
            name: "basket",
            url: "images/basket.png",
            show: "hide",
            display: "true"
        },
        {
            id: 17,
            name: "baseball",
            url: "images/baseball.png",
            show: "hide",
            display: "true"
        },
        {
            id: 18,
            name: "golf",
            url: "images/golf.png",
            show: "hide",
            display: "true"
        }
    ];

    /*
     * Only two cards can be shown. Initially, cards is equal zero and it increments for each flipped card. 
     * If the number of flipped cards is equal two, the next one will hide again the all other cards before it got shown
     * The function toogle has two parametes: all the cards from the board and the specific card clicked
     */
    var count = 0;
    var nonDisplayedCards = 0;
    $scope.toggle = function (cards, card) {

        if (card.show === "show") {
            closeAll(cards);
            count = 0;
        } else {
            count++;
            if (count === 3) {
                closeAll(cards);
                count = 1;
            }

            /*
             * the loop here iterates all of the cards. if a card is shown and has the same name of the clicked card, both closes after 0.9 seconds
             */
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].name === card.name) {
                    if (cards[i].show === "show") {

                        var card1 = card;
                        var card2 = cards[i];

                        $timeout(function () {
                            card1.display = "false";
                            card2.display = "false";
                            nonDisplayedCards = nonDisplayedCards + 2;
                            if (nonDisplayedCards === 18) {
                                alert("Congrats");
                            }
                        }, 900);
                    }
                }
            }

            card.show = "show";


        }
    };

    function closeAll(cards) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].show = "hide";
        }
    }

});
