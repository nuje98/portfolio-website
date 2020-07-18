const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => res.render('home'));

// Family
router.get('/family', (req, res) => res.render('family'));

// Education
router.get('/education', (req, res) => res.render('education'));

// Grades
router.get('/grades', (req, res) => res.render('grades'));

// Projects
router.get('/projects', (req, res) => res.render('projects'));

// internships
router.get('/internships', (req, res) => res.render('internships'));

// Achievements
router.get('/achievements', (req, res) => res.render('achievements'));

// Responsibility
router.get('/responsibility', (req, res) => res.render('responsibility'));

// skills
router.get('/skills', (req, res) => res.render('skills'));

// contact
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;
