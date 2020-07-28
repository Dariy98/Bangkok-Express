import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { MyContext } from './context';
import ModalCard from './components/ModalCart';


function App() {
  const [cards, setCards] = useState([])

  const getData = (e, param) => {
    if(e !== null) { e.preventDefault() }
    
    fetch(`http://localhost:3000/${param}`)
      .then(response => response.json())
      .then(data => setCards(data));
  }

  useEffect(() => {
      getData(null, "products")
  }, []);

  const filterBySalads = (e) => { getData(e, "products?category=salads") }

  const filterBySoups = (e) => { getData(e, "products?category=soups") }

  const filterByChiken = (e) => { getData(e, "products?category=chicken-dishes") }

  const filterByBeef = (e) =>  { getData(e, "products?category=beef-dishes") }

  const filterBySeafood = (e) =>  { getData(e, "products?category=seafood-dishes") }

  const filterByVegetable = (e) =>  { getData(e, "products?category=vegetable-dishes") }

  const filterByBits = (e) => { getData(e, "products?category=bits-and-bites") }

  const filterByOther = (e) => { getData(e, "products?category=on-the-side") }

  const filterByNuts = () => { getData(null, "products?nuts=true") }

  const getAllDishes = () => { getData(null, "products") }

  const filterByNotMeats = () => { getData(null, "products?vegeterian=true") }

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
