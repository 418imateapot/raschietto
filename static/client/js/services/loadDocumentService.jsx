/* jshint esnext: true */
export
var loadDocumentService = ['$http',
    function($http) {
        return {
            get: function(id) {

                return $http.get('/api/docs/' + id)
                    .then(response => {
                        return {
                            'status': 'ok',
                            'resp': response.data.content
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
