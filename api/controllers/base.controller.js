class BaseController {
  constructor() {
    this.name = this.constructor.name.replace(`Controller`, ``);
  }
}
module.exports = BaseController;
