import express from 'express';

const app = express();
const port = 3000;

// rotas 
app.get('/', (req, res) => {
    res.send('Olá')
})

app.listen(port, () => {
    console.log('Servidor on!')
})