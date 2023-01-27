const Model = require("../models/model");
const View = require("../views/index");

class Controller {
  static readAll() {
    Model.readAll((err, data) => {
      if (err) {
        return View.displayError(err);
      }
      return View.displayData(data);
    });
  }
  static readOne(id) {
    Model.readOne(id, (err, data) => {
      if (err) {
        return View.displayError(err);
      }
      return View.displayData(data);
    });
  }
  static createOne(data) {
    Model.createOne(data, (err, data) => {
      if (err) {
        return View.displayError(err);
      }
      return View.displayData(data);
    })
  }
  static updateOne(data) {
    Model.updateOne(data, (err, data) => {
      if (err) {
        return View.displayError(err);
      }
      return View.displayData(data);
    })
  }
  static deleteOne(id) {
    Model.deleteOne(id, (err, data) => {
      if (err) {
        return View.displayError(err);
      }
      return View.displayData(data);
    })
  }
}

module.exports = Controller;
