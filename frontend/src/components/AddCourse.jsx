import { useState } from "react"

function AddCourse({addCourseToUI}) {

    const [course, setCourse] = useState({
        name : "",
        desc : ""
    });

    const [error, setError] = useState("");

    function handleNameChange(e) {
        setCourse({
            ...course,
            name: e.target.value
        });
    }

    function handleDescChange(e) {
        setCourse({
            ...course,
            desc: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if(course.name.trim() === ""){
            alert("Name Should not be Empty");
            setError("Name Required");
            return;
        }

        if(course.desc.trim() === ""){
            alert("Description should not be Empty");
            setError("Description Required");
            return;
        }

        const response = await fetch("http://localhost:5000/api/courses", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(course)
        })

        const newCourse = await response.json();
        console.log(newCourse);

        addCourseToUI(newCourse);

        setCourse({
            name: "",
            desc : ""
        })

        setError("");
    }

    return <>
        <form className="add-course-form" onSubmit={handleSubmit}>
            <input 
                type = "text"
                name = "name"
                placeholder="Course Name"
                value = {course.name}
                onChange={handleNameChange}
            />

            <input
                type = "text"
                name = "desc"
                placeholder="Course Description"
                value = {course.desc}
                onChange={handleDescChange}
            />

            <button type = "submit" > Add Course </button>

            {error && (
                <p className="error">{error}</p>
            )}
        </form>
    </>
}

export default AddCourse