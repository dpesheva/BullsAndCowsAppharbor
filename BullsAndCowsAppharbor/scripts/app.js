( function () {
    require.config( {
        paths: {
            'jquery': 'libs/jquery.min',
            'hdb': 'libs/handlebars-v1.3.0',
            'rowview': 'controls/rowview',
            'gamehelpers': 'controls/gameHelpers',
            'result': 'controls/result',
            'input': 'controls/manageInput'
        }
    } );


    require( [ 'jquery', 'rowview', 'gamehelpers', 'input', 'result' ], function ( $, rowview, gamehelpers, input, result ) {
        $( function () { // equal to windows.onload
            gamehelpers.initializeGame();

            input.attachEvent( '#input-number' );

            $( '#btnRestart' ).click( gamehelpers.restart );
        } );
    } );
} )();