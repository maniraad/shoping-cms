import React, { useState, useEffect } from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'


export default function Products() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    fetch("http://localhost:3000/api/products/")
      .then(res => res.json())
      .then(products => setAllProducts(products))
  }

  return (
    <>
      <div className="mb-5 sm:mb-7 md:mb-12"><AddNewProduct getAllProducts={getAllProducts} /></div>
      <div className="mb-5 sm:mb-7 md:mb-12"><ProductsTable allProducts={allProducts} getAllProducts={getAllProducts} /></div>
    </>
  )
}
