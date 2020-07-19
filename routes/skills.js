const express = require('express');
const router = express.Router();

// Skills
router.get('/', (req, res) => res.render('skills'));

// Database
router.get('/db', (req, res) => res.render('database'));

// language
router.get('/lang', (req, res) => res.render('language'));

// analytics
router.get('/anal', (req, res) => res.render('analytics'));

// Miscellaneous
router.get('/misc', (req, res) => res.render('misc'));

// Web Development
router.get('/web', (req, res) => res.render('web'));

// Softwares (IDEs)
router.get('/soft', (req, res) => res.render('soft'));

// Operating System
router.get('/os', (req, res) => res.render('os'));

module.exports = router;