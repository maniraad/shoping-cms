import React from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../Comments/ProductsTable/ProductsTable'

export default function Products() {
  return (
    <>
      {/* <ErrorBox msg={'محصولی یافت نشد !'} /> */}
      {/* <AddNewProduct /> */}
      <ProductsTable/>
    </>
  )
}
