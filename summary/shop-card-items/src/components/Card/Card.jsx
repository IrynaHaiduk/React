
import React from "react";

const Card = ({data: { id, title, image, price }, addToCart}) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={image} alt={title} />

                <h3>${price}</h3>
            </div>

            <div className="card__footer">
                <h2>{title}</h2>
                <button className="btn" onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Card;