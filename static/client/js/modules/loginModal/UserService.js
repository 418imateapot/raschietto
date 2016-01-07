/* jshint esnext: true */
export
var UserService = ['$cookies',
    function($cookies) {
        return {
            login: function(email, password) {
                var credenziali = {
                    email: email,
                    password: password
                };
                $cookies.put('credenziali', JSON.stringify(credenziali));
                return email;
            }
        };
    }
];
