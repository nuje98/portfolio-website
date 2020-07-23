const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => res.render('home2'));

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
router.get('/projects', (req, res) => res.render('project'));

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

// certifications
router.get('/certifications', (req, res) => res.render('certifications'));

// sem1
router.get('/sem1', (req, res) => res.render('sem1'));

// sem2
router.get('/sem2', (req, res) => res.render('sem2'));

// sem3
router.get('/sem3', (req, res) => res.render('sem3'));

// sem4
router.get('/sem4', (req, res) => res.render('sem4'));

// sem5
router.get('/sem5', (req, res) => res.render('sem5'));

// sem6
router.get('/sem6', (req, res) => res.render('sem6'));

// technical
router.get('/technical', (req, res) => res.render('technical'));

module.exports = router;
