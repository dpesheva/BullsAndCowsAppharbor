define(['rowview'], function (rowview) {
    function initializeResult() {
        var history = JSON.parse(localStorage.getItem('gameInputHistory'));
        if (!history) {
            initializeHistory();
        } else {
            for (var i = 0; i < history.length; i++) {
                drawNewLine(history[i].sequenceNnumber, history[i].number, history[i].numberCows, history[i].numberBulls);
            }
        }
    }

    function drawNewLine(totalNumber, userLastGuess, numberOfCows, numberOfBulls) {

        rowview.appendRow({
            sequenceNnumber: totalNumber,
            number: userLastGuess,
            numberCows: numberOfCows,
            numberBulls: numberOfBulls
        }, '#row-template');
    }

    function saveState(userLastGuess, numberOfCows, numberOfBulls) {
        var history = JSON.parse(localStorage.getItem('gameInputHistory'));
        var len = history.length + 1;
        history.push({
            sequenceNnumber: len,
            number: userLastGuess,
            numberCows: numberOfCows,
            numberBulls: numberOfBulls
        });

        localStorage.setItem('gameInputHistory', JSON.stringify(history));
        drawNewLine(len, userLastGuess, numberOfCows, numberOfBulls);
    }

    function isEnd(numberOfBulls) {
        if (numberOfBulls === 4) {
            var secretNumber = localStorage.getItem('secretNumber');

            $('#hidden-number').text(secretNumber);
            $('#hidden-number').after($('<h1>').addClass('red').text('Congratulations!'));

            initializeHistory();
        }
    }

    function initializeHistory() {
        localStorage.setItem('gameInputHistory', '[]');
        localStorage.removeItem('secretNumber');
    }

    return {
        initializeResult: initializeResult,
        initializeHistory: initializeHistory,
        drawNewLine: drawNewLine,
        saveState: saveState,
        isEnd: isEnd
    };
});