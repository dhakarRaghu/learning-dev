const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // user is there or not

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message : "Admin created successfully"
    })
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
   const newcourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg : "Course is added" , courseId : newcourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        course: response
    })
});

module.exports = router;