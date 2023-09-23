import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { LoginPage, List, DetailPage, PaymentPage } from "../pages/index";

const RoutesComp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/list" element={<List />}/>
                <Route path="/detail" element={<DetailPage />}/>
                <Route path="/payment" element={<PaymentPage />}/>
            </Routes>
        </Router>
    )
}

export default RoutesComp;
