const express = require('express');

// database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
	
	db('accounts')
	.then(acc => {
		res.status(201).json(acc);
	})
	.catch(err => {
		res.status(500).json({ message: 'You are a faulure!' })
	})
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	console.log(id)

	db.select('*').from('accounts').where({ id })
	.then(acc => {
		res.status(201).json(acc);
	})
	.catch(err => {
		res.status(500).json({ message: 'What, it do not work?' })
	})
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
	db('accounts').where({ name: 'account-01' });
});

module.exports = router;