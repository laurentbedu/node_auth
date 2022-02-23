const jwt = require('jsonwebtoken');
const config = require('../configs/auth.config');

class AuthMiddleware {

    

    static check = (req, res, next) => {
        // const routes = {
        //     0 : ["/auth","/test/visitor"],
        //     1 : ["/test/user"],
        //     2 : ["/test/admin"]
        // }
        const restrictedRoutes = {
            "/test/user": (user) => user.role === 1,
            "/test/admin": (user) => user.role === 2,
            "/test/account/": (user, params) => user.role > 0 && user.id === params.id,
        }
        //console.log(req.originalUrl);
        const route = Object.keys(restrictedRoutes).find(route => req.originalUrl.match(route));
        
        if(route){
            const restricted = restrictedRoutes[route];
            const auth = req.cookies.auth;
            if(auth){
                const result = jwt.verify(auth, config.JWT_SECRET);
                if(result){
                    
                    if(restricted && restricted(result, req.params)){
                        next(); return;
                    }
                }
            }
            //return res.json({result:false, message:"Unauthorized"});
        }
        next();
        
        
    }
  
}
module.exports = AuthMiddleware.check;