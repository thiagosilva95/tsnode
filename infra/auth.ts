import * as jwt from 'jsonwebtoken';
import * as Configs from './configs';

class Auth {

    validate(req, res, next) {
        var token = req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, Configs.secret)
        } else {
            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            });
        }
    }
}