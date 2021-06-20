const HomePage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 >IMD CLASS 1</h1>
                <p>IMD-1 course list will be here shortly</p>
            </div>
            <ul>
                {props.courses.map(course => {
                    return (
                        <li key={course.id} >{course.slug}</li>
                    )
                })}
            </ul>
            <a href="/about">About us</a>
        </div>
    )
}

export default HomePage;