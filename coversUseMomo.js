import React, { useState, useMemo, useCallback, PureComponent } from "react";

// Mock user data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" }
  // Add more users as needed
];

// User component (PureComponent)
class User extends PureComponent {
  render() {
    const { name, email } = this.props.user;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  }
}

// UserList component
const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

// FilterUsers component
const FilterUsers = ({ filterUsers }) => {
  const handleInputChange = useCallback(
    (event) => {
      filterUsers(event.target.value);
    },
    [filterUsers]
  );

  return (
    <div>
      <label htmlFor="filter">Filter by Name:</label>
      <input type="text" id="filter" onChange={handleInputChange} />
    </div>
  );
};

// Main App component
function App() {
  const [filter, setFilter] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <FilterUsers filterUsers={handleFilterChange} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
