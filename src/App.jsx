import React, {useState} from 'react'
import ProductList from './Components/ProductList'
import NavigationBar from './NavigationBar'
import {Products} from "./assets/Data"
export default function App() {
    const [productList, setProductList] = useState(Products);
    const [searchWord, setSearchWord] = useState("");
    const [category, setCategory] = useState("") ; 
    const [cartItems , setCartItems]=useState([])
    return (
        <div>

            <NavigationBar cartItems={cartItems} setCategory={setCategory} setSearchWord={setSearchWord}/>

            <ProductList
                data={searchWord != ""
                    ? productList.filter(
                        e => e.title.toLowerCase().includes(searchWord.toLowerCase())
                    )
                    : category != ""
                        ? productList.filter(e => e.category.name == category)
                        : productList}
                        
                        setCartItems={setCartItems}/>
        </div>
    )
}

// e commerce product List  :  products Search bar : name category Cart