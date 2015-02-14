define( [ 'result', 'jquery' ], function ( result, $ ) {
	function initializeGame() {
		var secretNumber = localStorage.getItem( 'secretNumber' );
		if ( !secretNumber ) {
			generateRandomNumber();
		}
		console.log( localStorage.getItem( 'secretNumber' ) );
		result.initializeResult();
	}

	function restart() {
		$( '.tableRow' ).remove();
		generateRandomNumber();
		localStorage.setItem( 'gameInputHistory', '[]' );

		result.initializeResult();
	}

	function generateRandomNumber() {
		var secretNumber = '',
			digit;

		while ( secretNumber.length < 4 ) {
			if ( secretNumber.length === 0 ) {
				digit = Math.floor( Math.random() * ( 9 ) ) + 1; // generate [1, 2, ...9]
			} else {
				digit = Math.floor( ( Math.random() * 10 ) ); // generate [0, 1, 2, ...9]
			}

			if ( secretNumber.indexOf( digit ) < 0 ) {
				secretNumber += digit;
			}
		}

		//Simple way
		// var min = 1000;
		// var max = 9999;
		// var num = Math.floor(Math.random() * (max - min + 1)) + min;

		localStorage.setItem( 'secretNumber', secretNumber );

		//return secretNumber;
	}

	return {
		initializeGame: initializeGame,
		restart: restart
	};
} );