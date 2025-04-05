import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateTeamForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const [createdTeam, setCreatedTeam] = useState(null);

  // Fetch only "employee" role users
  useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('http://localhost:5112/api/auth/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setEmployees(data.users);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  console.log(employees)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectTitle || !projectDescription || selectedEmployees.length === 0) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("/api/teams", {
        projectTitle,
        projectDescription,
        employers: selectedEmployees,
      });
      console.log(res.data)
      // Fetch full employee details for team summary
      const teamEmployees = employees.filter((emp) =>
        selectedEmployees.includes(emp._id)
      );

      setCreatedTeam({
        projectTitle,
        projectDescription,
        employers: teamEmployees,
      });

      setMessage("Team created successfully!");
      setProjectTitle("");
      setProjectDescription("");
      setSelectedEmployees([]);
    } catch (error) {
      console.error("Team creation failed:", error);
      setMessage("Failed to create team.");
    }
  };

  const handleEmployeeSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedEmployees.includes(value)) {
      setSelectedEmployees([...selectedEmployees, value]);
    }
  };

  const removeEmployee = (id) => {
    setSelectedEmployees(selectedEmployees.filter((empId) => empId !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
      <h2 className="text-2xl font-semibold mb-4">Create New Team</h2>

      {message && <div className="mb-4 text-blue-600">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="w-full border p-2 rounded"
          required
        ></textarea>

        <div>
          <label className="block mb-2 font-medium">Select Employees</label>
          <select onChange={handleEmployeeSelect} className="w-full border p-2 rounded">
            <option value="">-- Select Employee --</option>
            {employees.map((emp) => (
              <option key={emp._id} value={emp._id}>
                {emp.name} - {emp.title}
              </option>
            ))}
          </select>

          {selectedEmployees.length > 0 && (
            <ul className="mt-2 space-y-1">
              {selectedEmployees.map((empId) => {
                const emp = employees.find((e) => e._id === empId);
                return (
                  <li
                    key={empId}
                    className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded"
                  >
                    <span>{emp?.name} - {emp?.title}</span>
                    <button
                      type="button"
                      onClick={() => removeEmployee(empId)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Team
        </button>
      </form>

      {/* Display Created Team Details */}
      {createdTeam && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded">
          <h3 className="text-lg font-bold mb-2">Team Created:</h3>
          <p><strong>Project Title:</strong> {createdTeam.projectTitle}</p>
          <p><strong>Description:</strong> {createdTeam.projectDescription}</p>
          <p className="mt-2 font-semibold">Team Members:</p>
          <ul className="list-disc pl-5">
            {createdTeam.employers.map((emp) => (
              <li key={emp._id}>{emp.name} ({emp.title})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateTeamForm;
