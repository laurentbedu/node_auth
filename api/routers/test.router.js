const BaseRouter = require("./base.router");

class TestRouter extends BaseRouter {

    constructor(){
        super();
        this.initalizeRoutes();
    }

    initalizeRoutes = () => {
        
        this.router.get("/user", async (req, res, next) => {
            next(this.controller.forUser);
        });
        
        this.router.get("/admin", async (req, res, next) => {
            next(this.controller.forAdmin);
        });
       
        this.router.get("/account/:id", async (req, res, next) => {
            res.locals.id = req.params.id;
            next(this.controller.forAccount);
        });
    
    }

}

module.exports = TestRouter;
