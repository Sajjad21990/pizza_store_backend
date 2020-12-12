const Menu = require("../../models/menu");

function homeController() {
  return {
    async index(req, res) {
      const pizzas = await Menu.find();
      res.send("hello pizzas");
    },
    login(req, res) {
      res.status(200).json({
        msg: "hello",
      });
    },
  };
}

module.exports = homeController;
