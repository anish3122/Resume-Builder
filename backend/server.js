const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const RegisterModel = require("./models/Register")
const bcrypt = require("bcryptjs");

const cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: true, credentials: true }));
mongoose.connect(
    "mongodb+srv://Anish:Anish@backendtest.wlb6s.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
    RegisterModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/writeUser", async(req, res) => {
    const User = req.body;
    if (User == null)
        return res.json({ status: 'null' })
    const newUser = new RegisterModel(User);
    await newUser.save();
    return res.json({ status: 'ok' })

});

app.post('/Login', async(req, res) => {
    console.log(req.body)
    const user = await RegisterModel.findOne({
            email: req.body.email,
        })
        // console.log(user)
    if (!user) {
        return res.json({ status: 'err', error: 'Invalid login' })
    }

    const isPasswordValid = req.body.password === user.password
        // bcrypt.compare(
        //     req.body.password,
        //     user.password
        // )
    console.log(isPasswordValid)
    if (isPasswordValid) {
        // res.send("ok")
        console.log("ok")
        const token = jwt.sign({
                name: user.name,
                email: user.email,
            },
            'secret123'
        )
        console.log(token)

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});