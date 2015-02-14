define( [ 'jquery', 'result' ], function ( $, result ) {
	function attachEvent( elenemtId ) {
		var value;
		$( elenemtId ).keydown( function ( ev ) {
			var self = $( this );
			var keycode = ( ev.keyCode ? ev.keyCode : ev.which );
			if ( keycode === 13 ) {
				value = self.val();
				if ( isValidInput( value, self ) ) {
					countBullsAndCows( self );
				}
			}
		} );
	}

	function isValidInput( value, element ) {

		if ( isUniqueNumber( value, element ) ) {
			localStorage.setItem( 'userLastGuess', value );
			return true;
		}

		return false;
	}

	function isUniqueNumber( value, element ) {
		if ( value !== null && value.length > 0 && !isNaN( value ) ) {
			if ( value.length !== 4 ) {
				alert( 'Enter a four-digit number!' );
				element.val( '' );
			} else {
				if ( areAllDigitsUnique( value ) ) {
					return true;
				} else {
					alert( 'Each digit have to be unique! ' );
					element.val( '' );
				}
			}
		} else {
			alert( 'Incorrect input! Enter a number!' );
			element.val( '' );
		}

		return false;

		function areAllDigitsUnique( value ) {
			var arrayValue = value.split( '' );
			var uniqueArray = arrayValue.filter( function ( value, index, self ) {
				return self.indexOf( value ) === index;
			} );

			return uniqueArray.length === arrayValue.length;
		}
	}


	function countBullsAndCows( element ) {
		var userInput = localStorage.getItem( 'userLastGuess' ),
			secretNumber = localStorage.getItem( 'secretNumber' ),
			numberOfBulls = 0,
			numberOfCows = 0;

		for ( var i = 0; i < userInput.length; i++ ) {
			if ( userInput[ i ] === secretNumber[ i ] ) {
				numberOfBulls++;
			}
			for ( var j = 0; j < userInput.length; j++ ) {
				if ( i !== j && userInput[ j ] === secretNumber[ i ] ) {
					numberOfCows++;
				}
			}
		}

		result.saveState( userInput, numberOfCows, numberOfBulls );

		element.val( '' );
		result.isEnd( numberOfBulls );
	}

	return {
		attachEvent: attachEvent
	};
} );