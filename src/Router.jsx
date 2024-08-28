import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main.jsx";

function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/*<Route element={<PrivateRoute/>}>*/}
                <Route path="/" element={<Main />} />
            {/*</Route>*/}
        </Routes>
    );
}

export default Router;