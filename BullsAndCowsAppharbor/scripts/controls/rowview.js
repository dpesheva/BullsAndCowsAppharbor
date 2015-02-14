define( [ 'jquery', 'hdb' ], function ( $, hdb ) {
    function appendRow( data, templateId ) {
        var $templateHTML = $( templateId ).html();
        var template = Handlebars.compile( $templateHTML );
        var $container = $( '#container' );

        $container.append( template( data ) );
    }

    return {
        appendRow: appendRow
    }
} )