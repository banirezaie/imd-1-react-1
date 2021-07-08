import Header from "./components/common/Header";
import { Redirect, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import PageNotFound from "./components/PageNotFound";
import ManageCoursePage from "./components/ManageCoursePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <Header />
            <ToastContainer autoClose={3000} hideProgressBar />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursePage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Redirect from="/mycourse" to="/courses" />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}


export default App;