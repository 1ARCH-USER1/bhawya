const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', (req, res) => {
  const answer = req.body.answer;
  fs.appendFileSync('/bhawya/answers.txt', answer + '\n');
  res.send('ok');
});

app.get('/answers', (req, res) => {
  res.sendFile(path.join(__dirname, '/bhawya/answers.txt'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
