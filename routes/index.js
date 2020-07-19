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

// Secondary
router.get('/secondary', (req, res) => res.render('secondary'));

// Senior Secondary
router.get('/senior', (req, res) => res.render('senior'));

// Undergraduation
router.get('/undergrad', (req, res) => res.render('undergrad'));

// Projects
router.get('/projects', (req, res) => res.render('projects'));

// internships
router.get('/internships', (req, res) => res.render('internships'));

// Achievements
router.get('/achievements', (req, res) => res.render('achievements'));

// Responsibility
router.get('/responsibility', (req, res) => res.render('responsibility'));

// contact
router.get('/contact', (req, res) => res.render('contact'));

// gallery
router.get('/gallery', (req, res) => res.render('gallery'));

module.exports = router;
