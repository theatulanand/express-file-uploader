const express = require('express')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

const fs = require('fs');
const path = require('path');

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send("File uploaded")
});

app.listen(3000, () => {
    console.log("Server is running at 3000")
})