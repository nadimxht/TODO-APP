import React, {useState} from 'react'
import ProductList from './Components/ProductList'
import NavigationBar from './NavigationBar'
import {Products} from "./assets/Data"
export default function App() {
    const [productList, setProductList] = useState(Products);
    const [searchWord, setSearchWord] = useState("");
    const [category, setCategory] = useState("");
    const [cartItems, setCartItems] = useState([])
    const [PriceFilter, setPriceFilter] = useState(0);
    return (
        <div>

            <NavigationBar
            setCartItems={setCartItems}
                setPriceFilter={setPriceFilter}
                cartItems={cartItems}
                setCategory={setCategory}
                setSearchWord={setSearchWord}/>

            <ProductList
                data={searchWord != ""
                    ? productList.filter(
                        e => e.title.toLowerCase().includes(searchWord.toLowerCase())
                    )
                    : category != ""
                        ? productList.filter(e => e.category.name == category)
                        : PriceFilter != 0
                            ? productList.filter(e => e.price <= PriceFilter)
                            : productList}
                setCartItems={setCartItems}
                cartItems={cartItems}/>
        </div>
    )
}

// e commerce product List  :  products Search bar : name category Cart