const Clients = require("../models/Clients");

// add a new client
exports.newCLient = async (req, res, next) => {
  const client = new Clients(req.body);
  try {
    await client.save();
    res.json({ msg: "A new client has been added" });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
    next();
  }
};
//show all clients
exports.showClients = async (req, res, next) => {
  try {
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    res.json({ msg: "Clients can´t be fetched" });
    next();
  }
};
//show one client
exports.showClient = async (req, res, next) => {
  try {
    const client = await Clients.findById(req.params.clientId);
    if (!client) {
      res.json({ msg: "That client does not exists" });
      next();
    } else {
      res.json(client);
    }
  } catch (error) {
    console.log.log(error);
    res.json({ msg: error });
  }
};
//update a client
exports.updateClient = async (req, res, next) => {
  try {
    const client = await Clients.findOneAndUpdate(
      { _id: req.params.clientId },
      req.body,
      {
        new: true,
      }
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.deleteClient = async (req, res, next) => {
  try {
    client = await Clients.findOneAndDelete({ _id: req.params.clientId });
    if (!client) {
      res.json({ msg: "That client does not exists" });
    } else {
      res.json({ msg: "Client has been deleted" });
    }
  } catch (error) {
    next();
    console.log(error);
  }
};
