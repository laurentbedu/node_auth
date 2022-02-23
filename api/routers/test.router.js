const BaseRouter = require("./base.router");

class TestRouter extends BaseRouter {

    constructor(){
        super();
        this.initalizeRoutes();
    }

    initalizeRoutes = () => {
        
        this.router.get("/user", async (req, res) => {
            res.json("user only");
        });
        
        this.router.get("/admin", async (req, res) => {
            res.json("admin only");
        });
       
        this.router.get("/account/:id", async (req, res) => {
            res.json(`user with id = ${req.params.id}  only`);
        });
    
    }

}

module.exports = TestRouter;
