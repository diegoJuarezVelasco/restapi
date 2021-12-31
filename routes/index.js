const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const clientController = require("../controllers/clientController");

module.exports = function () {
  //Add new clients via POST
  router.post("/clients", clientController.newCLient);

  //Show all clients
  router.get("/clients", clientController.showClients);

  //Show a specific client
  router.get('/clients/:clientId', clientController.showClient);

  //update a client
  router.put('/clients/:clientId', clientController.updateClient);
  
  //Delete a client
  router.delete('/clients/:clientId', clientController.deleteClient)


  return router;
};
