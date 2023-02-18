require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const githubRoutes=require('./routes/githubRoutes')

const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRegRoutes');
const hackiDetailRoutes = require('./routes/hackiDetailRoutes');
const teamDetailRoutes = require('./routes/teamDetailRoutes');
const bodyParser = require('body-parser');
const { upload } = require("./middlewares/multer");


mongoose.set("strictQuery", true);
mongoose.connect('mongodb://0.0.0.0:27017/hackniche', { useUnifiedTopology: true, useNewUrlParser: true, });
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('connected', con => console.log("connected to DB"));
mongoose.connection.on('disconnected', con => console.log("disconnected from DB"));

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/github',githubRoutes);
app.use('/hacki',hackiDetailRoutes);
app.use('/team',teamDetailRoutes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(8080, () => {
    console.log('Server started at 8080');
});