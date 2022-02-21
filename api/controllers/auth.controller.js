const BaseController = require("./base.controller");

class AuthController extends BaseController {

    login = async (req) => {
        return "login";
    }
    register = async (req) => {
        return "register";
    }
    validate = async (req) => {
        return "validate";
    }
    renew = async (req) => {
        return "renew";
    }
}

module.exports = AuthController;