import React from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Message from "./components/Message";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";


function App() {
    return (
        <div>
            <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer/>
                    <MessageContainer/>
                    <CartContainer/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
