import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { MyContext } from './context';
import ModalCard from './components/ModalCart';


function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => setCards(data));
  }, []);

  const filterBySalads = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=salads")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterBySoups = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=soups")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByChiken = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=chicken-dishes")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByBeef = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=beef-dishes")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterBySeafood = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=seafood-dishes")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByVegetable = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=vegetable-dishes")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByBits = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=bits-and-bites")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByOther = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/products?category=on-the-side")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByNuts = () => {
    fetch("http://localhost:3000/products?nuts=true")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const getAllDishes = () => {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const filterByNotMeats = () => {
    fetch("http://localhost:3000/products?vegeterian=true")
        .then(response => response.json())
        .then(data => setCards(data));
  }

  const [isOpenCart, setToggle] = useState(false);

  const toggleCart = () => {
    return isOpenCart ? setToggle(false) : setToggle(true)
  }

  const [cartProducts, setCart] = useState([])

  const cart = document.getElementsByClassName("cart-icon")

  const collectArrCart = (card) => {
    setCart(arr => [...arr, card]);

    cart[0] ? cart[0].classList.add("shake") : console.log("no cart")
  }

  const totalPrices = cartProducts.reduce((total, product) => {
    return total + product.price
  }, 0)
  
  return (
    <MyContext.Provider 
      value={{cards, 
              filterBySalads, 
              filterBySoups, 
              filterByChiken, 
              filterByBeef,
              filterBySeafood,
              filterByVegetable,
              filterByBits,
              filterByOther,
              filterByNuts,
              getAllDishes,
              filterByNotMeats,
              toggleCart,
              collectArrCart,
              cartProducts,
              totalPrices
            }}>
      <div className="App">
        <Header/>
        <Main/>

        {isOpenCart && ReactDOM.createPortal(<ModalCard/>, document.getElementById("portalForModal"))}

      </div>
    </MyContext.Provider>
  );
}

export default App;
