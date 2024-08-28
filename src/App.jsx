import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Router from "./Router.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Router/>
            {/*<RouterProvider router={router}/>*/}
        </BrowserRouter>
    )
}

export default App;