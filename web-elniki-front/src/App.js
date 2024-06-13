import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import RegPage from "./regLogComponents/regComponents/RegPage";
import LogPage from './regLogComponents/logComponents/LogPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={<LogPage />}
                    />
                    <Route
                        path='/reg'
                        element={<RegPage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
