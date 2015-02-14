( function () {
    require.config( {
        paths: {
            'jquery': 'libs/jquery.min',
            'hdb': 'libs/handlebars-v1.3.0',
            'rowview': 'controls/rowview',
            'gameHelpers': 'controls/gameHelpers',
            'result': 'controls/result',
            'input': 'controls/manageInput'
        }
    } );


    require( [ 'jquery', 'gameHelpers', 'input', 'result' ], function ( $, gameHelpers, input, result ) {
        $( function () { // equal to windows.onload
            gameHelpers.playGame();

            input.attachEvent( '#input-number' );

            $( '#btnRestart' ).click( gameHelpers.restart );
        } );
    } );
} )();