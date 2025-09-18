const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const userDBfilePath = path.join(__dirname, 'data', 'usersDB.json');

// Helper functions
const readFile = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.log('No users file found, starting with empty array');
    return [];
  }
};

const writeFile = (filePath, data) => {
  // Ensure data directory exists
  const dataDir = path.dirname(filePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const addUserId = () => {
  const users = readFile(userDBfilePath);

  // Add ID to each user that doesn't have one
  users.forEach((user, index) => {
    if (!user.id) {
      user.id = (Date.now() + index).toString(); // Add slight offset to avoid duplicates
    }
  });

  writeFile(userDBfilePath, users);
  console.log('IDs added to all users');
};
addUserId();
