import CoursePage from "../CoursePage";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";

const Header = () => {

    function header() {
        const route = window.location.pathname;
        const arr = [1, 2, 3]
        if (route === "/courses") return <CoursePage />
        if (route === "/about") return <AboutPage username="imd" />
        else return <HomePage username="IMD" password={arr} />
    }

    return (
        <nav className="container-fluid" >
            <a href="/">Home</a> | <a href="/courses">Course Page</a> | <a href="/about">About us</a>
            {header()}
        </nav>
    )
}

export default Header;