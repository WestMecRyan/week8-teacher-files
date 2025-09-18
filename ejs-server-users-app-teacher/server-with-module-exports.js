// app.js or server.js
const express = require('express');
const { readUsers, writeUsers, addUser, getUserById, updateUser, deleteUser } = require('./userDB');

const app = express();

// GET all users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.render('users', { users });
});

// POST new user
app.post('/users', (req, res) => {
  const newUser = {
    id: Date.now().toString(), // Simple ID generation
    ...req.body,
    createdAt: new Date().toISOString()
  };
  addUser(newUser);
  res.redirect('/users');
});

// GET single user
app.get('/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).render('404', { message: 'User not found' });
  }
  res.render('user-detail', { user });
});

// PUT/POST update user
app.post('/users/:id/edit', (req, res) => {
  const updatedUser = updateUser(req.params.id, req.body);
  if (!updatedUser) {
    return res.status(404).render('404', { message: 'User not found' });
  }
  res.redirect(`/users/${req.params.id}`);
});

// DELETE user
app.post('/users/:id/delete', (req, res) => {
  const deleted = deleteUser(req.params.id);
  if (!deleted) {
    return res.status(404).render('404', { message: 'User not found' });
  }
  res.redirect('/users');
});