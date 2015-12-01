/* jshint esnext: true */
export
var loadDocumentService = ['$http',
    function($http) {
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
