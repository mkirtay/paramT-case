import {Button} from "../index";
import './Header.scss';
import {useEffect, useState} from "react";

const Header = () => {
    const [user, setUser] = useState<string | null>(null)
    useEffect(() => {
        setUser(localStorage.getItem('user'))
    }, [])

    return <header className="header">
        <img className="header__logo" src="images/param-logo.svg" alt="Logo"/>
        <Button buttonType="secondary" iconLeft={<i className="icon-avatar"></i>}>{user}</Button>
    </header>
}

export default Header;
