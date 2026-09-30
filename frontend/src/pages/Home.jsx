import Card from '../components/Card';
import AddCourse  from '../components/AddCourse';

import { useState, useEffect } from 'react';

function Home(){

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/courses")
        .then(response => response.json())
        .then(data => {
            setCourses(data)
        })
    }, [])

    function addCourseToUI(newCourse) {
        setCourses(prevCourses => [...prevCourses, newCourse]);
    }

    async function updateCourse(course) {
        const name = window.prompt("Course name", course.name);
        const desc = window.prompt("Course description", course.desc);

        if (name === null || desc === null || !name.trim() || !desc.trim()) {
            return;
        }

        const response = await fetch(`http://localhost:5000/api/courses/${course.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.trim(),
                desc: desc.trim()
            })
        });

        if (!response.ok) {
            throw new Error("Unable to update course");
        }

        const updatedCourse = await response.json();
        setCourses(prevCourses => prevCourses.map(currentCourse =>
            currentCourse.id === updatedCourse.id ? updatedCourse : currentCourse
        ));
    }

    async function deleteCourse(id){
        await fetch(`http://localhost:5000/api/courses/${id}`, {
            method : "DELETE"
        });

        setCourses(prevCourses => 
            prevCourses.filter(course => course._id !== id)
        );
    }

    return <>
        <div>Courses</div>
        
        <AddCourse addCourseToUI = {addCourseToUI}/>

        <div className="cards">
            {courses.map(course => (
                <Card
                    key = {course._id}
                    id = {course._id}
                    title = {course.name}
                    desc = {course.desc}
                    onDelete = {deleteCourse}
                    onEdit = {updateCourse}
                />
            ))}
        </div>
    </>
}

export default Home;