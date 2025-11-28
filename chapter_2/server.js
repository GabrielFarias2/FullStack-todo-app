// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

let data = ['Gabriel']

app.use(express.json())

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req, res) => {
  res.send(`
    <body
    style="background:gray;
    color: white;">
    <h1>DATA</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">Dashboard</a>
    </body>
    `);
});

app.get('/dashboard', (req, res) => {
  res.send(`
    <body>
    <h1>dashboard</h1>
     <a href="/">Home</a>
    </body>
    
    `);
});

// Type 2 - API endpoints (non visual)
// CRUD -> method create = post, read = get, update = put, delete = delete

app.get('/api/data', (req, res) => {
  console.log('this one is for data');
  res.send(data);
});

app.post('/api/data', (req, res) => {
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
});

app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('We deleted the element off the final of the array')
  res.sendStatus(203)
})

app.listen(PORT, () => {
  console.log(`server has started on: ${PORT}`);
});
