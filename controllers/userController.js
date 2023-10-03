const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// Function to register a new user
exports.registerUser = async (req, res) => {
    try {
      const { username, email, password, phone, address } = req.body;
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        return res.status(400).send({ msg: 'Email should be unique, try again!' });
      }
      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new User({ ...req.body });
      newUser.password = hashPassword;
      await newUser.save();
      res.status(200).send({ msg: 'Register successfully', user: newUser });
    } catch (error) {
      res.status(400).send({ msg: 'Error registering user', error });
    }
};

// Function to log in a user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: 'Bad credentials!' }] });
    }

    const checkPassword = await bcrypt.compare(password, foundUser.password);

    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: 'Bad credentials!' }] });
    }

    // Create a JSON Web Token (JWT)
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Send the token along with the response
    res.status(200).send({ msg: 'User logged in successfully', user: foundUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error logging in user', error });
  }
};


// Function to log out a user
exports.logoutUser = async (req, res) => {
 try {
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out user', error });
  }
};
