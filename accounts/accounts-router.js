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
	console.log(req.body)
	db('accounts').insert(req.body)
	.then(acc => {
		res.status(210).json(acc);
	})
	.catch(err => {
		res.status(501).json({ message: 'What the hell do you think your doing?' });
	})
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	db('accounts').where({ id }).update(changes)
		
		.then(acc => {
			res.status(201).json(acc);
		})
		.catch(err => {
			res.status(500).json({ message: 'you failed again'});
		})
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	db('accounts').delete()
	.where({ id })
	.then(acc => {
		res.status(210).json(acc);
	})
	.catch(err => {
		res.status(500).json({ message: "You've lost your minde!" })
	})
});

module.exports = router;