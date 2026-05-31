const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Thank You for watching! ');
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});
