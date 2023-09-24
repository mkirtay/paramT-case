import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { LoginPage, List, DetailPage, PaymentPage } from "../pages/index";
import {ProtectedIn} from "./ProtectedIn";

const RoutesComp = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route element={<ProtectedIn/>}>
                    <Route path="/list" element={<List />}/>
                </Route>
                <Route element={<ProtectedIn/>}>
                    <Route path="/detail" element={<DetailPage />}/>
                </Route>
                <Route element={<ProtectedIn/>}>
                    <Route path="/payment" element={<PaymentPage />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default RoutesComp;
