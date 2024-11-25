import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../app/Slice";
import "./Product.css";

function Products() {
    const [Todo, setTodo] = useState([]);
    const dispatch = useDispatch();
    const bgcolor = useSelector((state) => state.color.backgroundColor);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setTodo(res));
    }, []);

    const handleClick = (Product) => {
        dispatch(add({ ...Product, quantity: 1 }));
    };

    return (
        <div className="main-dic" style={{ backgroundColor: bgcolor }}>
            {Todo.map((Product) => (
                <div className="first-one" key={Product.id}>
                    <img src={Product.image} alt={Product.category} />
                    <h1>{Product.category}</h1>
                    <h3>${Product.price.toFixed(2)}</h3>
                    <button onClick={() => handleClick(Product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
