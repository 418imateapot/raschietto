

/**
 * @module teapot/conf
 * @desc
 * Funzioni eseguite in fase di configurazione dell'applicazione
 */
import auth from './auth.js';
import router from './routes.js';

var conf = {
    auth: auth,
    router: router
};

export {conf as default};
