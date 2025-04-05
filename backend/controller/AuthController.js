import Employee from "../model/Employee.model.js";

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // check if all fields are present
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  await Employee.findOne({ email })
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
  const { name, email, password, title, role } = req.body;

  // Check if all required fields are present
  if (!name || !email || !password || !title) {
    return res.status(400).json({
      message: "Name, email, password, and title are required",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Create new user (role defaults to 'employee' if not provided)
    const newUser = new Employee({
      name,
      email,
      password,
      title,
      role: role || "employee",
    });

    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const getAllUsers = async (req, res) => {
  await Employee.find()
    .then((users) => {
      return res.status(200).json({
        message: "Users fetched successfully",
        users,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
}

export const getUserById = async (req, res) => {
  const { id } = req.params;

  await Employee.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: "User fetched successfully",
        user,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, title, role } = req.body;

  await Employee.findByIdAndUpdate(id, {
    name,
    email,
    password,
    title,
    role,
  }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: "User updated successfully",
        user,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  await Employee.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: "User deleted successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal server error",
      });
    });
}

