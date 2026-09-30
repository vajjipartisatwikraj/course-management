const Course = require("../models/courses");

async function getCourses(req, res) {
    const courses = await Course.find();
    res.json(courses);
}

async function createCourse(req, res) {

    const newCourse = await Course.create({
        name: req.body.name,
        desc: req.body.desc
    });

    res.status(201).json(newCourse);
}

async function updateCourse(req, res) {

    const id = Number(req.params.id);

    const course = await Course.findByIdAndUpdate(
        id,
        {
            name : req.body.name,
            desc : req.body.desc
        },
        {
            new : true
        }
    )

    if(!course){
        return res.status(404).json({
            message : "Course Not Found"
        })
    }

    res.json(course);
}

async function deleteCourse(req, res) {

    const id = req.params.id;

    const course = await Course.findByIdAndDelete(id);

    if(!course){
        return res.status(404).json({
            message : "Course Not Found"
        })
    }

    res.json({
        message : "Course Deleted"
    });
}

module.exports = {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse
};