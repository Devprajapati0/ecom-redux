import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { colorChange } from "../../color/colorSlice";
import "./Header.css";

function Header() {
    const Totalitems = useSelector((state) => state.cart);
    const bgcolor = useSelector((state) => state.color.backgroundColor);
    const dispatchColor = useDispatch();

    const onchangeable = () => {
        const newColor = bgcolor === "#222831" ? "#00204a" : "#222831";
        dispatchColor(colorChange(newColor));
    };

    return (
        <div className="main">
            <Link to="/">Ecommerce</Link>
            <div className="righ">
                <button id="sily" onClick={onchangeable}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/10831/10831113.png"
                        alt="Theme Toggle"
                    />
                </button>
                <Link to="/">Home</Link>
                <Link to="/Cart">Cart</Link>
                Cart: {Totalitems.length}
            </div>
        </div>
    );
}

export default Header;
