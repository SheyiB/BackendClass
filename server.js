const express = require('express');

const app = express();

const dotenv = require('dotenv')

dotenv.config();

const UserRoute = require('./routes/user.routes');

app.use(express.json());


app.use('/api/auth', UserRoute);
app.listen(80, () => {
    console.log('Server is running on port 80...')
})