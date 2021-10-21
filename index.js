const express = require('express')
var cors = require('cors')
const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World with nodemon, it is exciting!')
})


const users = [
    { id: 0, name: 'mimi', email: 'mimi12@emai.com' },
    { id: 1, name: 'jimi', email: 'mimi12@emai.com' },
    { id: 2, name: 'rimi', email: 'mimi12@emai.com' },
    { id: 3, name: 'uimi', email: 'mimi12@emai.com' }
]


app.get('/users', (req, res) => {

    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})


// making dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// how to search in the search bar (a query parameter) => http://localhost:3000/users?search=j