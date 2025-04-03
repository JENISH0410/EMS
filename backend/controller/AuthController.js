import User from "../model/User.model.js";

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // check if all fields are present
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  await User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "User does not exist",
        });
      }

      // check if password is correct
      if (user.password !== password) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      return res.status(200).json({
        message: "Login successful",
        user,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
};

export const userSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  // check if all fields are present
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // check if user already exists
  await User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
  });

  // create new user
  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser
    .save()
    .then(() => {
      return res.status(201).json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
};
