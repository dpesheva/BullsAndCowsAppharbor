define(['jquery', 'result'], function ($, result) {
    function playGame() {
        var secretNumber = localStorage.getItem('secretNumber');
        if (!secretNumber) {
            generateRandomNumber();
        }
        console.log(localStorage.getItem('secretNumber'));
        $('#input-section').show();
        result.initializeResult();
    }

    function restart() {
        $('.tableRow').remove();
        result.initializeHistory();

        $('#hidden-number').next().remove();// remove congrats msg
        $('#hidden-number').text('????');
        $('#input-section').show();

        generateRandomNumber();
        console.log(localStorage.getItem('secretNumber'));

        result.initializeResult();
    }

    function generateRandomNumber() {
        var secretNumber = '',
			digit;

        while (secretNumber.length < 4) {
            if (secretNumber.length === 0) {
                digit = Math.floor(Math.random() * (9)) + 1; // generate [1, 2, ...9]
            } else {
                digit = Math.floor((Math.random() * 10)); // generate [0, 1, 2, ...9]
            }

            if (secretNumber.indexOf(digit) < 0) {
                secretNumber += digit;
            }
        }

        //Simple way
        // var min = 1000;
        // var max = 9999;
        // var num = Math.floor(Math.random() * (max - min + 1)) + min;

        localStorage.setItem('secretNumber', secretNumber);

        //return secretNumber;
    }

    return {
        playGame: playGame,
        restart: restart
    };
});