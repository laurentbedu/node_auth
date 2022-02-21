const expressRouter = require("express").Router;

class BaseRouter {

  constructor() {
    this.router = expressRouter();
    this.name = this.constructor.name.replace(`Router`, ``);
    const ControllerClass = require(`../controllers/${this.name.unCamelize()}.controller`);
    this.controller = new ControllerClass();
  }

}
module.exports = BaseRouter;
