const express = require('express');
require('./db/mongoose');
const app = express();
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is listening on PORT ', port);
})

const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = 'red12345!';    // provided by user
    const hashedPassword = await bcrypt.hash(password,8)                     //stored in database

    console.log(password);
    console.log(hashedPassword);

    const isMatch= await bcrypt.compare('red1234!',hashedPassword);
    console.log(isMatch);
}

myFunction();