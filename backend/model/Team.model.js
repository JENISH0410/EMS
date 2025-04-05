import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    projectTitle: {
      type: String,
      required: true,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: true,
      trim: true,
    },
    employers: [
      {
        type: Schema.Types.ObjectId,
        ref: "employee", // should match model name of Employee
        required: true,
      },
    ],
    employersCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to auto-update employersCount
teamSchema.pre("save", function (next) {
  this.employersCount = this.employers.length;
  next();
});

const Team = mongoose.model("team", teamSchema);
export default Team;
