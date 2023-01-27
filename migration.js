const pool = require("./connection");

const categories = `
    CREATE TABLE IF NOT EXISTS "Categories" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(100) NOT NULL
    )
`;
const menu = `
    CREATE TABLE IF NOT EXISTS "Menus" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(100) NOT NULL,
        "CategoryId" INT NOT NULL REFERENCES "Categories" ("id"),
        "stock" INT NOT NULL,
        "price" INT NOT NULL,
        "createdAt" DATE NOT NULL
    )
`;

// CREATING TABLE - cmd: node migration.js
pool.query(categories, (err, res) => {
  if (err) {
    console.log(err);
    return "Error making category table";
  }
  console.log("Successfully created category table");
  pool.query(menu, (err, res) => {
    if (err) {
      console.log(err);
      return "Error making menu table";
    }
    console.log("Successfully created menu table");
  });
});
