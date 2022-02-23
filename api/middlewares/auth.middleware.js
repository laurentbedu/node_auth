const jwt = require('jsonwebtoken');
const config = require('../configs/auth.config');

class AuthMiddleware {

    static checkAuth = async (action, req, res, next) => {

        const route = Object.keys(config.RESTRICTED_TOUTES).find(route => req.originalUrl.match(route));
        if(route){
            const predicate = config.RESTRICTED_TOUTES[route];
            const auth = req.cookies.auth;
            if(auth){
                const result = jwt.verify(auth, config.JWT_SECRET);
                if(result && predicate(result, res.locals)){
                    const data = await action(req);
                    return res.json(data);
                }
            }
            return res.json({result:false, message:"Unauthorized access"});
        }
        const data = await action(req);
        return res.json(data);
        
    }
  
}
module.exports = AuthMiddleware.checkAuth;