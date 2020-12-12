const homeController = require("../app/http/controllers/homeController");

function initRoutes(app) {
  app.get("/", homeController().index);
  app.get("/login", homeController().login);
}

module.exports = initRoutes;
