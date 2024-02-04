import "./assets/style/app.scss";
import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { GiShoppingCart } from "react-icons/gi";
import { CiCircleRemove } from "react-icons/ci";

// let data = [{
//   "id": 7,
//   "title": "White Gold Plated Princess",
//   "price": 9.99,
//   "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//   "rating": {
//     "rate": 3,
//     "count": 400
//   }
// }];

const API_URL = 'https://fakestoreapi.com/products';


function App() {
  let [products, setProducts] = useState([]);
  let [cartProducts, setCartProducts] = useState([]);
  let [toggle, setToggle] = useState(false);



  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  const handleAddToCart = (card) => {
    setCartProducts(prevState => ([...prevState, card]));
  }

  const handlerRemoveCardProduct = (id) => {
    let filteredProduct = cartProducts.filter(card => card.id !== id);

    setCartProducts(filteredProduct);
  }

  return (
    <>
      <nav className="navbar">
        <a href="" className="logo">LOGO</a>

        <button
          className={`navbar__icon ${toggle ? "navbar__icon-active" : ''}`}
          onClick={() => setToggle(!toggle)}
        >
          <GiShoppingCart className="icon" />
        </button>

      </nav>
      <main>
        <div className="container">
          <section className="products">

            {
              products && products.map(card => (<Card
                data={card}
                key={card.id + card.title}
                addToCart={() => handleAddToCart(card)}
              />))
            }

          </section>
        </div>
        {
          toggle &&
          <aside className="cart">
            {
              cartProducts && cartProducts.map(card => (
                <div className="item" key={card.id}>
                  <img src={card.image} alt={card.title} />
                  <div>
                    <h2>{card.title}</h2>
                    <h3>${card.price}</h3>
                  </div>
                  <button onClick={() => handlerRemoveCardProduct(card.id)}>
                    <CircleRemove className="icon" />
                  </button>
                </div>
              ))
            }
          </aside>
        }
      </main>
    </>

  );
}

export default App;
