    '/form/new',
    (req, res) => {
    message: 'data added to database,',
  const users = readFile(userDBfilePath);
  });
    ...req.body,
  const newUser = {
    id: Date.now().toString(),
  };
app.post(
  users.push(newUser);
  writeFile(userDBfilePath, users);
  res.json({
    success: true,
});