const Controller = require("./controllers/controller");

const [command, id, name, category, price, stock] = process.argv.slice(2);

switch (command) {
  case "readAll":
    Controller.readAll();
    break;
  case "readOne":
    Controller.readOne(+id);
    break;
  case "createOne":
    const data = {
      name,
      category,
      price,
      stock
    }
    Controller.createOne(data);
    break;
  case "updateOne":
    const updateData = {
      id,
      name,
      category,
      price,
      stock
    }
    Controller.updateOne(updateData);
    break;
  case "deleteOne":
    Controller.deleteOne(+id);
    break;
  default:
    console.log('Please enter the right command')
    break;
}
