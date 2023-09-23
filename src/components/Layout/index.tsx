import { Header } from "../index";
import {FC} from "react";

interface ILayout {
    children: React.ReactNode
}
const Layout:FC<ILayout> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout
