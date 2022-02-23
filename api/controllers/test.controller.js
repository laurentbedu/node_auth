const BaseController = require("./base.controller");

class TestController extends BaseController {

  forUser = async (req) => {
    return {result: true, message:"user only"};
  };

  forAdmin = async (req) => {
    return {result: true, message:"admin only"};
  };

  forAccount = async (req) => {
    return {result: true, message:"user with good id only"};
  };

}
module.exports = TestController;
