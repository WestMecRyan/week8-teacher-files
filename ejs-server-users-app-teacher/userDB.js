// userDB.js
const fs = require('fs');
const path = require('path');

const userDBfilePath = path.join(__dirname, 'data', 'users.json');

const readUsers = () => {
  try {
    return JSON.parse(fs.readFileSync(userDBfilePath, "utf8"));
  } catch (error) {
    console.log("No users file found, starting with empty array");
    return [];
  }
};

const writeUsers = (users) => {
  // Ensure data directory exists
  const dataDir = path.dirname(userDBfilePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(userDBfilePath, JSON.stringify(users, null, 2));
};

const addUser = (newUser) => {
  const users = readUsers();
  users.push(newUser);
  writeUsers(users);
  return newUser;
};

const getUserById = (id) => {
  const users = readUsers();
  return users.find(user => user.id === id);
};

const updateUser = (id, updatedData) => {
  const users = readUsers();
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    writeUsers(users);
    return users[index];
  }
  return null;
};

const deleteUser = (id) => {
  const users = readUsers();
  const filteredUsers = users.filter(user => user.id !== id);
  writeUsers(filteredUsers);
  return filteredUsers.length !== users.length; // Returns true if user was deleted
};

module.exports = {
  readUsers,
  writeUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser
};