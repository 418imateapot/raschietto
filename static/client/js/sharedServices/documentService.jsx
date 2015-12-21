/* jshint esnext: true */

/**
 * Servizio che, dato un url, chiede al server il documento corrispondente,
 * restituendo un oggetto contenente l'html da visualizzare.
 *
 * @param url: indovina un po'
 */
export
var documentService = ['$http',
    function docLoaderFactory($http) {
        return {
            get: function(url) {
                return $http.get('/api/docs?url=' + encodeURIComponent(url))
                    .then(response => {
                        return {
                            'status': 'ok',
                            'resp': response.data
                        };
                    })
                    .catch(error => {
                        return {
                            'status': 'error',
                            'error': error
                        };
                    });
            }
        };
    }
];
