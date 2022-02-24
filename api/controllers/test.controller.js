const BaseController = require("./base.controller");

class TestController extends BaseController {

  forUser = async (req, res) => {
    return {result: true, message:"user only"};
  };

  forAdmin = async (req, res) => {
    return {result: true, message:"admin only"};
  };

  forAccount = async (req, res) => {
    return {result: true, message:"user or admin with good id only"};
  };

}
module.exports = TestController;
