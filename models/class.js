class Menu {
  constructor(id, name, category, price, stock, createdAt) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.createdAt = createdAt;
  }
}

class Category {
  constructor(category, totalStock, totalSales) {
    this.category = category;
    this.totalStock = totalStock;
    this.totalSales = totalSales;
  }
}

class Factory {
  static createBulkMenus(menus) {
    const data = menus.map((el) => {
      const { id, name, price, CategoryId, stock, createdAt } = el;
      return new Menu(id, name, price, CategoryId, stock, createdAt);
    });
    return data;
  }
  static createBulkCategories(categories) {
    const data = categories.map((el) => {
      const { category, totalStock, totalSales } = el;
      return new Category(category, totalStock, totalSales);
    });
    return data;
  }
}

module.exports = Factory;
