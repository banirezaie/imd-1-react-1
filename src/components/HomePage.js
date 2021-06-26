import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 >IMD CLASS 1</h1>
                <p>IMD-1 course list will be here shortly</p>
            </div>
            <ul>
                {props.courses && props.courses.map(course => {
                    return (
                        <li key={course.id} >{course.slug}</li>
                    )
                })}
            </ul>
            <Link to="/about">About us</Link>
        </div>
    )
}

export default HomePage;