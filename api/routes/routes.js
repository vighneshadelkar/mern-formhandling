const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/formdata');





router.get('/', async (req, res) => {

    try {
        const showUsers = await User.find()
        res.status(200).json(showUsers)

    } catch (error) {
    }
})

router.get('/', async (req, res) => {

    try {
        const singleUser = await User.findById(req.params.id)
        res.status(200).json(singleUser)

    } catch (error) {

    }
})

router.post('/', async (req, res) => {

    const Data = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    try {
        const userData = await Data.save();
        res.status(201).json(userData)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})



router.delete('/:id', async (req, res) => {

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})



// router.patch('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, email, age } = req.body
//     try {
//         const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
//         res.status(200).json(updateUser)

//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// })



module.exports = router;
