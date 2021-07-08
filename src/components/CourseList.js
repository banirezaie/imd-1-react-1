import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Slug</th>
                    </tr>
                </thead>
                <tbody>
                    {courses && courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td>{course.authorId}</td>
                                <td> <Link to={`/course/${course.slug}`} >{course.title}</Link> </td>
                                <td>{course.category}</td>
                                <td>{course.slug}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default CourseList;