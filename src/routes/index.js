const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Esperanza Divina' });
});
router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Contact Page' });
});
router.get('/about', (req, res) => {
  res.render('about.html', { title: 'Quienes Somos' });
});
router.get('/activity', (req, res) => {
  res.render('activity.html', { title: 'Trabajo Social' });
});
router.get('/radio', (req, res) => {
  res.render('radio.html', { title: 'Radio Fm ' });
});
module.exports = router;
