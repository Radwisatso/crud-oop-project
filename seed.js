const fs = require("fs");
const pool = require("./connection");

const JsonParser = (path) =>
  JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));

const menu = JsonParser("./data/menus.json");
const categories = JsonParser("./data/categories.json");

const allMenu = menu
  .map((el) => {
    return `('${el.name}', '${el.category}', '${el.stock}', '${el.price}', '${el.createdAt}')`;
  })
  .join(", \n");

const allCategories = categories
  .map((el) => {
    return `('${el.name}')`;
  })
  .join(", \n");

const menuQuery = `
  INSERT INTO "Menus" ("name", "CategoryId", "stock", "price", "createdAt")
  VALUES ${allMenu}
`;

const categoryQuery = `
  INSERT INTO "Categories" ("name")
  VALUES ${allCategories}
`;

// INSERTING DATA TO TABLE - cmd: node seed.js
pool.query(categoryQuery, (err, res) => {
  if (err) {
    console.log(err);
    return "Error inserting values into category table";
  }
  console.log("Successfully inserting values into category table");
  pool.query(menuQuery, (err, res) => {
    if (err) {
      console.log(err);
      return "Error inserting values into menu table";
    }
    console.log("Successfully inserting values into menu table");
  });
});
// console.log(menuQuery, categoryQuery);
