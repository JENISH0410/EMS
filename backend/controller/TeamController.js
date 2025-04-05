import Team from "../model/Team.model.js";
import Employee from "../model/Employee.model.js";

export const createTeam = async (req, res) => {
  try {
    const { projectTitle, projectDescription, employers } = req.body;

    // Validate required fields
    if (!projectTitle || !projectDescription || !employers || employers.length === 0) {
      return res.status(400).json({
        message: "Project title, description, and at least one employer are required",
      });
    }

    // Check if all provided IDs are valid employers
    const validEmployers = await Employee.find({
      _id: { $in: employers },
      role: "employer",
    });

    if (validEmployers.length !== employers.length) {
      return res.status(400).json({
        message: "Some user IDs are invalid or not employers",
      });
    }

    // Create and save the new team
    const newTeam = new Team({
      projectTitle,
      projectDescription,
      employers,
    });

    await newTeam.save();

    // Populate only specific fields of employers
    const populatedTeam = await Team.findById(newTeam._id).populate("employers", "name email title");

    return res.status(201).json({
      message: "Team created successfully",
      team: populatedTeam,
    });
  } catch (error) {
    console.error("Error creating team:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
