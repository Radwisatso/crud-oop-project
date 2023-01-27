'use strict'
const pool = require("../connection");
const Factory = require("./class");

class Model {
  static readAll(cb) {
    const query = `
            SELECT * FROM "Menus";
        `;
    pool.query(query, (err, result) => {
      if (err) {
        return cb("Error to read all menu data from the table");
      }
      const data = Factory.createBulkMenus(result.rows)
      cb(null, data);
    });
  }

  static readOne(id, cb) {
    const query = `
            SELECT * FROM "Menus" WHERE "id" = ${id};
        `;
    pool.query(query, (err, result) => {
      if (err) {
        return cb("Error to read one menu data from the table");
      }
      if (result.rows.length === 0) {
        return cb(`Menu data with id ${id} does not exist`)
      }
      const data = Factory.createBulkMenus(result.rows)
      cb(null, data);
    });
  }

  static createOne(data, cb) {

    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let date = `${year}-${month}-${day}`

    const query = `
    INSERT INTO "Menus" ("name", "CategoryId", "price", "stock", "createdAt")
    VALUES ('${data.name}', ${data.category}, ${data.price}, ${data.stock}, '${date}')
    RETURNING *;
    `;
    pool.query(query, (err, result) => {
      if (err) {
        return cb("Error to create one menu data to the table");
      }
      const data = Factory.createBulkMenus(result.rows)
      cb(null, data);
    });
  }

  static updateOne(data, cb) {

  }

  static deleteOne(id, cb) {
    const query = `
      DELETE FROM "Menus" WHERE "id" = '${id}' RETURNING *;
    `
    pool.query(query, (err, result) => {
      if (err) {
        return cb("Error to delete one menu data to the table");
      }
      if (result.rows.length === 0) {
        return cb(`Error to delete, menu data with id ${id} does not exist`)
      }
      const data = Factory.createBulkMenus(result.rows)
      cb(null, data);
    })

  }
}

module.exports = Model;
