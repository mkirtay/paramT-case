import {Outlet, Navigate} from "react-router-dom";
import {Header} from "../../components";

export const ProtectedIn = () => {
    const active: string | null  = localStorage.getItem('active');

    return (
        active && JSON.parse(active) ? <div className="layout">
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </div> : <Navigate to="/login"/>
    );
};
