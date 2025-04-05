import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      enum: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "QA Engineer",
        "DevOps Engineer",
        "Admin"
      ],
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },    
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["employee", "employer"],
      default: "employee",
    },
  },
  {
    timestamps: true,
  }
);

const Employee =
  mongoose.models.employee || mongoose.model("employee", employeeSchema);
  export default Employee;
