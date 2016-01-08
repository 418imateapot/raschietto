/* jshint esnext: true */

userService.$inject = ['$cookies'];

/**
 * @mixin
 */
export default function userService($cookies) {

    return {
        login: _login
    };

    /**
     * @inner
     * @desc Esegue il login e setta un cookie
     * @return {object} Un dizionario con le credenziali di accesso
     */
    function _login(email, password) {

        var credenziali = {
            email: email,
            password: password
        };

        $cookies.put('credenziali', JSON.stringify(credenziali));
        return email;
    }

}
