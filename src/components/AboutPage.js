import { useState } from "react";
import { Link } from "react-router-dom";
// function components?? => do not need to import React from "react" for versions after 17.0.0

// Class components?? => you still do need to import React from "react"
// class base components are older way to write codes,
// you may see a lot of codes written with class components
// WE DO NOT USE IT ANY MORE, WE PREFER => HOOKS

const AboutPage = (props) => {
    const [text, setText] = useState(" ")

    function changeHandler(e) {
        setText(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <h2>About us</h2>
            <p>We are {props.username}</p>
            <Link to="/">Home</Link>
            <input type="text" onChange={changeHandler} value={text} />
        </>
    )
}

export default AboutPage;