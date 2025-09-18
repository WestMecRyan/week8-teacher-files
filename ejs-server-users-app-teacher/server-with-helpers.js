const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");
const userDBfilePath = path.join(__dirname, "data", "usersDB.json");
const PORT = 3000;

// Helper functions
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

app.get("/", (req, res) => {
  res.render("index", {
    text: "Hello",
    message: "friends",
  });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/users/list", (req, res) => {
  const users = readUsers();
  res.render("usersList", { users });
});

app.post("/form/new", (req, res) => {
  console.log("received data", req.body);
  const users = readUsers();
  const newUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    phone: req.body.phone,
  };
  users.push(newUser);
  writeUsers(users);
  res.json({
    success: true,
    message: "data added to database,",
    data: req.body,
    redirectTo: "/users/list",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});