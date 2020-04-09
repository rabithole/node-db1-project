const express = require("express");

const accRouter = require("../accounts/accounts-router.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", accRouter);

server.get("/", (req, res) => {
	res.status(200).json( 'you got something here!' );
});

module.exports = server;
