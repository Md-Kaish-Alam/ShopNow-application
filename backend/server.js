const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ["http://localhost:3000",],
        credentials: true,
    })
)

// routes 
app.get("/", (req, res) => {
    res.send("Home");
});

app.use("/api/v1/users", userRoute);

// error middleware 
app.use(errorHandler)

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGOOSE_URL)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`server is running. URL: http://localhost:${PORT}`);
            })
        })
        .catch((error) => console.log('Error on Server', error));

