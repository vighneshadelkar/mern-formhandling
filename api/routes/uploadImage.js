const express = require('express');
const Imgrouter = express.Router();
const multer = require('multer');
const Images = require('../models/images');

// upload
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

Imgrouter.post('/', upload.single('image'), async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file)
        const image = new Images({
            image: req.file.filename
        });
        const result = await image.save();
        return res.status(201).json({
            message: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = Imgrouter;