const express = require('express');

// database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
	// db.select('*').from('accounts');
	// res.status(200).json( 'You found the accounts router!' );
	console.log(req.params)
	db('accounts')
	.then(acc => {
		res.status(201).json(acc);
		// console.log(res.headersSent);
	})
	.catch(err => {
		res.status(500).json({ message: 'You are a faulure!' })
	})
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
	db('accounts').where({ name: 'account-01' });
});

module.exports = router;