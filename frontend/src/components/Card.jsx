import '../App.css';

import { useState } from 'react';

function Card ({id, title, desc, onDelete, onEdit}){

    const [enrolled, setEnrolled] = useState(false);

    return <div className="card">
        <h2>{title}</h2>
        <p>{desc}</p>

        <button className={enrolled ? "enrolled-btn" : "enroll-btn"} onClick={() => setEnrolled(!enrolled)}>{enrolled ? "Enrolled" : "Enroll"}</button>
        <button onClick={() => onEdit({ id, name: title, desc })}>Edit</button>
        <button className="dlt-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
}

export default Card;