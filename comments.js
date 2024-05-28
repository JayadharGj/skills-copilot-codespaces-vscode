// Create a web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.get('/comments/new', (req, res) => {
  res.send('This is the new comments page');
});

app.get('/comments/:id', (req, res) => {
  res.send('This is the comments page with ID: ' + req.params.id);
});

app.get('/comments/:id/edit', (req, res) => {
  res.send('This is the edit comments page with ID: ' + req.params.id);
});

app.get('/comments/:id/delete', (req, res) => {
  res.send('This is the delete comments page with ID: ' + req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});