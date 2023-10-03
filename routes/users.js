const express = require('express');
const { registerUser, loginUser } = require("../controllers/userController");
const { RegisterValidation, validation, LoginValidation } = require('../middleware/validator');
const isAuth = require('../middleware/isAuth');
const router = express.Router();

// Route for user registration
router.post('/register',RegisterValidation(),validation, registerUser);

// Route for user login
router.post('/login',LoginValidation(),validation, loginUser);

//current user
router.get("/current", isAuth, (req, res) => {
  res.send("You are authorized to pass");
})

// Route for getting user profile
router.get('/profile/:id', async (req, res) => {
  try {
    res.status(200).send({ message: 'User profile retrieved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving user profile', error });
  }
});

// Route for updating user profile
router.put('/profile/:id', async (req, res) => {
  try {
    res.status(200).send({ message: 'User profile updated successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error updating user profile', error });
  }
});

// Route for deleting user profile
router.delete('/profile/:id', async (req, res) => {
  try {
    res.status(200).send({ message: 'User profile deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error deleting user profile', error });
  }
});

module.exports = router;

