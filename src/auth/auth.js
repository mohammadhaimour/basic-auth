'use strict';
function auth(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Basic') {
        next();
    }
    else {
        next('Invalid signin ');
    }
}
module.exports = auth;