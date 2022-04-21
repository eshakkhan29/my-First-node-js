const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const data = [
    { id: 1, name: 'eshak khan', job: 'programing' },
    { id: 2, name: 'zubayer khan', job: 'programing' },
    { id: 3, name: 'masud khan', job: 'programing' },
    { id: 4, name: 'mahmud khan', job: 'programing' },
    { id: 5, name: 'yesir khan', job: 'programing' },
    { id: 6, name: 'naim khan', job: 'programing' }
]

app.get('/', (req, res) => {
    res.send('done set the sever site code')
})

app.get('/user', (req, res) => {
    res.send(data);
})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const matchData = data.find(d => d.id === id)
    res.send(matchData);
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = data.length + 1;
    data.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('this is show');
})